import React from "react";
import styles from "./Chats.module.css";
import { db } from "../../Utils/FireBaseConfig";
import { useState, useEffect, useRef } from "react";
import PopUp from "reactjs-popup";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import Chats_paciente from "./Chats_paciente";
import { useCollectionData } from 'react-firebase-hooks/firestore';

export default function ChatPacient(){
    const { user } = useContext(UserContext);

    const dummy = useRef();
    const messagesRef = db.collection("chat");
    const query = messagesRef.orderBy('date').limit(25);

    const [messages] = useCollectionData(query, { idField: 'id' });

    return(
        <>
            <div>
                <h1>Bienvenido al Chat con tu especialista.</h1>
                {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
            </div>
        </>
    )

    function ChatMessage(props) {
        const { text, uid, photoURL } = props.message;
      
        return (<>
          <div>
            <p>{text}</p>
          </div>
        </>)
      }
}