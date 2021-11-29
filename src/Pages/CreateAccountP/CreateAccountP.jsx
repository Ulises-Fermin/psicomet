import React, { useEffect } from "react";
import styles from "./CreateAccountP.module.css";
import { Link } from "react-router-dom";
import { auth } from "../../Utils/FireBaseConfig";
import { useState, useContext } from "react";
import { useHistory } from "react-router";
import { UserContext } from "../../Context/UserContext";
import newUser from "../../Images/newUser.png";

function CreateAccountP() {
  const { createUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [fileURL, setFileURL] = React.useState(null)
  const [values, setValues] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    date: "",
    gender: "",
    role: "psychologist",
    idc: "",
    college: "",
    specialty: "",
    status: "waiting",
    curriculum: "",
    photo: "",
  });

  const history = useHistory();

  const handleOnChange = (event) => {
    const { value, name: inputName } = event.target;
    setValues({ ...values, [inputName]: value });
    console.log(inputName, value);
  };
  

  const handleSubmit = async (e) => {
    try {
      if (!((values.name === "") | (values.lastName === ""))) {
        if (!(values.email === "") | values.email.includes("@")) {
          if (values.password === values.confirmPassword) {
            if (!isNaN(values.phone) & !(values.phone === "")) {
              if (!(values.date === "")) {
                if (!(values.gender === "")) {
                  if (!isNaN(values.idc) & !(values.idc === "")) {
                    if (!(values.college === "")) {
                      if (!(values.specialty === "")) {
                        setIsLoading(true);
                        e.preventDefault();
                        const response =
                          await auth.createUserWithEmailAndPassword(
                            values.email,
                            values.password
                          );
                        await createUser(
                          {
                            name: values.name,
                            lastName: values.lastName,
                            email: values.email,
                            phone: values.phone,
                            date: values.date,
                            gender: values.gender,
                            role: "psychologist",
                            status: "waiting",
                            idc: values.idc,
                            college: values.college,
                            specialty: values.specialty,
                            experience: null,
                            academics: null,
                            aboutMe: null,
                            atencionAreas: null,
                            languages: null,
                            curriculum: "lack",
                            itinerary: null,
                            photo: "false",
                          },
                          response.user.uid,
                          
                        ); 

                        
                        setIsLoading(false);
                        history.push("/Curriculum");
                      } else {
                        window.alert("Seleccione una especialidad.");
                      }
                    } else {
                      window.alert("Ingrese una universidad válida.");
                    }
                  } else {
                    window.alert("Ingrese un carnet válido.");
                  }
                } else {
                  window.alert("Seleccione su género.");
                }
              } else {
                window.alert("Ingrese una fecha de nacimiento válida.");
              }
            } else {
              window.alert("Ingrese un numero de teléfono válido.");
            }
          } else {
            window.alert("Las contraseñas ingresadas no coinciden.");
          }
        } else {
          window.alert("Ingrese un correo electrónico válido.");
        }
      } else {
        window.alert("Ingrese un nombre y un apellido válido.");
      }
    } catch (error) {
      window.alert(error);
      setIsLoading(false);
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
            <h2>Crea una cuenta de especialista PsicoMet</h2>
          </div>

          <div id={styles.subtitle}>
            <p>¿Ya tienes una cuenta?</p>
            <Link to="/Login" class={styles.link}>
              Iniciar sesión
            </Link>
          </div>

          <div class = {styles.profileDiv}>
            <img id={styles.photo} src={newUser} alt = ""/>
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
                placeholder="Correo electrónico"
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
                placeholder="Confirmar contraseña"
                onChange={handleOnChange}
              ></input>
            </div>

            <div id={styles.File4}>
              <input
                name="phone"
                type="tel"
                class={styles.fields}
                placeholder="Número telefónico"
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
              <select
                name="gender"
                class={styles.fields}
                value={values.gender}
                onChange={handleOnChange}
              >
                <option value="">Género</option>
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
                <option value="Otro">Otro</option>
              </select>
            </div>
          </div>
          <div class={styles.DatesContainer}>
            <div id={styles.File1}>
              <input
                name="idc"
                class={styles.fields}
                type="text"
                placeholder="Ingrese su carnet"
                value={values.idc}
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
              <select
                name="specialty"
                class={styles.fields}
                value={values.specialty}
                onChange={handleOnChange}
              >
                <option value="">Especialidad</option>
                <option value="Depresion">Depresion</option>
                <option value="Ansiedad">Ansiedad</option>
                <option value="Ansiedad">Sexualidad</option>
                <option value="Ansiedad">Atencio Infantil</option>
                <option value="Ansiedad">Psiquiatra</option>
                <option value="Ansiedad">Terapia en familia</option>
                <option value="Ansiedad">Ansiedad</option>
                <option value="Ansiedad">Educacion</option>
                <option value="Ansiedad">Psicoterapia</option>
                <option value="Ansiedad">NeuroPsicologo</option>
                <option value="Ansiedad">Psicologo Criminalista</option>
                <option value="Otro">Otro</option>
              </select>
            </div>

          </div>

          <p type="submit" id={styles.register} onClick={handleSubmit}>
            Crear cuenta
          </p>
        </div>
      )}
    </>
  );
}

export default CreateAccountP;


/*<p id={styles.instructions2}>
              En el siguiente campo adjunte su currículum en formato PDF.
            </p>

            <div id={styles.File1}>
              <form>
                <input
                  type="file"
                  name="Curriculum"
                  
                  id={styles.name}
                  placeholder="Adjunte su currículum"
                />
              </form>
            </div>*/
