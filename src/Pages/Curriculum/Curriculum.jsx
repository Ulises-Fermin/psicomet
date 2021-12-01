import React from "react";
import styles from "./Curriculum.module.css";
import { Link } from "react-router-dom";
import Slideshow from "../../Components/SlideShow/SlideShow"
import HeroSection from "../../Components/HeroSection";
import { app } from "../../Utils/FireBaseConfig"
import { UserContext } from "../../Context/UserContext";
import { useContext } from "react";
import { auth, db } from "../../Utils/FireBaseConfig";
import { useHistory } from "react-router";

function Curriculum() {
  const { user, setUser } = useContext(UserContext);
  const history = useHistory();
  const doUpload = (event) => {
    const file = event.target.files[0];
    const ref = app.storage().ref("Curriculum/" + user.id);
    const upload = ref.put(file);
    upload.on(
      "state_changed",
      function progress(snapshot) {
        console.warn((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        alert("No cambie la pagina ni cierre el programa hasta que la operacion halla finalizado, lleva: " + (snapshot.bytesTransferred / snapshot.totalBytes) * 100)
      },
      function error(error) {
        console.error(error);
      },
      function complete() {
        console.info("Finished uploading!");
        db.collection("users").doc(user.id).update({
          curriculum: "have",  
        });
        history.push("/Home");
      }
    );
  }
  return (
    <>
      {!!user ? (
        <>
          {(user?.role === "psychologist" && (user?.curriculum === "lack")) ? (
            <div id={styles.Body}>
              <h1 id={styles.titulo}>Adjunte su currículum</h1>
              <div id={styles.informacion}>
                Usted será redirigido automáticamente a la página principal una vez que cargue su currículum.
                Deberá esperar la aprobación del equipo PsicoMet antes de formar parte de nuestro staff.
                Esto puede tomar de 3 días a 1 semana.
              </div>
              <div id={styles.inputCurriculum}>
                <input
                  type="file"
                  name="Curriculum"
                  accept="application/pdf"
                  onChange={doUpload}
                  id={styles.name}
                  placeholder="Adjunte su currículum"
                />
              </div>
              <h2 id={styles.saludo}>¡Gracias por querer formar parte de PsicoMet!</h2>

            </div>
          ) : (history.push("/home"))}
        </>

      ) : (
        <h1 id={styles.isLoading}>
          Cargando...
        </h1>
      )}
    </>
  )
}
export default Curriculum