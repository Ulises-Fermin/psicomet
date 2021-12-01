import React from "react";
import { useContext, useState } from "react";
import styles from "./RecoverPassword.module.css";
import { googleProvider, auth } from "../../Utils/FireBaseConfig";
import { UserContext } from "../../Context/UserContext";
import { useHistory } from "react-router";
import firebase from "firebase";
import psicometLogo from '../../Images/LogoPsicomet.png';
function RecoverPassword() {
    const [values, setValues] = useState({
        email: "",
    })
    const history = useHistory();
    const { user, setUser } = useContext(UserContext);
    const handleOnChange = (event) => {
        const { value, name: inputName } = event.target;
        setValues({ ...values, [inputName]: value })
        console.log("THAT SI")
    };
    const auth = firebase.auth();
    const emailAddress = (values.email);
    auth.sendPasswordResetEmail(emailAddress)
        .then(function () {
            alert("Se ha enviado la contrasena a tu correo")
        }, function (error) {
            console.log("error");
        })

    return (
        <>
            {!!user ? (
                <div>
                    <div class={styles.inicio}>
                        <p id={styles.title}>Coloque el correo al que se enviara la contrasena:</p>
                        <div id={styles.put}>
                            <input name="email" type="email" value={values.email} id={styles.password} placeholder="Email" onChange={handleOnChange} />
                            <button type="submit" id={styles.buttonLogIn}
                                onClick={RecoverPassword}><p>Enviar Contrasena</p>
                            </button>
                        </div>
                        <img src={psicometLogo} id={styles.Logo} alt="" />
                    </div>

                </div>
            ) : (
                <h1 id={styles.isLoading}>
                    Cargando...
                </h1>
            )}
        </>
    )
}


export default RecoverPassword;
