import React from "react";
import {useContext} from "react";
import styles from "./LogIn.module.css";
import {googleProvider, auth} from "../../Utils/FireBaseConfig"
import {useHistory} from "react-router";
import { UserContext } from "../../Context/UserContext";

function LogIn(){
    const {setUser} = useContext(UserContext)

    const history = useHistory();

    const googleLogin = async () => {
        const response = await auth.signInWithPopup(googleProvider);
        setUser({
            name:response.user.displayName,
            email: response.user.email,
        })
        history.push("/Home");
     }
     return(
         <div id={styles.LogIn}>
             <button type="button" onClick={googleLogin}>Iniciar sesion con Google</button>
         </div>
     )
}
export default LogIn;