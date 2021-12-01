import React from "react";
import { useContext } from "react";
import styles from "./Chats.module.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import { auth, db } from "../../Utils/FireBaseConfig";
import "firebase/auth";
import "firebase/firestore";
import { useParams } from "react-router-dom";
import { useCollectionData } from "react";
import { useState, useEffect } from "react";
import { MdPanoramaFishEye } from "react-icons/md";

function Chats() {
  const { user } = useContext(UserContext);
  const params = useParams();
  const mensajes_lista = [];
  const [men, setmen] = React.useState("");
  const [mensajes, setmensajes] = useState([]);
  //const mensajes_fetch = async () => {
  // const messages = db.collection("messages_chat");
  // const query = messages.orderBy("fecha").limit(100);
  // const data = await query.get();
  // data.docs.forEach((item) => {
  //if (
  //item.data().idEspecialist === user.id &&
  //item.data().idPacient === params.idPacient
  //) //{
  // mensajes_lista.push({ data: item.data(), id: item.id });
  //}
  //});
  //setmensajes(mensajes_lista);
  //console.log(mensajes);
  //console.log(params.name);
  //return mensajes_lista;
  //};

  useEffect(() => {
    const unsubscribe = db
      .collection("messages_chat")
      .onSnapshot((snapshot) => {
        const datos = snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));
        datos.forEach((item) => {
          if (
            item.data.idEspecialist === user.id &&
            item.data.idPacient === params.idPacient
          ) {
            mensajes_lista.push({ data: item.data, id: item.id });
          }
        });
        setmensajes(mensajes_lista);
        console.log(mensajes);
      });
  }, []);

  const Hanndlechange = (e) => {
    sendMessage();
  };

  const sendMessage = (e) => {
    if (!(men === "")) {
      e.preventDefault();
      db.collection("messages_chat").add({
        fecha: Date.now(),
        men,
        idEspecialist: user.id,
        idPacient: params.idPacient,
        from: user.name,
      });
    } else {
      window.alert("No puede enviar un mensaje ne blanco.");
    }
  };
  return (
    <div id={styles.body}>
      {mensajes.map((message) =>
        message.data.from === user.name ? (
          <p>
            {user.name}: {message.data.men}
          </p>
        ) : (
          <p>{message.data.men}</p>
        )
      )}
      <form action="">
        <textarea
          id={styles.Write}
          rows="10"
          placeholder="Escriba su mensaje:"
          value={men}
          onChange={(e) => setmen(e.target.value)}
        />
        <button type="submit" id={styles.button} onClick={sendMessage}>
          {" "}
          Enviar mensaje
        </button>
      </form>
    </div>
  );
}
export default Chats;
