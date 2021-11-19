import React from "react";
import styles from "./Quest.module.css";
import {db} from "../../Utils/FireBaseConfig";
import {useState, useEffect} from "react";

function Quest() {
    const [names, setNames] = useState("");
    const [psychologists, setPsychologists] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const list = [];

    const fetchPsychologists = async()=>{
        setIsLoading(true)
        const response = db.collection("users");
        const data = await response.get();
        data.docs.forEach(item =>{
            if (item.data().role === "psychologist")
            list.push(item.data());
        })
        setPsychologists(list);
        setIsLoading(false);
        return list
    }

    useEffect(()=>{
        fetchPsychologists();
    },[])

    const handleOnChange = async (e) => {
        setNames(e.target.value);
        if (names === ""){
            fetchPsychologists()
        }
    };

    const handleSubmit = (e) => {
        const get = [];
        psychologists.forEach(psycho => {
            if (psycho.name === names){
                get.push(psycho)
            }
        })
        setPsychologists(get);
    }

    const showMore = (e) => {
        
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
                    <li class={styles.psychoList}>{p.name}</li>
                    <li class={styles.psychoList}>{p.specialty}</li>
                    <button class={styles.psychoList} onClick={showMore}>Ver mas</button>
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