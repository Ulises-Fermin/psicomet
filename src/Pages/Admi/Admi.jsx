import React from "react";
import styles from "./Admi.module.css";
import {db} from "../../Utils/FireBaseConfig";
import {useState, useEffect, useContext} from "react";
import { UserContext } from "../../Context/UserContext";


function Admi() {
    const [names, setNames] = useState("");
    const [psychologists, setPsychologists] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { user, setUser } = useContext(UserContext);
    const list = [];
    /*const [values, setValues] = useState({
        status: "",
    })*/
    const fetchPsychologists = async()=>{
        setIsLoading(true)
        const response = db.collection("users");
        const data = await response.get();
        data.docs.forEach(item =>{
            if (item.data().status === "waiting")
            list.push(item.data());
        })
        setPsychologists(list);
        setIsLoading(false);
        return list
    }

    useEffect(()=>{
        fetchPsychologists();
    },[])

    /*const handleOnChange = (event) => {
        const { value, name: inputName } = event.target;
        setValues({ ...values, [inputName]: value });
        console.log(inputName, value);
      };*/

    /*const handleSubmit = async (e) => {
        if (values.status === "accept") {
            console.log("YESSS")
           db.collection("users").doc(user.id).update({
              status: values.status,
            }); 
        } else {
            console.log("NOOO")
            user.status = user.status;
        }
    }
    const handleSubmit2 = async (e) => {
        if (values.status === "denegate") {
           db.collection("users").doc(user.id).update({
              status: values.status,
            }); 
        } else {
            user.status = user.status;
        }
    }*/




    const ChangeStatusA = async (p) => {
        db.collection("users").doc("DdsZfdEJS5ZoodypvRPiEUKjSvQ2").update({
            status: "accept", 
            
        });console.log(p.name)
          
    }
    
    const ChangeStatusD = async (p) => {
        db.collection("users").doc(user.id).update({
            status: "denegate", 
            
        })
          
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
                    <li class={styles.psychoList}>{p.name}</li>
                    <li class={styles.psychoList}>{p.lastName}</li>
                    <li class={styles.psychoList}>{p.email}</li>
                    <li class={styles.psychoList}>{p.phone}</li>
                    <li class={styles.psychoList}>{p.specialty}</li>
                    <li class={styles.psychoList}>{p.curriculum}</li>
                    <button class={styles.psychoListA} onClick={ChangeStatusA}>Aceptar</button>
                    <button class={styles.psychoListD} onClick={ChangeStatusD}>Denegar</button>
                    </div>
                ))}
            </div>
          
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