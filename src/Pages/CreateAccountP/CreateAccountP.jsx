import React from "react";
import styles from "./CreateAccountP.module.css";
import {Link} from "react-router-dom";
import {auth} from "../../Utils/FireBaseConfig";
import {useState, useContext} from "react";
import {useHistory} from "react-router";
import {UserContext} from "../../Context/UserContext";

function CreateAccountP(){
  const {createUser} = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);

    const [values, setValues] = useState({
        name: "",
        lastName: "",
        email: "",
        password: "",
        phone: "",
        date: "",
        gender: "",
        role: "psychologist",
        id: "",
        college: "",
        specialty: "",
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
                          if (!isNaN(values.id)&!(values.id==="")){
                            if (!(values.college === "")){
                              if (!(values.specialty ==="")){
                                setIsLoading(true);
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
                                role: "psychologist",
                                id: values.id,
                                college: values.college,
                                specialty: values.specialty,
                            }, response.user.uid);
                            setIsLoading(false);
                            history.push("/Home");
                              }else{
                                window.alert("Seleccione una especialidad.")
                              }
                            }else{
                              window.alert("Ingrese una universidad valida.")
                            }
                          }else{
                            window.alert("Ingrese un carnet valido.")
                          }
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

  return (
    <>
      {isLoading ? (
        <div id={styles.isLoading}>
            <h1>¡Gracias por crear una cuenta con nosotros!</h1>
            <h1>Será redirigido automáticamente.</h1>
        </div>
      ) : (
        <div id={styles.Body}>
          <div id={styles.title}>
            <h2>Crea una cuenta de espacialista Psicomet</h2>
          </div>

          <div id={styles.subtitle}>
            <p>¿Ya tienes una cuenta?</p>
            <Link to="/Login" class={styles.link}>
              Iniciar sesion
            </Link>
          </div>

          <div class={styles.DatesContainer}>
            <div id={styles.File1}>
              <input 
              name="name"
              type="text" 
              class={styles.fields}
              placeholder="Nombre"
              value={values.name}
              onChange={handleOnChange}
              ></input>
              <input
                name="lastName"
                type="text"
                class={styles.fields}
                placeholder="Apellido"
                value={values.lastName}
                onChange={handleOnChange}
              ></input>
            </div>
            <div id={styles.File2}>
              <input
                name="email"
                type="email"
                class={styles.fields}
                placeholder="Correo Electronico"
                value={values.email}
                onChange={handleOnChange}
              ></input>
            </div>

            <div id={styles.File3}>
              <input
                name="password"
                type="password"
                class={styles.fields}
                placeholder="Contraseña"
                value={values.password}
                onChange={handleOnChange}
              ></input>
              <input
                name="confirmPassword"
                type="password"
                class={styles.fields}
                value={values.confirmPassword}
                placeholder="Confirmar Contraseña"
                onChange={handleOnChange}
              ></input>
            </div>

            <div id={styles.File4}>
              <input 
              name="phone"
              type="tel" 
              class={styles.fields}
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
              class={styles.fields}
              placeholder="DD/MM/AAAA"
              value={values.date}
              onChange={handleOnChange}
              ></input>
              <p id={styles.instructions}>Introduzca fecha de nacimiento</p>
            </div>
            <div id={styles.File6}>
              <select name="gender" class={styles.fields} value={values.gender} onChange={handleOnChange}>
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
              class={styles.fields} 
              type="text" 
              placeholder="Ingrese su carnet" 
              value={values.id}
              onChange={handleOnChange}
              ></input>
            </div>

            <div id={styles.File1}>
              <input 
              name="college"
              class={styles.fields} 
              type="text" 
              placeholder="Ingrese la universidad en la que cursó sus estudios"
              value={values.college}
              onChange={handleOnChange}
              ></input>
            </div>

            <div id={styles.File6}>
              <select name="specialty" class={styles.fields} value={values.specialty} onChange={handleOnChange}>
                <option value="">Especialidad</option>
                <option value="Masculino">Depresion</option>
                <option value="Femenino">Ansiedad</option>
                <option value="Femenino">Otros</option>
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
      )
      }
    </>
  )
}

export default CreateAccountP;
