import React from "react";
import { db } from "../../Utils/FireBaseConfig";
import { useState, useEffect, useContext } from "react";
import styles from "./CreateAppointment.module.css"
import { UserContext } from "../../Context/UserContext";
import { useHistory } from "react-router";

function ShowItinerary(itinerarys) {
    var list = [];
    for (const days in itinerarys){
        if (itinerarys[days]["checked"] === true){
            const day = itinerarys[days]["value"];
            list.push(day)
        }
    }
    return list
};

export default function CreateAppointment(){
    const {user} = useContext(UserContext);
    const [psychologists, setPsychologists] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [values, setValues] = useState({
        date: "",
        hour: "",
        idPsycho: "",
        idPacient: "",
        reason: "",
    });
    const [time, setTime] = useState([]);

    const list = [];
    const itinerarys = "";
    const history = useHistory();

    useEffect(() => {
        fetchPsychologists();
      }, [psychologists]);
      useEffect(() => {
        fetchTime();
      }, [psychologists]);


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
            if (item.id === values.idPsycho){
                const us = {data:item.data(), id:item.id};
                const itinerarys = us.data.itinerary;
                const list = ShowItinerary(itinerarys)
                setTime(list);
            }
            });
        return itinerarys;
    };

    const checkDate = async (date, hour, idPsycho) => {
        console.log("entro")
        const response = db.collection("consultations");
        const data = await response.get();
        var cd = true
        data.docs.forEach((item)=>{
            const us = {data:item.data(), id:item.id};
            if (us.data.idPsycho === idPsycho && us.data.date === date && us.data.hour === hour){
                cd = false
            }
        })
        console.log("salio")
        return cd
    }

    const handleOnChange = (e) =>{
        const { value, name: inputName } = e.target;
        setValues({ ...values, [inputName]: value });
    }

    const handleSubmit = async () => {
        setIsLoading(true);
        if (await checkDate(values.date, values.hour, values.idPsycho)){
            await db.collection("consultations").add({
                date: values.date,
                hour: values.hour,
                idPsycho: values.idPsycho,
                idPacient: user.id,
                reason: values.reason,
            });
        }else{
            window.alert("Lo siento, esa fecha esta ocupada.")
        }
        setIsLoading(false);
        history.push("/Home");
    }

    return(
        <>
            {/* {isLoading ? (
                <div class={styles.body}>
                    <div class={styles.section}>
                        <h3>Seleccione un psicologo:</h3>
                        <select value={values.psycho} onChange={handleOnChange} name="psycho">
                            {psychologists.map((p) => (
                                    <option value={p.id}>{p.data.name} {p.data.lastName}</option>
                            ))}
                        </select>
                    </div>
                </div>
            ) : ( */}
            <div class={styles.body}>
                <div class={styles.section}>
                    <h3>Seleccione un psicologo:</h3>
                    <select value={values.idPsycho} onChange={handleOnChange} name="idPsycho">
                        {psychologists.map((p) => (
                                <option value={p.id}>{p.data.name} {p.data.lastName}</option>
                        ))}
                    </select>
                </div>
                <div class={styles.section}>
                    <h3>Seleccione una fecha:</h3>
                    <input type="date" min="2021-11-29" value={values.date} name="date" onChange={handleOnChange}></input>
                </div>
                <div class={styles.section}>
                    <h3>Seleccione un horario:</h3>
                    <select value={values.hour} name="hour" onChange={handleOnChange}>
                    {time.map((p) => (
                                <option value={p}>{p}</option>
                        ))}
                    </select>
                </div>
                <div class={styles.section}>
                <h3>Explique el motivo de la consulta:</h3>
                <textarea rows="10" placeholder="Escribe aqui..." value={values.reason} name="reason" onChange={handleOnChange}></textarea>
                </div>
                <div class={styles.section}>
                <button onClick={handleSubmit}>Agendar</button>
                </div>
            </div>
            {/* )} */}
        </>
    )
}