import React from "react";
import styles from "./Quest.module.css";
import {db} from "../../Utils/FireBaseConfig";
import {useState, useEffect} from "react";
import Popup from "reactjs-popup";

function Quest() {
    const [names, setNames] = useState("");
    const [psychologists, setPsychologists] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const list = [];

    const fetchPsychologists = async()=>{
        const response = db.collection("users");
        const data = await response.get();
        data.docs.forEach(item =>{
            if ((item.data().role === "psychologist") && (item.data().status === "accept") && ((item.data().name +" "+item.data().lastName).toLowerCase()).includes((names).toLocaleLowerCase())){
                list.push(item.data());
            }
        })
        setPsychologists(list);
        return list
    }

    useEffect(()=>{
        fetchPsychologists();
    },[names])

    const handleOnChange = async (e) => {
        setNames(e.target.value);
    };

    const handleSubmit = (e) => {
        const get = [];
        psychologists.forEach(psycho => {
            if (((psycho.name +" "+psycho.lastName).toLowerCase()).includes(names.toLocaleLowerCase())){
                get.push(psycho)
            }
        })
        setPsychologists(get);
    }

    const showMore = (e) => {
        <Popup trigger = {<button class={styles.psychoList} onClick={showMore}>Ver mas</button>} modal>
            Hola
        </Popup>
    }


    return (
        <>
        {isLoading ? (
        <div id={styles.isLoading}>
          <h1>Cargando Especialistas.</h1>
        </div>
        ) : (
        <div id={styles.body}>
            <h1 id={styles.title}>Buscar especialista</h1>
            <div id={styles.containerQuest}>
                <input type="text" placeholder="Introduzca nombre del especialista" id={styles.name} value={names} onChange={handleOnChange}></input>
                <button id={styles.button} onClick={handleSubmit}>Buscar</button>
            </div>    
            <div id={styles.container}>
                {psychologists.map((p)=>(
                    <div id={styles.psychoCards}>
                        <img src="clinica.jpg" alt="" />
                    <li class={styles.psychoList}>{p.name} {p.lastName}</li>
                    <li class={styles.psychoList}>{p.specialty}</li>
                    <Popup trigger = {<button class={styles.psychoList} onClick={showMore}>Ver más</button>} modal>
                        <div id = {styles.PopUp}>
                        <p>Nombre y Apellido: {p.name} {p.lastName}</p>
                        <p>Correo electrónico: {p.email}</p>
                        <p>Especialidad: {p.specialty}</p>
                        <button class={styles.psychoList}>Agendar Cita</button>
                        </div>
                    </Popup>
                    </div>
                ))}
            </div>
          
        </div>
        )
    }
    </>
  )
}
export default Quest;