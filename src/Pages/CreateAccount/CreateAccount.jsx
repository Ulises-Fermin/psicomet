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

            <div class={styles.DatesContainer}>
                <div id={styles.File1}>
                    <p id={styles.name}>Nombre</p>
                    <p id={styles.lastname}>Apellido</p>
                </div>
                <div id={styles.File2}>
                    <p id={styles.email}>Correo Electronico</p>
                </div>
            
                <div id={styles.File3}>
                    <p id={styles.password}>Contrasena</p>
                    <p id={styles.ConfirmPassword}>Confirmar Contrasena</p>
                </div>

                <div id={styles.File4}>
                    <p id={styles.number}>Telefono</p>
                </div>   
            </div>

            <div id={styles.line}>
                <hr></hr>
            </div>
            
            <div class={styles.DatesContainer}>
                <div id={styles.File5}>
                    <p id={styles.day}>DD</p>
                    <p class={styles.slash}>/</p>
                    <p id={styles.month}>MM</p>
                    <p class={styles.slash}>/</p>
                    <p id={styles.year}>AAAA</p>    
                </div>


            </div>

        </div>
        

    
    )
}

export default CreateAccount;