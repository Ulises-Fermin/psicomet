import React from "react";
import styles from "./Modify_pa.module.css";
import { Link } from "react-router-dom";
import { auth, db } from "../../Utils/FireBaseConfig";
import { useState, useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { app } from "../../Utils/FireBaseConfig";
import { useHistory } from "react-router";

function Modify_pa() {
  const { user, setUser } = useContext(UserContext);

  const history = useHistory();
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

    window.alert("Datos actualizados.")
    history.push("/Home")
  };
  const doUpload = (event) => {
    const file = event.target.files[0];
    const ref = app.storage().ref("Fotos/" + user.id);
    const upload = ref.put(file);
    upload.on(
      "state_changed",
      function progress(snapshot) {
        console.warn((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        alert("No cambie la pagina ni cierre el programa hasta que la operacion halla finalizado, lleva: " + (snapshot.bytesTransferred / snapshot.totalBytes) * 100)
      },
      function error(error) {
        console.error(error);
      },
      function complete() {
        console.info("Finished uploading!");
        window.alert("Imagen cargada con exito.");
        db.collection("users").doc(user.id).update({
          photo: "true",
        });
      }
    );
  }

  return (
    <>
      {!!user ? (
        <>
          {(user?.role === "pacient") ? (
            <>
              <div id={styles.body}>
                <h1 id={styles.titulo}>Modificación de Datos</h1>
                <div id={styles.box1}>
                  <div class={styles.pspace}>
                    <p class={styles.label}>Ingrese su nombre: </p>
                    <input
                      name="name"
                      class={styles.pinput}
                      type="text"
                      placeholder="Ingrese su nombre"
                      value={values.name}
                      onChange={handleOnChange}
                    />
                  </div>
                  <div class={styles.pspace}>
                    <p class={styles.label}>Ingrese su apellido: </p>
                    <input
                      name="lastName"
                      class={styles.pinput}
                      type="text"
                      placeholder="Ingrese su apellido"
                      value={values.lastName}
                      onChange={handleOnChange}
                    />
                  </div>
                  <div class={styles.pspace}>
                    <p class={styles.label}>Ingrese su número telefónico: </p>
                    <input
                      name="phone"
                      class={styles.pinput}
                      type="tel"
                      placeholder="Ingrese su número telefónico"
                      value={values.phone}
                      onChange={handleOnChange}
                    />
                  </div>
                  <div class={styles.pspace}>
                    <p class={styles.label}>Seleccione su género: </p>
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
                  <div class={styles.pspace}>
                    <p class={styles.label}>Suba una foto de perfil: </p>
                    <input
                      type="file"
                      name="foto"
                      onChange={doUpload}
                      id={styles.photo}
                      accept="image/*"
                      placeholder="Suba una foto de perfil"
                    />
                  </div>
                  <button type="submit" id={styles.register} onClick={handleSubmit}>
                    Actualizar Datos
                  </button>
                </div>
              </div>
            </>
          ) : (history.push("/home"))}

        </>
      ) : (
        <h1 id={styles.isLoading}>
          Cargando...
        </h1>
      )}
    </>
  );
}

export default Modify_pa;
