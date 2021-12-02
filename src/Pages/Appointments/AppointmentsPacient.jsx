import React from "react";
import styles from "./Appointments.module.css";
import { db } from "../../Utils/FireBaseConfig";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { Link } from "react-router-dom";

export default function AppointmentsPacients(){
    const { user } = useContext(UserContext);
    const [datesPending, setDatesPending] = useState([]);
    const [datesFinished, setDatesFinished] = useState([]);
    const [datesCanceled, setDatesCanceled] = useState([]);
    const [isLoading ] = useState(false);

    const listPending = [];
    const pending = async () => {
    const citas = db.collection("consultations");
    const data = await citas.get();
    data.docs.forEach((item) => {
      if (item.data().idPacient === user.id && item.data().status === "Pendiente") {
        listPending.push({ data: item.data(), id: item.id });
      }
    });
    setDatesPending(listPending.sort(function(a,b){return new Date(a.data.date) - new Date(b.data.date)}));
    return listPending;
  };

  const listFinished = [];
  const finished = async () => {
    const citas = db.collection("consultations");
    const data = await citas.get();
    data.docs.forEach((item) => {
      if (item.data().idPacient === user.id && item.data().status === "Culminada") {
        listFinished.push({ data: item.data(), id: item.id });
      }
    });
    setDatesFinished(listFinished.sort(function(a,b){return new Date(a.data.date) - new Date(b.data.date)}));
    return listFinished;
  };

  const listCanceled = [];
  const canceled = async () => {
    const citas = db.collection("consultations");
    const data = await citas.get();
    data.docs.forEach((item) => {
      if (item.data().idPacient === user.id && item.data().status === "Cancelada") {
        listCanceled.push({ data: item.data(), id: item.id });
      }
    });
    setDatesCanceled(listCanceled.sort(function(a,b){return new Date(a.data.date) - new Date(b.data.date)}));
    return listCanceled;
  };

    useEffect(() => {
        pending();
        finished();
        canceled();
      }, [db]);

    return (
        <>
      {isLoading ? (
        <div id={styles.isLoading}>
          <h1>Cargando...</h1>
          <h1>Será redirigido automáticamente.</h1>
        </div>
      ) : (
        <div id={styles.sections}>
        <h2>Consultas Pendientes:</h2>
          <div class={styles.section}>
          {datesPending.map((d) => (
            <div class={styles.card}>
              <h2 id={styles.titulo}>Consulta</h2>
              <p id={styles.nombre}>
                {d.data.namePsycho} {d.data.lastNamePsycho}
              </p>
              <p id={styles.fecha}>{d.data.date}</p>
              <p id={styles.fecha}>{d.data.hour}</p>
              <div id={styles.buttons}>
              <Link to={`/Chat/${d.data.idPsycho}`}>Abrir Chat</Link>
              <div>
                <p>Estatus de la consulta:</p>
                <p>{d.data.status}</p>
              </div>
              </div>
            </div>
          ))};
          </div>
          <h2>Consultas Culminadas:</h2>
          <div class={styles.section}>
          {datesFinished.map((d) => (
            <div class={styles.card}>
              <h2 id={styles.titulo}>Consulta</h2>
              <p id={styles.nombre}>
                {d.data.namePacient} {d.data.lastNamePacient}
              </p>
              <p id={styles.fecha}>{d.data.date}</p>
              <p id={styles.fecha}>{d.data.hour}</p>
              <div>
                <p>Estatus de la consulta:</p>
                <p>{d.data.status}</p>
              </div>
            </div>
          ))};
          </div>
          <h2>Consultas Canceladas:</h2>
          <div class={styles.section}>
          {datesCanceled.map((d) => (
            <div class={styles.card}>
              <h2 id={styles.titulo}>Consulta</h2>
              <p id={styles.nombre}>
                {d.data.namePacient} {d.data.lastNamePacient}
              </p>
              <p id={styles.fecha}>{d.data.date}</p>
              <p id={styles.fecha}>{d.data.hour}</p>
              <div>
                <p>Estatus de la consulta:</p>
                <p>{d.data.status}</p>
              </div>
            </div>
          ))};
          </div>
        </div>
      )}
    </>
    )
}