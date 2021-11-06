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
                    <input type="text" id={styles.name} placeholder="Nombre"></input>
                    <input type="text" id={styles.lastname} placeholder="Apellido"></input>  
                </div>
                <div id={styles.File2}>
                    <input
                        type="email" id={styles.email} placeholder="Correo Electronico"
                    ></input>
                </div>
            
                <div id={styles.File3}>
                    <input type="text" id={styles.password} placeholder="Contraseña"></input>
                    <input type="text" id={styles.ConfirmPassword} placeholder="Confirmar Contraseña"></input>
                </div>

                <div id={styles.File4}>
                    <input type="tel" id={styles.number} placeholder="Telefono"></input>
                </div>   
            </div>

            <div id={styles.line}>
                <hr></hr>
            </div>
            
            <div class={styles.DatesContainer}>
                <div id={styles.File5}>
                    <input type="date" id={styles.date} placeholder="DD/MM/AAAA"></input>
                    <p id={styles.instructions}>Introduzca fecha de nacimiento</p>
                </div>
                <div id={styles.File6}>
                    <select name="Genero" id={styles.gender}>
                        <option value="">Genero</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Femenino">Femenino</option>
                    </select>   
                </div>

            </div>
            
            <p id={styles.register}>Crear cuenta</p>

        </div>
        

    
    )
}

export default CreateAccount;