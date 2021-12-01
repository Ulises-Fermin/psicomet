import React from "react";
import styles from "./Appointments.module.css";
import { db } from "../../Utils/FireBaseConfig";
import { useState, useEffect } from "react";
import PopUp from "reactjs-popup";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { Link } from "react-router-dom";

function Appointments() {
  const { user } = useContext(UserContext);
  const [datesPending, setDatesPending] = useState([]);
  const [datesFinished, setDatesFinished] = useState([]);
  const [datesCanceled, setDatesCanceled] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = useState({
    idPacient: "",
    idPsycho: "",
    namePacient: "",
    lastNamePacient: "",
    namePsycho: "",
    lastNamePsycho: "",
    date: "",
    progress: "",
    treatment: "",
    observations: "",
    status: "",
  });
  const listPending = [];
  const pending = async () => {
    const citas = db.collection("consultations");
    const data = await citas.get();
    data.docs.forEach((item) => {
      if (item.data().idPsycho === user.id && item.data().status === "Pendiente") {
        listPending.push({ data: item.data(), id: item.id });
        console.log(item.data.idPsycho);
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
      if (item.data().idPsycho === user.id && item.data().status === "Culminada") {
        listFinished.push({ data: item.data(), id: item.id });
        console.log(item.data.idPsycho);
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
      if (item.data().idPsycho === user.id && item.data().status === "Cancelada") {
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

  const handleOnClic = async (userId) => {
    try {
      var citas = db.collection("users");
      var item = await citas.doc(userId).get();
      var us = { data: item.data(), id: item.id };
      createHistory(us.id, us.data.name, us.data.lastName);
    } catch (e) {
      console.log(e);
    }
  };

  const handleOnChange = (e) => {
    const { value, name: inputName } = e.target;
    setValues({ ...values, [inputName]: value });
  };

  const createHistory = async (id, name, lastName) => {
    setIsLoading(true);
    const today = new Date();
    const now = today.toString().split(" ");
    const date = now[1] + "-" + now[2] + "-" + now[3];
    await db.collection("histories").add({
      idPacient: id,
      idPsycho: user.id,
      namePacient: name,
      lastNamePacient: lastName,
      namePsycho: user.name,
      lastNamePsycho: user.lastName,
      date: date,
      progress: values.progress,
      treatment: values.treatment,
      observations: values.observations,
    });
    window.alert("Historia generada con exito.");
    setIsLoading(false);
  };

  const handleSubmit = async (id) => {
    await db.collection("consultations").doc(id).update({
      status: values.status,
    })
    window.alert("Estatus guardado con exito.");
    pending();
    finished();
    canceled();
  }

  return (
    <>
      {isLoading ? (
        <div id={styles.isLoading}>
          <h1>Cargando...</h1>
          <h1>Será redirigido automáticamente.</h1>
        </div>
      ) : (
        <div id={styles.sections}>
        <h2 class={styles.types}>Consultas Pendientes:</h2>
          <div class={styles.section}>
          {datesPending.map((d) => (
            <div class={styles.card}>
              <h2 id={styles.titulo}>Consulta</h2>
              <p id={styles.nombre}>
                {d.data.namePacient} {d.data.lastNamePacient}
              </p>
              <p id={styles.fecha}>{d.data.date}</p>
              <p id={styles.fecha}>{d.data.hour}</p>
              <div id={styles.buttons}>
              <Link to={`/ChatPsycho/${d.data.idPacient}`} id={styles.chatOpen}>Abrir Chat</Link>
              <PopUp trigger={<button id={styles.history}>Generar nueva historia</button>} modal>
                <div>
                  <h1>Paciente:</h1>
                  <h1>
                    {d.data.namePacient} {d.data.lastNamePacient}
                  </h1>
                  <h2>Avances:</h2>
                  <textarea
                    rows="5"
                    placeholder="Escribe aqui..."
                    value={values.progress}
                    name="progress"
                    onChange={handleOnChange}
                  ></textarea>
                  <h2>Tratamiento aplicado:</h2>
                  <textarea
                    rows="5"
                    placeholder="Escribe aqui..."
                    value={values.treatment}
                    name="treatment"
                    onChange={handleOnChange}
                  ></textarea>
                  <h2>Otras observaciones:</h2>
                  <textarea
                    rows="5"
                    placeholder="Escribe aqui..."
                    value={values.observations}
                    name="observations"
                    onChange={handleOnChange}
                  ></textarea>
                  <button onClick={() => handleOnClic(d.data.idPacient)}>
                    Generar historia
                  </button>
                </div>
              </PopUp>
              <div>
                <p>Estatus de la consulta:</p>
                <select
                name="status"
                onChange={handleOnChange}>
                  <option value="">{d.data.status}</option>
                  <option value="Culminada">Culminada</option>
                  <option value="Cancelada">Cancelada</option>
                </select>
                <button onClick={() => handleSubmit(d.id)} id={styles.save}>Guardar</button>
              </div>
              </div>
            </div>
          ))};
          </div>
          <h2 class={styles.types}>Consultas Culminadas:</h2>
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
          <h2 class={styles.types}>Consultas Canceladas:</h2>
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
  );
}

export default Appointments;
