import React from "react";
import styles from "./Appointments.module.css";
import { db } from "../../Utils/FireBaseConfig";
import { useState, useEffect } from "react";
import Popup from "reactjs-popup";
import { app } from "../../Utils/FireBaseConfig";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { Usechats } from "./UseChats";
import { useHistory } from "react-router-dom";

function Appointments() {
  const { user, setUser } = useContext(UserContext);
  const [dates, setdates] = useState([]);
  const list = [];
  const tarjetas = async () => {
    const citas = db.collection("consultations");
    const data = await citas.get();
    data.docs.forEach((item) => {
      if (item.data().idPsycho === user.id) {
        list.push({ data: item.data(), id: item.id });
        console.log(item.data.idPsycho);
      }
    });
    setdates(list);
    console.log(dates);
    return list;
  };
  useEffect(() => {
    tarjetas();
  }, []);

  return (
    <>
      <div>
        {dates.map((d) => (
          <div class={styles.card}>
            <h2 id={styles.titulo}>Consulta</h2>
            <p id={styles.nombre}>{d.data.namePacient}</p>
            <p id={styles.fecha}>{d.data.date}</p>
            <Link to={`/Chats/${d.data.idPacient}`}>Abrir Chat</Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Appointments;
