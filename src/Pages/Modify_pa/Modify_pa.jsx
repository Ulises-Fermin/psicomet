import React from "react";
import styles from "./Modify_pa.module.css";
import { Link } from "react-router-dom";
import { auth, db } from "../../Utils/FireBaseConfig";
import { useState, useContext } from "react";
import { useHistory } from "react-router";
import { UserContext } from "../../Context/UserContext";

function Modify_pa() {
  const { user, setUser } = useContext(UserContext);

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
  });

  const handleOnChange = (event) => {
    const { value, name: inputName } = event.target;
    setValues({ ...values, [inputName]: value });
    console.log(inputName, value);
  };

  const handleSubmit = async (e) => {
    if (values.name === "") {
      user.name = user.name;
    } else {
      db.collection("users").doc(user.id).update({
        name: values.name,
      });
    }
    if (values.lastName === "") {
      user.lastName = user.lastName;
    } else {
      db.collection("users").doc(user.id).update({
        lastName: values.lastName,
      });
    }

    if (values.phone === "") {
      user.phone = user.phone;
    } else {
      db.collection("users").doc(user.id).update({
        phone: values.phone,
      });
    }

    if (values.gender === "") {
      user.gender = user.gender;
    } else {
      db.collection("users").doc(user.id).update({
        gender: values.gender,
      });
    }
  };

  return (
    <>
      <div class={styles.body}>
        <h1 id={styles.titulo}>Modificación de Datos</h1>
        <div id={styles.box1}>
          <p id={styles.label1}>Ingrese su nombre: </p>
          <input
            name="name"
            id={styles.nombre}
            type="text"
            placeholder="Ingrese su nombre"
            value={values.name}
            onChange={handleOnChange}
          />
        </div>
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
        <p id={styles.label3}>Ingrese su número telefónico: </p>
        <input
          name="phone"
          id={styles.telefono}
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

        <p type="submit" id={styles.register} onClick={handleSubmit}>
          Actualizar Datos
        </p>
      </div>
    </>
  );
}

export default Modify_pa;