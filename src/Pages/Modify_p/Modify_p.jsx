import React from "react";
import styles from "./Modify_p.module.css";
import { auth, db } from "../../Utils/FireBaseConfig";
import { useState, useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import Itinerary from "../Itinerary/Itinerary";
import { app } from "../../Utils/FireBaseConfig";

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

    if (values.languages === "") {
      user.languages = user.languages;
    }else {
      db.collection("users").doc(user.id).update({
        languages: values.languages,
      });
    }

    if (values.atencionAreas === "") {
      user.atencionAreas = user.atencionAreas;
    }else {
      db.collection("users").doc(user.id).update({
        atencionAreas: values.atencionAreas,
      });
    }

    if (values.experience === "") {
      user.experience = user.experience;
    }else {
      db.collection("users").doc(user.id).update({
        experience: values.experience,
      });
    }

    if (values.academics === "") {
      user.academics = user.academics;
    }else {
      db.collection("users").doc(user.id).update({
        academics: values.academics,
      });
    }

    if (values.aboutMe === "") {
      user.aboutMe = user.aboutMe;
    }else {
      db.collection("users").doc(user.id).update({
        aboutMe: values.aboutMe,
      });
    }
    window.alert("Logrado");
  };
  const doUpload = (event) => {
    const file = event.target.files[0];
    const ref = app.storage().ref("Fotos/" + user.id);
    const upload = ref.put(file);
    upload.on(
      "state_changed",
      function progress(snapshot) {
        console.warn((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      },
      function error(error) {
        console.error(error);
      },
      function complete() {
        console.info("Finished uploading!");
        window.alert("Logrado");
      }
    );
} 

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
          <p id={styles.label4}>Coloque una foto de perfil: </p>
          <input
              type="file"
              name="foto"
              onChange ={doUpload}
              id={styles.name}
              accept="image/*"
              placeholder="Suba una foto de perfil"
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
          <Itinerary />
      </div>
    </>
  );
}

export default Modify_p;
