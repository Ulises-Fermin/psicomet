import React from "react";
import {useContext} from "react";
import styles from "./Chats.module.css";
import {Link} from "react-router-dom";
import {UserContext} from "../../Context/UserContext";
import {auth, db} from "../../Utils/FireBaseConfig";
import "firebase/auth";
import "firebase/firestore"
import { useChat } from "./UseChat";

function Chats(){
    const [message, setMessage] = React.useState('');
    const {loading, messages, error} = useChat();

    const sendMessage = (e) =>{
        e.preventDefault();

        db.collection("messages").add({ timestramp: Date.now(), message});
    }
    return (
        <div id={styles.body}>
            <div>
                <p>Escribe tu mensaje: </p>
                <form action=""> 
                    <input value={message} onChange={(e) => setMessage(e.target.value)}/>
                    <button type="submit" onClick={sendMessage}> Enviar mensaje</button>    
                </form>
                <ul>
                    {messages.map(m => <li key={m.id}>{m.message}</li>)}
                </ul>
            </div>
        </div>        
    );
}
  
  export default Chats;