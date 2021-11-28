import React from "react";
import styles from "./Appointments.module.css";
import { db } from "../../Utils/FireBaseConfig";
import { useState, useEffect } from "react";
import Popup from "reactjs-popup";
import { app } from "../../Utils/FireBaseConfig";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";

function Appointments() {
  const { user, setUser } = useContext(UserContext);
  const [dates, setdates] = useState([]);
  const list = [];
  const tarjetas = async () => {
    const citas = db.collection("consultations");
    const data = await citas.get();
    data.docs.forEach((item) => {
      if (item.data().ide === user.id) {
        list.push({ data: item.data(), id: item.id });
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
            <p id={styles.nombre}>{d.data.name_p}</p>
            <p id={styles.fecha}>16 de Noviembre, 10:00 am</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Appointments;
