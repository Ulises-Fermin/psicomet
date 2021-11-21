import React from "react";
import styles from "./Modify_p.module.css";
import { Link } from "react-router-dom";
import { auth, db } from "../../Utils/FireBaseConfig";
import { useState, useContext } from "react";
import { useHistory } from "react-router";
import { UserContext } from "../../Context/UserContext";
function Modify_p() {
  const { user, setUser } = useContext(UserContext);
  const handleLogOut = async () => {
    await auth.signOut();
    setUser(null);
  };

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
    status: "accept",
    languages: "",
    atencionAreas: "",
    experience: "",
    academics: "",
    aboutMe: "",
  });

  const monday = [];
  const check = () => {
    for (let index = 0; index < 13; index++) {
      var time = document.getElementsByName("1-" + index);
      console.log(time.checked);
      if (time.checked) {
        monday.push(time);
      }
    }
  };

  const handleOnChange = (event) => {
    const { value, name: inputName } = event.target;
    setValues({ ...values, [inputName]: value });
    console.log(inputName, value);
  };

  const handleSubmit = async (e) => {
    db.collection("users").doc(user.id).update({
      name: values.name,
      lastName: values.lastName,
      phone: values.phone,
      gender: values.gender,
      languages: values.languages,
      atencionAreas: values.atencionAreas,
      experience: values.experience,
      academics: values.academics,
      aboutMe: values.aboutMe,
    });
  };

  return (
    <>
      <div>
        <h1 id={styles.titulo}>Modificación de Datos</h1>
        <div class={styles.body}>
          <p id={styles.label1}>Ingrese su nombre: </p>
          <input
            name="name"
            id={styles.nombre}
            type="text"
            placeholder="Ingrese su nombre"
            value={values.name}
            onChange={handleOnChange}
          />
          <br />
          <p id={styles.label2}>Ingrese su apellido: </p>
          <input
            name="lastName"
            id={styles.apellido}
            type="text"
            placeholder="Ingrese su apellido"
            value={values.lastName}
            onChange={handleOnChange}
          />
          <br />
          <p id={styles.label2}>Ingrese su número telefónico: </p>
          <input
            name="phone"
            id={styles.apellido}
            type="tel"
            placeholder="Ingrese su número telefónico"
            value={values.phone}
            onChange={handleOnChange}
          />
          <br />
          <p id={styles.label4}>Ingrese su género: </p>
          <input
            name="gender"
            id={styles.genero}
            type="text"
            placeholder="Ingrese su género"
            value={values.gender}
            onChange={handleOnChange}
          />
          <br />
          <p id={styles.label5}>Ingrese sus idiomas (separados por comas): </p>
          <input
            name="languages"
            id={styles.idiomas}
            type="text"
            placeholder="Ingrese sus idiomas"
            value={values.languages}
            onChange={handleOnChange}
          />
          <br />
          <p id={styles.label6}>Ingrese su método de consulta: </p>
          <input
            id={styles.consulta}
            type="text"
            placeholder="Ingrese su método de consulta"
          />
          <br />
          <p id={styles.label7}>Ingrese el precio de su servicio: </p>
          <input
            id={styles.precio}
            type="text"
            placeholder="Ingrese el precio de su servicio"
          />
          <br />
          <p id={styles.label8}>Ingrese sus áreas de atención: </p>
          <textarea
            name="atencionAreas"
            id={styles.areas}
            value={values.atencionAreas}
            onChange={handleOnChange}
            placeholder="Ingrese sus áreas de atención"
            cols="30"
            rows="10"
          ></textarea>
          <br />
          <p id={styles.label9}>Ingrese su experiencia profesional: </p>
          <textarea
            name="experience"
            value={values.experience}
            onChange={handleOnChange}
            id={styles.experiencia}
            placeholder="Ingrese su experiencia profecional"
            cols="30"
            rows="10"
          ></textarea>
          <br />
          <p id={styles.label10}>Ingrese su formación académica: </p>
          <textarea
            name="academics"
            id={styles.formacion}
            value={values.academics}
            onChange={handleOnChange}
            placeholder="Ingrese su formación académica"
            cols="30"
            rows="10"
          ></textarea>
          <br />
          <p id={styles.label11}>Ingrese su información sobre usted: </p>
          <textarea
            name="aboutMe"
            id={styles.información}
            value={values.aboutMe}
            onChange={handleOnChange}
            placeholder="Ingrese su información sobre usted"
            cols="30"
            rows="10"
          ></textarea>
          <p type="submit" id={styles.register} onClick={handleSubmit}>
            Actualizar Datos
          </p>
        </div>
        <h1>Itinerario:</h1>
        <div id={styles.itinerary}>
          <div class={styles.day}>
            <h1>Lunes</h1>
            <input type="checkbox" value="6:00 - 6:50" name="1-1" />
            6:00 - 6:50
            <input type="checkbox" value="7:00 - 7:50" name="1-2" />
            7:00 - 7:50
            <input type="checkbox" value="8:00 - 8:50" name="1-3" />
            8:00 - 8:50
            <input type="checkbox" value="9:00 - 9:50" name="1-4" />
            9:00 - 9:50
            <input type="checkbox" value="10:00 - 10:50" name="1-5" />
            10:00 - 10:50
            <input type="checkbox" value="11:00 - 11:50" name="1-6" />
            11:00 - 11:50
            <input type="checkbox" value="12:00 - 12:50" name="1-7" />
            12:00 - 12:50
            <input type="checkbox" value="1:00 - 1:50" name="1-8" />
            1:00 - 1:50
            <input type="checkbox" value="2:00 - 2:50" name="1-9" />
            2:00 - 2:50
            <input type="checkbox" value="3:00 - 3:50" name="1-10" />
            3:00 - 3:50
            <input type="checkbox" value="4:00 - 4:50" name="1-11" />
            4:00 - 4:50
            <input type="checkbox" value="5:00 - 5:50" name="1-12" />
            5:00 - 5:50
            <input type="checkbox" value="6:00 - 6:50" name="1-13" />
            6:00 - 6:50
          </div>
          <div class={styles.day}>
            <h1>Martes</h1>
            <input type="checkbox" value="6:00 - 6:50" name="2-1" />
            6:00 - 6:50
            <input type="checkbox" value="7:00 - 7:50" name="2-2" />
            7:00 - 7:50
            <input type="checkbox" value="8:00 - 8:50" name="2-3" />
            8:00 - 8:50
            <input type="checkbox" value="9:00 - 9:50" name="2-4" />
            9:00 - 9:50
            <input type="checkbox" value="10:00 - 10:50" name="2-5" />
            10:00 - 10:50
            <input type="checkbox" value="11:00 - 11:50" name="2-6" />
            11:00 - 11:50
            <input type="checkbox" value="12:00 - 12:50" name="2-7" />
            12:00 - 12:50
            <input type="checkbox" value="1:00 - 1:50" name="2-8" />
            1:00 - 1:50
            <input type="checkbox" value="2:00 - 2:50" name="2-9" />
            2:00 - 2:50
            <input type="checkbox" value="3:00 - 3:50" name="2-10" />
            3:00 - 3:50
            <input type="checkbox" value="4:00 - 4:50" name="2-11" />
            4:00 - 4:50
            <input type="checkbox" value="5:00 - 5:50" name="2-12" />
            5:00 - 5:50
            <input type="checkbox" value="6:00 - 6:50" name="2-13" />
            6:00 - 6:50
          </div>
          <div class={styles.day}>
            <h1>Miercoles</h1>
            <input type="checkbox" value="6:00 - 6:50" name="3-1" />
            6:00 - 6:50
            <input type="checkbox" value="7:00 - 7:50" name="3-2" />
            7:00 - 7:50
            <input type="checkbox" value="8:00 - 8:50" name="3-3" />
            8:00 - 8:50
            <input type="checkbox" value="9:00 - 9:50" name="3-4" />
            9:00 - 9:50
            <input type="checkbox" value="10:00 - 10:50" name="3-5" />
            10:00 - 10:50
            <input type="checkbox" value="11:00 - 11:50" name="3-6" />
            11:00 - 11:50
            <input type="checkbox" value="12:00 - 12:50" name="3-7" />
            12:00 - 12:50
            <input type="checkbox" value="1:00 - 1:50" name="3-8" />
            1:00 - 1:50
            <input type="checkbox" value="2:00 - 2:50" name="3-9" />
            2:00 - 2:50
            <input type="checkbox" value="3:00 - 3:50" name="3-10" />
            3:00 - 3:50
            <input type="checkbox" value="4:00 - 4:50" name="3-11" />
            4:00 - 4:50
            <input type="checkbox" value="5:00 - 5:50" name="3-12" />
            5:00 - 5:50
            <input type="checkbox" value="6:00 - 6:50" name="3-13" />
            6:00 - 6:50
          </div>
          <div class={styles.day}>
            <h1>Jueves</h1>
            <input type="checkbox" value="6:00 - 6:50" name="4-1" />
            6:00 - 6:50
            <input type="checkbox" value="7:00 - 7:50" name="4-2" />
            7:00 - 7:50
            <input type="checkbox" value="8:00 - 8:50" name="4-3" />
            8:00 - 8:50
            <input type="checkbox" value="9:00 - 9:50" name="4-4" />
            9:00 - 9:50
            <input type="checkbox" value="10:00 - 10:50" name="4-5" />
            10:00 - 10:50
            <input type="checkbox" value="11:00 - 11:50" name="4-6" />
            11:00 - 11:50
            <input type="checkbox" value="12:00 - 12:50" name="4-7" />
            12:00 - 12:50
            <input type="checkbox" value="1:00 - 1:50" name="4-8" />
            1:00 - 1:50
            <input type="checkbox" value="2:00 - 2:50" name="4-9" />
            2:00 - 2:50
            <input type="checkbox" value="3:00 - 3:50" name="4-10" />
            3:00 - 3:50
            <input type="checkbox" value="4:00 - 4:50" name="4-11" />
            4:00 - 4:50
            <input type="checkbox" value="5:00 - 5:50" name="4-12" />
            5:00 - 5:50
            <input type="checkbox" value="6:00 - 6:50" name="4-13" />
            6:00 - 6:50
          </div>
          <div class={styles.day}>
            <h1>Viernes</h1>
            <input type="checkbox" value="6:00 - 6:50" name="5-1" />
            6:00 - 6:50
            <input type="checkbox" value="7:00 - 7:50" name="5-2" />
            7:00 - 7:50
            <input type="checkbox" value="8:00 - 8:50" name="5-3" />
            8:00 - 8:50
            <input type="checkbox" value="9:00 - 9:50" name="5-4" />
            9:00 - 9:50
            <input type="checkbox" value="10:00 - 10:50" name="5-5" />
            10:00 - 10:50
            <input type="checkbox" value="11:00 - 11:50" name="5-6" />
            11:00 - 11:50
            <input type="checkbox" value="12:00 - 12:50" name="5-7" />
            12:00 - 12:50
            <input type="checkbox" value="1:00 - 1:50" name="5-8" />
            1:00 - 1:50
            <input type="checkbox" value="2:00 - 2:50" name="5-9" />
            2:00 - 2:50
            <input type="checkbox" value="3:00 - 3:50" name="5-10" />
            3:00 - 3:50
            <input type="checkbox" value="4:00 - 4:50" name="5-11" />
            4:00 - 4:50
            <input type="checkbox" value="5:00 - 5:50" name="5-12" />
            5:00 - 5:50
            <input type="checkbox" value="6:00 - 6:50" name="5-13" />
            6:00 - 6:50
          </div>
          <button onClick={check}>Guardar</button>
        </div>
      </div>
    </>
  );
}

export default Modify_p;
