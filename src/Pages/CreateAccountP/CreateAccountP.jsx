import React from "react";
import styles from "./CreateAccountP.module.css";
import {Link} from "react-router-dom";
import {auth} from "../../Utils/FireBaseConfig";
import {useState, useContext} from "react";
import {useHistory} from "react-router";
import {UserContext} from "../../Context/UserContext";

function CreateAccountP(){
  const {createUser} = useContext(UserContext);

    const [values, setValues] = useState({
        name: "",
        lastName: "",
        email: "",
        password: "",
        phone: "",
        date: "",
        role: "psychologist",
        id: "",
        college: "",
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
            role: "psychologist",
            id: values.id,
            college: values.college,  
        }, response.user.uid);
        history.push("/Home");
    };

  return (
    <div id={styles.Body}>
        <div id={styles.title}>
          <h2>Crea una cuenta de espacialista Psicomet</h2>
        </div>

        <div id={styles.subtitle}>
          <p>¿Ya tienes una cuenta?</p>
          <Link to="/Home" class={styles.link}>
            Iniciar sesion
          </Link>
        </div>

        <div id={styles.Bottoms_Container}>
          <img src="/logoGoogle.png" id={styles.Logo} alt="" />
          <img src="/logoTwitter.jpg" id={styles.Logo} alt="" />
          <img src="/logoFacebook.png" id={styles.Logo} alt="" />
        </div>

        <div class={styles.DatesContainer}>
          <div id={styles.File1}>
            <input 
            name="name"
            type="text" 
            id={styles.name} 
            placeholder="Nombre"
            value={values.name}
            onChange={handleOnChange}
            ></input>
            <input
              name="lastName"
              type="text"
              id={styles.lastname}
              placeholder="Apellido"
              value={values.lastName}
              onChange={handleOnChange}
            ></input>
          </div>
          <div id={styles.File2}>
            <input
              name="email"
              type="email"
              id={styles.email}
              placeholder="Correo Electronico"
              value={values.email}
              onChange={handleOnChange}
            ></input>
          </div>

          <div id={styles.File3}>
            <input
              name="password"
              type="password"
              id={styles.password}
              placeholder="Contraseña"
              value={values.password}
              onChange={handleOnChange}
            ></input>
            <input
              type="password"
              id={styles.ConfirmPassword}
              placeholder="Confirmar Contraseña"
              onChange={handleOnChange}
            ></input>
          </div>

          <div id={styles.File4}>
            <input 
            name="phone"
            type="tel" 
            id={styles.number} 
            placeholder="Telefono"
            value={values.phone}
            onChange={handleOnChange}
            ></input>
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
            onChange={handleOnChange}
            ></input>
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

        <div class={styles.DatesContainer}>
          <div id={styles.File1}>
            <input 
            name="id"
            id={styles.name} 
            type="text" 
            placeholder="Ingrese su carnet" 
            value={values.id}
            onChange={handleOnChange}
            ></input>
          </div>

          <div id={styles.File1}>
            <input 
            name="college"
            id={styles.name} 
            type="text" 
            placeholder="Ingrese la universidad en la que cursó sus estudios"
            value={values.college}
            onChange={handleOnChange}
            ></input>
          </div>

          <div id={styles.File1}>
            <select name="specialty" id={styles.name} placeholder="Especialidad" value={values.specialty} onChange={handleOnChange}>
              <option value="Depresión">Depresión</option>
              <option value="Ansiedad">Ansiedad</option>
              <option value="Sexualidad">Sexualidad</option>
            </select>
          </div>

          <p id={styles.instructions2}>
            En el siguiente campo adjunte un archivo que contenga su curriculum
          </p>

          <div id={styles.File1}>
            <input
              type="file"
              name="Curriculum"
              id={styles.name}
              placeholder="Ingrese su curriculum"
            />
          </div>
        </div>

        <p type="submit" id={styles.register} onClick={handleSubmit}>Crear cuenta</p>
    </div>
  );
}

export default CreateAccountP;
