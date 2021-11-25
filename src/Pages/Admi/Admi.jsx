import React from "react";
import styles from "./Admi.module.css";
import {db} from "../../Utils/FireBaseConfig";
import {useState, useEffect, useContext} from "react";
import { UserContext } from "../../Context/UserContext";
import { app } from "../../Utils/FireBaseConfig"

function Admi() {
    const [names, setNames] = useState("");
    const [psychologists, setPsychologists] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { user, setUser } = useContext(UserContext);
    const list = [];
    const fetchPsychologists = async()=>{
        setIsLoading(true)
        const response = db.collection("users");
        const data = await response.get();
        data.docs.forEach(item =>{
            if (item.data().status === "waiting" && item.data().curriculum === "have")
            list.push({data:item.data(), id:item.id});
        })
        setPsychologists(list);
        setIsLoading(false);
        return list
    }


    useEffect(()=>{
        fetchPsychologists();
    },[])

    

    const ChangeStatusA = async (p) => {
        db.collection("users").doc(p.id).update({
            status: "accept", 
            
        });
        fetchPsychologists()
    
    
  };
          
    
    
    const ChangeStatusD = async (p) => {
        db.collection("users").doc(p.id).update({
            status: "denegate",   
        })
        fetchPsychologists()    
    }

    const DownloadCurriculum = async (p) => {
        const ref = app.storage().ref("Curriculum/" + p.id);
        const url = await ref.getDownloadURL()
        window.location = (url);
    }
      

    return (
        <>
        {isLoading ? (
        <div id={styles.isLoading}>
          <h1>Cargando Especialistas.</h1>
        </div>
        ) : (
        <div id={styles.body}>
            <h1 id={styles.title}>Aceptar personas</h1>    
            <div id={styles.container}>
                {psychologists.map((p)=>(
                    <div id={styles.psychoCards}>
                    <li class={styles.psychoList}>{p.data.name}</li>
                    <li class={styles.psychoList}>{p.data.lastName}</li>
                    <li class={styles.psychoList}>{p.data.email}</li>
                    <li class={styles.psychoList}>{p.data.phone}</li>
                    <li class={styles.psychoList}>{p.data.specialty}</li>
                    <li class={styles.psychoList}>{p.id}</li>
                    <button class={styles.psychoListC} onClick={() => DownloadCurriculum(p)}>Ver Curriculum</button>
                    
                    <button class={styles.psychoListA} onClick={() => ChangeStatusA(p)}>Aceptar</button>
                    <button class={styles.psychoListD} onClick={() => ChangeStatusD(p)}>Denegar</button>
                    </div>
                ))}
            </div>
            <canvas></canvas>
        </div>
        )
        
    }
    </>
  )
}
export default Admi;

/*<input
                        name="status"
                        id={styles.nombre}
                        type="text"
                        placeholder="accept/denegate"
                        value={values.status}
                        onChange={handleOnChange}
                    />*/