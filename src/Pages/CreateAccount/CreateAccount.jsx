import React from "react";
import styles from "./CreateAccount.module.css";
import {Link} from "react-router-dom";
import {auth} from "../../Utils/FireBaseConfig";
import {useState, useContext} from "react";
import {useHistory} from "react-router";
import {UserContext} from "../../Context/UserContext";

function CreateAccount(){
    const {createUser} = useContext(UserContext);

    const [values, setValues] = useState({
        name: "",
        lastName: "",
        email: "",
        password: "",
        phone: "",
        date: "",
        role: "pacient",
        id: null,
        college: null,
    });

    const history = useHistory();
    
    const handleOnChange = (event) => {
        const {value, name: inputName} = event.target;
        setValues({...values, [inputName]:value});
        console.log(inputName, value);
    };

    const handleSubmit = async (e) => {
        console.log(values)
        e.preventDefault();
        const response = await auth.createUserWithEmailAndPassword(
            values.email, 
            values.password,
        );
        await createUser({
            name: values.name,
            lastName: values.lastName,
            email: values.email,
            phone: values.phone,
            date: values.date,
            role: "pacient",
            id: null,
            college: null,
        }, response.user.uid);
        history.push("/Home");
    };

    return(
        <div id={styles.Body}>
            <div id={styles.title}>
                <h2>Crea una cuenta de Psicomet</h2>
            </div>
            <div id={styles.subtitle}>
                <p>Ya tienes una cuenta?</p>
                <Link to="/LogIn" class={styles.link}>
                    Iniciar sesion
                </Link>
            </div>
            <div id={styles.Bottoms_Container}>
                <img src="/logoGoogle.png" id={styles.Logo} alt = ""/>
                <img src="/logoTwitter.jpg" id={styles.Logo} alt = ""/>
                <img src="/logoFacebook.png" id={styles.Logo} alt = ""/>
            </div>
            <form onSubmit={handleSubmit}>
                <div class={styles.DatesContainer}>
                    <div id={styles.File1}>
                        <input 
                        name="name" 
                        type="text" 
                        id={styles.name} 
                        placeholder="Nombre" 
                        value={values.name} 
                        onChange={handleOnChange}>
                        </input>
                        <input 
                        name="lastName" 
                        type="text" 
                        id={styles.lastname} 
                        placeholder="Apellido" 
                        value={values.lastName} 
                        onChange={handleOnChange}>
                        </input>  
                    </div>
                    <div id={styles.File2}>
                        <input 
                        name="email" 
                        type="email" 
                        id={styles.email} 
                        placeholder="Correo Electronico" 
                        value={values.email} 
                        onChange={handleOnChange}>
                        </input>
                    </div>
                    <div id={styles.File3}>
                        <input 
                        name="password" 
                        type="password" 
                        id={styles.password} 
                        placeholder="Contraseña" 
                        value={values.password} 
                        onChange={handleOnChange}>
                        </input>
                        <input 
                        type="password" 
                        id={styles.ConfirmPassword} 
                        placeholder="Confirmar Contraseña">
                        </input>
                    </div>
                    <div id={styles.File4}>
                        <input 
                        name="phone" 
                        type="tel" 
                        id={styles.number} 
                        placeholder="Telefono" 
                        value={values.phone} 
                        onChange={handleOnChange}>
                        </input>
                    </div>   
                </div>
                <div id={styles.line}>
                    <hr></hr>
                </div>
                <div class={styles.DatesContainer}>
                    <div id={styles.File5}>
                        <input 
                        name="date" 
                        type="date" 
                        id={styles.date} 
                        placeholder="DD/MM/AAAA" 
                        value={values.date} 
                        onChange={handleOnChange}>
                        </input>
                        <p id={styles.instructions}>Introduzca fecha de nacimiento</p>
                    </div>
                    <div id={styles.File6}>
                        <select name="gender" id={styles.gender} value={values.gender} onChange={handleOnChange}>
                            <option value="">Genero</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Femenino">Femenino</option>
                        </select>   
                    </div>
                </div>
                <button type="submit" id={styles.register} onClick={handleSubmit}>Crear cuenta</button>
            </form>
        </div>
    )
}

export default CreateAccount;