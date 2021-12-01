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
    const [isLoading, setIsLoading] = useState(false);
    const [values, setValues] = useState({
        date: "",
        hour: "",
        idPsycho: "",
        idPacient: "",
        namePacient: "",
        lastNamePacient: "",
        reason: "",
        status: ""
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
        const response = db.collection("consultations");
        const data = await response.get();
        var cd = true
        data.docs.forEach((item)=>{
            const us = {data:item.data(), id:item.id};
            if (us.data.idPsycho === idPsycho && us.data.date === date && us.data.hour === hour){
                cd = false
            }
        })
        return cd
    }

    const handleOnChange = (e) =>{
        const { value, name: inputName } = e.target;
        setValues({ ...values, [inputName]: value });
        const dates = new Date(values.date).toString().split(" ")
    }

    const handleSubmit = async () => {
        try{
            const dates = new Date(values.date).toString().split(" ")
            if (values.idPsycho !== ""){
                if ((values.date !== "") && (dates[0] !== "Sat") && (dates[0] !== "Fri")){
                    if (values.hour !== ""){
                        if (values.reason !== ""){
                            if (await checkDate(values.date, values.hour, values.idPsycho)){
                                setIsLoading(true);
                                await db.collection("consultations").add({
                                    date: values.date,
                                    hour: values.hour,
                                    idPsycho: values.idPsycho,
                                    idPacient: user.id,
                                    namePacient: user.name,
                                    lastNamePacient: user.lastName,
                                    reason: values.reason,
                                    status: "pending"
                                });
                                window.alert("Cita agendada con exito.")
                                setIsLoading(false);
                                history.push("/Payment");
                            }else{
                                window.alert("Lo sentimos, esa fecha esta ocupada.")
                            }
                        }else{
                            window.alert("Asegurese de escribir un motivo de consulta valido.")
                        }
                    }else{
                        window.alert("Asegurese de seleccionar un horario.")
                    }
                }else{
                    window.alert("Asegurese de seleccionar una fecha valida (De Lunes a Viernes).")
                }
            }else{
                window.alert("Asegurese de seleccionar un psicologo.")
            }
        }catch (e){
            window.alert(e)
        }
    }

    return(
        <>
            {isLoading ? (
                <div id={styles.isLoading}>
                    <h1>Cargando...</h1>
                    <h1>Será redirigido automáticamente.</h1>
                </div>
             ) : (
                <div class={styles.body}>
                    <div class = {styles.titulo}>
                        <h1>Agendar cita</h1>
                    </div>
                    <div id={styles.section}>
                        <p class={styles.question}>Seleccione un psicólogo:</p>
                        <select value={values.idPsycho} onChange={handleOnChange} name="idPsycho" id={styles.input}>
                            <option value = "">Seleccione un psicólogo</option>
                            {psychologists.map((p) => (
                                    <option value={p.id}>{p.data.name} {p.data.lastName}</option>
                            ))}
                        </select>

                        <p class={styles.question}>Seleccione una fecha:</p>
                        <input type="date" min="2021-12-3" value={values.date} name="date" id={styles.input} onChange={handleOnChange}></input>

                        <p class={styles.question}>Seleccione un horario:</p>
                        <select value={values.hour} name="hour" id={styles.input} onChange={handleOnChange}>
                            <option value = "">Seleccione un horario</option> 
                            {time.map((p) => (
                                <option value={p}>{p}</option>
                            ))}
                        </select>
                        
                        <p class={styles.question}>Explique el motivo de la consulta:</p>
                        <textarea rows="10" placeholder="Escribe aqui..." value={values.reason} id={styles.input} name="reason" onChange={handleOnChange}></textarea>
                        <button id={styles.button} onClick={handleSubmit}>Agendar</button>
                    </div>
                </div>
            )},
        </>
    )
}