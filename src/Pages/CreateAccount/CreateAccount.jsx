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
        gender: "",
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
        if (!((values.name === "")|(values.lastName === ""))){
            if ((!(values.email === "")|(values.email.includes("@")))){
                if (values.password===values.confirmPassword){
                    if (!isNaN(values.phone)&!(values.phone==="")){
                        if (!(values.date==="")){
                            if (!(values.gender ==="")){
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
                                    gender: values.gender,
                                    role: "pacient",
                                    id: null,
                                    college: null,
                                }, response.user.uid);
                                history.push("/Home"); 
                            }else{
                                window.alert("Seleccione un genero.")
                            }
                        }else{
                            window.alert("Ingrese una fecha de nacimiento valida.")
                        }
                    }else{
                        window.alert("Ingrese un numero de telefono valido.")
                    }
                }else{
                    window.alert("Las contrasenas ingresadas no coinciden.")
                }
            }else{
                window.alert("Ingrese un correo electronico valido.")
            }
        }else {
            window.alert("Ingrese un nombre y un apellido valido.")
        }
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
                        name="confirmPassword" 
                        type="password" 
                        id={styles.ConfirmPassword} 
                        placeholder="Confirmar Contraseña"
                        value={values.confirmPassword} 
                        onChange={handleOnChange}>
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