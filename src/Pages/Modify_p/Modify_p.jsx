import React from "react";
import modify from "./Modify.css";
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
    photo: "false",
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
        db.collection("users").doc(user.id).update({
          photo: "true",
        });
      }
    );
} 

  return (
    <>
      <div className='form-container'>
        <div className='form-content-left'>
          <form className='form'>
            <h1>
            Modificación de Datos
            </h1>
            {/* {/* <h1 id={styles.titulo}>Modificación de Datos</h1> */}
            <div className='form-inputs'>
              <label className='form-label'>Nombre</label>
              <input
                className='form-input'
                name="name"
                type="text"
                placeholder="Ingrese su nombre"
                value={values.name}
                onChange={handleOnChange}
              />

              <label className='form-label'>Apellido</label>
              <input
                name="lastName"
                className='form-input'
                type="text"
                placeholder="Ingrese su apellido"
                value={values.lastName}
                onChange={handleOnChange}
                />
              <label className='form-label'>Número telefónico</label>
              <input
                name="phone"
                className='form-input'
                type="t el"
                placeholder="Ingrese su número telefónico"
                value={values.phone}
                onChange={handleOnChange}
              />
              <label className='form-label'>Género</label>
              <input
                name="gender"
                className='form-input'
                type="text"
                placeholder="Ingrese su género"
                value={values.gender}
                onChange={handleOnChange}
                />
              <label className='form-label'>Idiomas (separados por comas)</label>
              <input
                name="languages"
                className='form-input'
                type="text"
                placeholder="Ingrese sus idiomas"
                value={values.languages}
                onChange={handleOnChange}
                />
              <label className='form-label'>Método de consulta</label>
              <input
                className='form-input'
                type="text"
                placeholder="Ingrese su método de consulta"
                />

              <label className='form-label'>Foto</label>
              <input
                  type="file"
                  className='form-input'
                  name="foto"
                  onChange ={doUpload}
                  accept="image/*"
                  placeholder="Suba una foto de perfil"
                  />
              <label className='form-label'>Precio de su servicio</label>
              <input
              className='form-input'
              type="text"
              placeholder="Ingrese el precio de su servicio"
            />
              {/* <p id={styles.label8}>Ingrese sus áreas de atención: </p> */}
              <label className='form-label'>Áreas de atencion</label>
                <textarea
                  name="atencionAreas"
                  className='form-input'
                  value={values.atencionAreas}
                  onChange={handleOnChange}
                  placeholder="Ingrese sus áreas de atención"
                  cols="30"
                  rows="5"
                  ></textarea>
              <label className='form-label'>Ingrese su experiencia profesional</label>
                <textarea
                  name="experience"
                  value={values.experience}
                  onChange={handleOnChange}
                  className='form-input'
                  placeholder="Ingrese su experiencia profesional"
                  cols="30"
                  rows="5"
                  ></textarea> 
              <label className='form-label'>Formación académica</label>
                <textarea
                  name="academics"
                  className='form-input'
                  onChange={handleOnChange}
                  placeholder="Ingrese su formación académica"
                  cols="30"
                  rows="5"

                  ></textarea>
              <label className='form-label'>Ingrese información sobre usted</label>
                <textarea
                  name="aboutMe"
                  className='form-input'
                  value={values.aboutMe}
                  onChange={handleOnChange}
                  placeholder="Ingrese su información sobre usted"
                  cols="30"
                  rows="5"
                ></textarea> 
                <br />
            </div>
              <label className='form-input-btn' onClick={handleSubmit}>Actualizar datos</label>
          </form>
        </div>
        <div className='form-content-right'> 
          <form className='form'>
            <h1>Itinerario</h1>
            <Itinerary />
          </form>
        </div>
      </div>
    </>
  );
}

export default Modify_p;
