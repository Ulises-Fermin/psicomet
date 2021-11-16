import React from "react";
import {useContext, useState} from "react";
import styles from "./RecoverPassword.module.css";
import {googleProvider, auth} from "../../Utils/FireBaseConfig";
import {useHistory} from "react-router";
import {UserContext} from "../../Context/UserContext";
import {Link} from "react-router-dom";


function RecoverPassword() {
    const {setUser} = useContext(UserContext);
    const [isLoading, setIsLoading] = useState(false);

    const history = useHistory();

    const [values, setValues] = useState({
        email: "",
        password: "",
    })
    const handleOnChange = (event) => {
        const {value, name: inputName} = event.target;
        setValues({...values, [inputName]:value})
        };
    const handleSubmit = async (e) => {
        try{
            setIsLoading(true);
        e.preventDefault();
        await auth.signInWithEmail(values.email);
        setIsLoading(false);
        history.push("/Home");
            }catch(error){
            window.alert(error);
            setIsLoading(false);
        }
    }
    
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div class={styles.inicio}>
                    <p>Ingrese correo para recuperar su contraseña</p>
                    <input name="email" type="email" id={styles.email} placeholder="Correo Electronico"
                        value={values.email} onChange={handleOnChange}/>
                    <button type="submit" id={styles.buttonLogIn} onClick={handleSubmit}>Enviar Correo</button>
                </div>
            </form>
        </div>
    )
}


export default RecoverPassword;
