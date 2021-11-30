import React from "react";
import { useContext } from "react";
import styles from "./Testimonials.module.css";
import { UserContext } from "../../Context/UserContext";
import { db } from "../../Utils/FireBaseConfig";
import "firebase/auth";
import "firebase/firestore";
<<<<<<< HEAD
import { useTestimonials } from "./UseTestimonials";
import psicometLogo from "../../Images/LogoPsicomet.png";

=======
import psicometLogo from '../../Images/LogoPsicomet.png'
import { useState, useEffect } from "react";
import { app } from "../../Utils/FireBaseConfig";
>>>>>>> develop
function Testimonials() {
  const { user, setUser } = useContext(UserContext);
  const [message, setMessage] = React.useState("");
  const list = []
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([])
  const [url, setUrl] = useState([]);


  const questtext = async () => {
    setIsLoading(true)
    const response = db.collection("messages");
    const data = await response.get();
    data.docs.forEach(item => {
      if (item.data().userShow === "true")
        list.push({ data: item.data(), id: item.id });
    })
    setMessages(list);
    setIsLoading(false);
    return list
  }
  useEffect(() => {
    questtext();
  }, [])
  /*useEffect(() => {
    watchpicture()
  }, []);*/

  const sendMessage = (e) => {
    if (!(message === "" || user.status === "denegate" || user.photo === "false")) {
      e.preventDefault();
      {
<<<<<<< HEAD
        !!user
          ? db.collection("messages").add({
              timestramp: Date.now(),
              message,
              userName: user.name,
              userLastName: user.lastName,
              userEmail: user.email,
              userShow: "true",
            })
          : window.alert("Debes iniciar sesión para enviar un testimonio.");
=======
        (!!user) ? (db.collection("messages").add({
          timestramp: Date.now(),
          message,
          userName: user.name,
          userLastName: user.lastName,
          userEmail: user.email,
          userShow: "true",
          iduser: user.id,
        }))
          : (window.alert("Debes iniciar sesión para enviar un testimonio."))
>>>>>>> develop
      }
      questtext();
    } else {
      window.alert(
        "El testimonio se encuentra vacío o el usuario ha sido bloqueado de la plataforma."
      );
    }


  };
  /*const watchpicture = async (p) => {
    console.log(p.data.iduser)
    const ref = app.storage().ref("Fotos/" + p);
    const image = await ref.getDownloadURL()
    setUrl(image)
  };*/

  const deletetext = async (p) => {
    console.log(p.data.iduser)
    db.collection("messages").doc(p.id).update({
      userShow: "false",
    })
    window.alert("Se ha eliminado el mensaje")
    questtext()
  }
  return (
    <>
      <div id={styles.body}>
<<<<<<< HEAD
        <div id={styles.titlediv}>
          <p id={styles.title}>Testimonios de pacientes</p>
        </div>
        <div id={styles.minbody}>
          <div id={styles.TestimonialsSpace}>
            <ul>
              <div>
                {messages.map((m) => (
                  <li id={styles.cuadro} key={m.id}>
                    <div id={styles.block}>
                      <img
                        src={psicometLogo}
                        id={styles.Logo}
                        alt="Logo de Psicomet"
                      />

                      <div id={styles.text}>
                        <p>
                          {m.userName} {m.userLastName}
                        </p>
                        <p>{m.userEmail}</p>
                        <br></br>
                        {m.message}
                      </div>
                    </div>
                    {user?.role === "admi" ? (
                      <button class={styles.psychoListA}>
                        Eliminar mensaje
                      </button>
                    ) : null}
                  </li>
                ))}
=======
            <div id={styles.titlediv}>
              <p id={styles.title}>Testimonios de pacientes</p>
            </div>
            <div id={styles.minbody}>
              <div id={styles.TestimonialsSpace}>
                <ul>
                  <div>
                    {messages.map((m) => (
                      <li id={styles.cuadro} >
                        <div id={styles.block}>
                          <img  src={psicometLogo} id={styles.Logo} alt="" />
                          <div id={styles.text}>
                            <p>{m.data.userName} {m.data.userLastName}</p>
                            <p>{m.data.userEmail}</p>
                            <br></br>
                            {m.data.message}
                          </div>
                        </div>
                        {(user?.role === "admi") ? (
                          <div id={styles.deletecontainer}>
                            <button class={styles.delete} onClick={() => deletetext(m)}><p id={styles.deletebuttom}>Eliminar</p></button>
                          </div>
                        ) : (null)}

                      </li>
                    ))}
                  </div>
                </ul>
>>>>>>> develop
              </div>
              <div id={styles.WriteSpace}>
                <p>Escribe tu testimonio aquí: </p>
                <form action="">
                  <textarea
                    id={styles.Write}
                    rows="10"
                    placeholder="Escribe aquí tu experiencia en PsicoMet:"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <button type="submit" id={styles.button} onClick={sendMessage}>
                    {" "}
                    Enviar mensaje
                  </button>
                </form>
              </div>
            </div>
          </div>
        </>
  );
}

export default Testimonials;
