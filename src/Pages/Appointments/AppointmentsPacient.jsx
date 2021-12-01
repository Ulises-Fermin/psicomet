import React from "react";
import styles from "./Appointments.module.css";
import { db } from "../../Utils/FireBaseConfig";
import { useState, useEffect } from "react";
import PopUp from "reactjs-popup";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";

export default function AppointmentsPacients(){
    const { user, setUser } = useContext(UserContext);
    const [dates, setDates] = useState([]);

    const list = [];
    const cards = async () => {
        const citas = db.collection("consultations");
        const data = await citas.get();
        data.docs.forEach((item) => {
            if ((item.data().idPacient === user.id)) {
                list.push({ data: item.data(), id: item.id });
            }
        });
        setDates(list);
        return list;
    };

    useEffect(() => {
        cards();
      }, [user]);

    return (
        <>
            <div>
                <h1>Mis Consultas:</h1>
                {dates.map((d) => (
                    <div class={styles.card}>
                        <h2 id={styles.titulo}>Consulta</h2>
                        <h3>Especialista:</h3>
                        <p id={styles.nombre}>{d.data.namePsycho} {d.data.lastNamePsycho}</p>
                        <h3>Fecha:</h3>
                        <p id={styles.fecha}>{d.data.date}</p>
                        <h3>Hora:</h3>
                        <p id={styles.fecha}>{d.data.hour}</p>
                    </div>
                ))};
            </div>
        </>
    )
}