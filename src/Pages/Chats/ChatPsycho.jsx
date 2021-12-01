import React from "react";
import styles from "./Chats.module.css";
import { db } from "../../Utils/FireBaseConfig";
import { useState, useEffect} from "react";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import firebase from "firebase";
import { useParams } from "react-router-dom";


export default function ChatPacient(){
    const { user } = useContext(UserContext);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const params = useParams();
    const auth = firebase.auth();
    const firestore = firebase.firestore();
    const analytics = firebase.analytics();

    useEffect(() => {
        if (db){
            const unsubscribe = db
            .collection("chats")
            .where("idPacient", "==", params.idPacient)
            .where("idPsycho", "==", user.id)
            .limit(25)
            .onSnapshot(querySnapshot => {
                const data = querySnapshot.docs.map(doc => ({
                    ...doc.data(),
                    id: doc.id,
                }));
                setMessages(data.sort((a, b) => a.date - b.date));
            });
            return unsubscribe;
        }
    }, [db]);

    const handleSubmit = e => {
        e.preventDefault();
        if (db){
            db.collection("chats").add({
                message: newMessage,
                date: firebase.firestore.FieldValue.serverTimestamp(),
                idPsycho: user.id,
                idPacient: params.idPacient,
                from: user.name + " " + user.lastName,
            })
            setNewMessage("")
        }
    }



    const handleOnChange = e => {
        setNewMessage(e.target.value);
    }

    return (
        <>
            <div class={styles.body}>
            <h1 class = {styles.titulo}>Bienvenido/a al chat con tu paciente</h1>
                <div class = {styles.messages}>
                    {messages.map(message => (
                        <div class={styles.mini}>
                            {message.from == user.name?
                            <div id = {styles.Psicologo}>
                                <p id={styles.namePsicologo}>{message.from}</p>
                                <div class={styles.textPsicologo}>
                                <p id={styles.mensajePsicologo}>{message.message}</p>
                                </div>
                            </div>:
                            <div id = {styles.Paciente}>
                                <p id={styles.namePaciente}>{message.from}</p>
                                <div class={styles.textPaciente}>
                                <p id={styles.mensajePaciente}>{message.message}</p>
                                </div>
                                </div>}
                        </div>
                    ))}
                </div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <input type="text" 
                        value={newMessage} 
                        class = {styles.writespace}
                        onChange={handleOnChange} 
                        placeholder="Escribe aqui tu mensaje..."/>
                        <button type="submit" disabled={!newMessage} id = {styles.button}>
                        <svg xmlns="http://www.w3.org/2000/svg"  fill="#ffff" class="bi bi-send" viewBox="0 0 16 16">
                        <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
                        </svg>
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}