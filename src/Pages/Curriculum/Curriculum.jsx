import React from "react";
import styles from "./Curriculum.module.css";
import {Link} from "react-router-dom";
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
    return(
        <div id={styles.Body}>
            <p>pon el curriculum rey</p>
            <input
                type="file"
                name="Curriculum"
                onChange ={doUpload}
                id={styles.name}
                placeholder="Adjunte su currículum"
            />
        </div>
    )
}
export default Curriculum