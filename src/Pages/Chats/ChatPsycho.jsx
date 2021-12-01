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

    useEffect(() => {
        var list = [];
        if (db){
            const unsubscribe = db
            .collection("chats")
            .orderBy("date")
            .limit(25)
            .onSnapshot(querySnapshot => {
                const data = querySnapshot.docs.map(doc => ({
                    ...doc.data(),
                    id: doc.id,
                }));
                // data.forEach((item)=>{
                //     if (item.idPsycho === user.id && item.idPacient === params.idPacient){
                //         list.push(item);
                //     }
                // })
                setMessages(data);
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
                from: user.name,
            })
            setNewMessage("")
        }
    }
    const handleOnChange = e => {
        setNewMessage(e.target.value);
    }

    return (
        <>
            <div>
                <div>
                    <h1>Bienvenido al chat con tu Paciente.</h1>
                    {messages.map(message => (
                        <div>
                            <h4>{message.from}:</h4>
                            <p>{message.message}</p>
                        </div>
                    ))}
                </div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <input type="text" 
                        value={newMessage} 
                        onChange={handleOnChange} 
                        placeholder="Escribe aqui tu mensaje..."/>
                        <button type="submit" disabled={!newMessage}>Enviar</button>
                    </form>
                </div>
            </div>
        </>
    )
}