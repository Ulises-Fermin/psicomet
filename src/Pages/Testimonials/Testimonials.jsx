import React from "react";
import {useContext} from "react";
import styles from "./Testimonials.module.css";
import {Link} from "react-router-dom";
import {UserContext} from "../../Context/UserContext";
import {auth, db} from "../../Utils/FireBaseConfig";
import "firebase/auth";
import "firebase/firestore"
import { useTestimonials } from "./UseTestimonials";
import userEvent from "@testing-library/user-event";

function Testimonials(){
    const [message, setMessage] = React.useState('');
    const {loading, messages, error} = useTestimonials();
    
    const sendMessage = (e) =>{
        e.preventDefault();

        db.collection("messages").add({ timestramp: Date.now(), message});
    }
    return (
        <>
        <div id={styles.titlediv}>
            <p id={styles.title}>Testimonios de clientes</p>
        </div>
        <div id={styles.body}>
            <div id={styles.TestimonialsSpace}>
                <ul>
                    <div>  
                        {messages.map(m => <li id={styles.cuadro} key={m.id}>
                        <div id={styles.block}>
                            <img src="/LogoPsicomet.png" id={styles.Logo} alt="Logo de Psicomet" />
                            <div id={styles.text}>
                                <p>*Nombre* *fecha*</p>
                                <p>*Correo*</p>
                                <br></br>
                                {m.message}
                            </div>
                        </div></li>)}
                    </div>    
                </ul>
            </div>
            <div id={styles.WriteSpace}>
                <p>Escribe tu testimonio aqui: </p>
                <form action=""> 
                    <input id={styles.Write} value={message} onChange={(e) => setMessage(e.target.value)}/>
                    <button type="submit" id={styles.button} onClick={sendMessage}> Enviar mensaje</button>    
                </form>
                
            </div>
        </div>   
        </>     
    );
}
  
  export default Testimonials;