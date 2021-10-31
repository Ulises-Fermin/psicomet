import React from "react";
import styles from "./CreateAccount.module.css";
import {Link} from "react-router-dom";

function CreateAccount(){
    return(
        <div id={styles.Body}>
            <div id={styles.title}>
                <h2>Crea una cuenta de Psicomet</h2>
            </div>

            <div id={styles.subtitle}>
                <p>Ya tienes una cuenta?</p>
                <Link to="/Home" class={styles.link}>
                    Iniciar sesion
                </Link>
            </div>

            <div id={styles.Bottoms_Container}>
                <img src="/logoGoogle.png" id={styles.Logo} alt = ""/>
                <img src="/logoTwitter.jpg" id={styles.Logo} alt = ""/>
                <img src="/logoFacebook.png" id={styles.Logo} alt = ""/>
            </div>


        </div>
        

    
    )
}

export default CreateAccount;