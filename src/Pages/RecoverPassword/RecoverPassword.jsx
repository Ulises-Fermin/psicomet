import React from "react";
import {useContext, useState} from "react";
import styles from "./RecoverPassword.module.css";
import {googleProvider, auth} from "../../Utils/FireBaseConfig";
import { UserContext } from "../../Context/UserContext";
import {useHistory} from "react-router";
import firebase from "firebase";

function RecoverPassword() {
    const [values, setValues] = useState({
        email: "",
    })
    const handleOnChange = (event) => {
        const {value, name: inputName} = event.target;
        setValues({...values, [inputName]:value})
    };
    const auth = firebase.auth();
    const emailAddress = (values.email);
    auth.sendPasswordResetEmail(emailAddress)
    .then(function(){
        alert("Se ha enviado la contrasena a tu correo")
    },function(error){
        console.log("error");
    })

    return(
        <div>   
            <div class={styles.inicio}>
                <p>Coloque el correo al que se enviara la contrasena:</p>
                <input name="email" type="email" value={values.email} id={styles.password} placeholder="Email" onChange={handleOnChange}/>
                <button type="submit" id={styles.buttonLogIn} 
                onClick={RecoverPassword}>Enviar Contrasena</button>
            </div>
              
        </div>
    )
}


export default RecoverPassword;
