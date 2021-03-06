import React from "react";
import styles from "./CreateAccount.module.css";
import { Link } from "react-router-dom";
import { auth } from "../../Utils/FireBaseConfig";
import { useState, useContext } from "react";
import { useHistory } from "react-router";
import { UserContext } from "../../Context/UserContext";

function CreateAccount() {
  const { createUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);

  const [values, setValues] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    date: "",
    gender: "",
    role: "pacient",
    idc: null,
    college: null,
    photo: "false",
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
                  setIsLoading(true);
                  e.preventDefault();
                  const response = await auth.createUserWithEmailAndPassword(
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
                      role: "pacient",
                      status: null,
                      idc: null,
                      college: null,
                      experience: null,
                      academics: null,
                      aboutMe: null,
                      atencionAreas: null,
                      languages: null,
                      curriculum: null,
                      itinerary: null,
                      photo: "false",
                    },
                    response.user.uid
                  );
                  setIsLoading(false);
                  history.push("/Home");
                } else {
                  window.alert("Seleccione un g??nero.");
                }
              } else {
                window.alert("Ingrese una fecha de nacimiento v??lida.");
              }
            } else {
              window.alert("Ingrese un numero de tel??fono v??lido.");
            }
          } else {
            window.alert("Las contrase??as ingresadas no coinciden.");
          }
        } else {
          window.alert("Ingrese un correo electr??nico v??lido.");
        }
      } else {
        window.alert("Ingrese un nombre y un apellido v??lido.");
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
          <h1>??Gracias por crear una cuenta con nosotros!</h1>
          <h1>Ser?? redirigido autom??ticamente.</h1>
        </div>
      ) : (
        <div id={styles.Body}>
          <div id={styles.title}>
            <h2>Crea una cuenta de Psicomet</h2>
          </div>
          <div id={styles.subtitle}>
            <p>??Ya tienes una cuenta?</p>
            <Link to="/LogIn" class={styles.link}>
              Iniciar sesi??n
            </Link>
          </div>
          
          <form onSubmit={handleSubmit}>
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
                  placeholder="Correo electr??nico"
                  value={values.email}
                  onChange={handleOnChange}
                ></input>
              </div>
              <div id={styles.File3}>
                <input
                  name="password"
                  type="password"
                  class={styles.fields}
                  placeholder="Contrase??a"
                  value={values.password}
                  onChange={handleOnChange}
                ></input>
                <input
                  name="confirmPassword"
                  type="password"
                  class={styles.fields}
                  placeholder="Confirmar Contrase??a"
                  value={values.confirmPassword}
                  onChange={handleOnChange}
                ></input>
              </div>
              <div id={styles.File4}>
                <input
                  name="phone"
                  type="tel"
                  class={styles.fields}
                  placeholder="N??mero telef??nico"
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
                  <option value="">G??nero</option>
                  <option value="Masculino">Masculino</option>
                  <option value="Femenino">Femenino</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>
            </div>
            <button type="submit" id={styles.register} onClick={handleSubmit}>
              Crear cuenta
            </button>
          </form>
        </div>
      )}
    </>
  );
}
export default CreateAccount;
