import React from "react";
import styles from "./Appointments.module.css";
import { db } from "../../Utils/FireBaseConfig";
import { useState, useEffect } from "react";
import PopUp from "reactjs-popup";
import { app } from "../../Utils/FireBaseConfig";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { Button } from "react-scroll";

function Appointments() {
  const { user, setUser } = useContext(UserContext);
  const [pacient, setPacient] = useState("");
  const [dates, setdates] = useState([]);
  const list = [];
  const tarjetas = async () => {
    const citas = db.collection("consultations");
    const data = await citas.get();
    data.docs.forEach((item) => {
      if (item.data().idPsycho === user.id) {
        list.push({ data: item.data(), id: item.id });
      }
    });
    setdates(list);
    console.log(dates);
    return list;
  };
  useEffect(() => {
    tarjetas();
  }, [user]);

  const handleOnClic = async (userId) =>{
    const citas = db.collection("users");
    const data = await citas.get();
    data.docs.forEach((item) => {
        if (item.id === userId) {
        const us = {data:item.data(), id:item.id};
          setPacient(us)
        }
      });
  }


  return (
    <>
      <div>
        {dates.map((d) => (
          <div class={styles.card}>
            <h2 id={styles.titulo}>Consulta</h2>
            <p id={styles.nombre}>{d.data.namePacient} {d.data.lastNamePacient}</p>
            <p id={styles.fecha}>{d.data.date}</p>
            <p id={styles.fecha}>{d.data.hour}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Appointments;
