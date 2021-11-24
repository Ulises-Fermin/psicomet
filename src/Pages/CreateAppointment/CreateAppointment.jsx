import React from "react";
import { db } from "../../Utils/FireBaseConfig";
import { useState, useEffect } from "react";
import styles from "./CreateAppointment.module.css"

function ShowItinerary(itinerarys) {
    var list = [];
    const itinerary = itinerarys;
    for (const days in itinerary){
        for (const hours in itinerary[days])
            if (itinerary[days][hours]["checked"] === true){
                const day = days + " " + itinerary[days][hours]["value"];
                list.push(day)
            }
    }
    return list
};

export default function CreateAppointment(){
    const [psychologists, setPsychologists] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [values, setValues] = useState("");
    const [time, setTime] = useState("");

    const list = [];
    const itinerarys = "";

    useEffect(() => {
        fetchPsychologists();
        fetchTime();
      }, []);
    useEffect(() => {
        fetchTime();
      }, [time]);

    const fetchPsychologists = async () => {
        const response = db.collection("users");
        const data = await response.get();
        data.docs.forEach((item) => {
            if (
                item.data().role === "psychologist" &&
                item.data().status === "accept"
            ){
                list.push({data:item.data(), id:item.id});
            }
            });
        setPsychologists(list);
        return list;
    };

    const fetchTime = async () => {
        const response = db.collection("users");
        const data = await response.get();
        data.docs.forEach((item) => {
            if (item.id === values){
                const us = {data:item.data(), id:item.id};
                const itinerarys = us.data.itinerary;
                setTime(ShowItinerary(itinerarys));
                setIsLoading(false)
            }
            });
        return itinerarys;
    };

    const handleOnChange = (e) =>{
        setValues(e.target.value)
        if (values !== null){
            fetchTime();
        }
    }

    return(
        <>
            {isLoading ? (
                <div class={styles.body}>
                    <div class={styles.section}>
                        <h3>Seleccione un psicologo:</h3>
                        <select value={values.psycho} onChange={handleOnChange}>
                            {psychologists.map((p) => (
                                    <option value={p.id}>{p.data.name} {p.data.lastName}</option>
                            ))}
                        </select>
                    </div>
                </div>
            ) : (
            <div class={styles.body}>
                <div class={styles.section}>
                    <h3>Seleccione un psicologo:</h3>
                    <select value={values.psycho} onChange={handleOnChange}>
                        {psychologists.map((p) => (
                                <option value={p.id}>{p.data.name} {p.data.lastName}</option>
                        ))}
                    </select>
                </div>
                <div class={styles.section}>
                    <h3>Seleccione una fecha:</h3>
                    <input type="date" min="2021-11-26"></input>
                </div>
                <div class={styles.section}>
                    <h3>Seleccione un horario:</h3>
                    <select>
                    {time.map((p) => (
                                <option value={p}>{p}</option>
                        ))}
                    </select>
                </div>
                <div class={styles.section}>
                <h3>Explique el motivo de la consulta:</h3>
                <textarea rows="10" placeholder="Escribe aqui..."></textarea>
                </div>
                <div class={styles.section}>
                <button>Agendar</button>
                </div>
            </div>
            )}
        </>
    )
}