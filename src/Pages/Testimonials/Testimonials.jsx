import React from "react";
import { useContext } from "react";
import styles from "./Testimonials.module.css";
import { UserContext } from "../../Context/UserContext";
import { db } from "../../Utils/FireBaseConfig";
import "firebase/auth";
import "firebase/firestore";
import { useTestimonials } from "./UseTestimonials";

function Testimonials() {
  const { user, setUser } = useContext(UserContext);
  const [message, setMessage] = React.useState("");
  const { loading, messages, error } = useTestimonials();
  const sendMessage = (e) => {
    if (!(message === "")) {
      e.preventDefault();
      {
        !!user
          ? db
              .collection("messages")
              .add({
                timestramp: Date.now(),
                message,
                userName: user.name,
                userLastName: user.lastName,
                userEmail: user.email,
              })
          : window.alert("Debes iniciar sesión para enviar un testimonio.");
      }
    } else {
      window.alert("El testimonio se encuentra vacío, inténtelo nuevamente.");
    }
  };
  return (
    <>
      <div id={styles.titlediv}>
        <p id={styles.title}>Testimonios de pacientes</p>
      </div>
      <div id={styles.body}>
        <div id={styles.TestimonialsSpace}>
          <ul>
            <div>
              {messages.map((m) => (
                <li id={styles.cuadro} key={m.id}>
                  <div id={styles.block}>
                    <img
                      src="/LogoPsicomet.png"
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
                </li>
              ))}
            </div>
          </ul>
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
    </>
  );
}

export default Testimonials;
