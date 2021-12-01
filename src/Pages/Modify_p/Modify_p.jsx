import React from "react";
import modify from "./Modify.css";
import { auth, db } from "../../Utils/FireBaseConfig";
import { useState, useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import ItineraryP from "../Itinerary/ItineraryP";
import { app } from "../../Utils/FireBaseConfig";
import styles from "./Modify_p.module.css";
import { useHistory } from "react-router";
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
  const history = useHistory();
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
    } else {
      db.collection("users").doc(user.id).update({
        languages: values.languages,
      });
    }

    if (values.atencionAreas === "") {
      user.atencionAreas = user.atencionAreas;
    } else {
      db.collection("users").doc(user.id).update({
        atencionAreas: values.atencionAreas,
      });
    }

    if (values.experience === "") {
      user.experience = user.experience;
    } else {
      db.collection("users").doc(user.id).update({
        experience: values.experience,
      });
    }

    if (values.academics === "") {
      user.academics = user.academics;
    } else {
      db.collection("users").doc(user.id).update({
        academics: values.academics,
      });
    }

    if (values.aboutMe === "") {
      user.aboutMe = user.aboutMe;
    } else {
      db.collection("users").doc(user.id).update({
        aboutMe: values.aboutMe,
      });
    }
    window.alert("Actualizando datos");
    /*var con = 0
    while(con<300000){
      con = con + 1
      console.log(con)
    }*/
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
          {((user?.role === "psychologist") && (user?.status === "accept")) ? (
            <>
              <div className='form-container'>
                <div className='form-content-left'>
                  <form className='form'>
                    <div class= {styles.titulo}>
                    <h1>
                      Modificación de Datos
                    </h1>
                    </div>
                    {/* {/* <h1 id={styles.titulo}>Modificación de Datos</h1> */}
                    <div className='form-inputs'>
                      <label className='form-label'>Nombre</label>
                      <input
                        class={styles.forminput}
                        name="name"
                        type="text"
                        placeholder="Ingrese su nombre"
                        value={values.name}
                        onChange={handleOnChange}
                      />

                      <label className='form-label'>Apellido</label>
                      <input
                        name="lastName"
                        class={styles.forminput}
                        type="text"
                        placeholder="Ingrese su apellido"
                        value={values.lastName}
                        onChange={handleOnChange}
                      />
                      <label className='form-label'>Número telefónico</label>
                      <input
                        name="phone"
                        class={styles.forminput}
                        type="t el"
                        placeholder="Ingrese su número telefónico"
                        value={values.phone}
                        onChange={handleOnChange}
                      />
                      <label className='form-label'>Género</label>
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
                      <label className='form-label'>Idiomas (separados por comas)</label>
                      <input
                        name="languages"
                        class={styles.forminput}
                        type="text"
                        placeholder="Ingrese sus idiomas"
                        value={values.languages}
                        onChange={handleOnChange}
                      />
                      <label className='form-label'>Foto</label>
                      <input
                        type="file"
                        class={styles.fotoinput}
                        name="foto"
                        onChange={doUpload}
                        accept="image/*"
                        placeholder="Suba una foto de perfil"
                      />
                      {/* <p id={styles.label8}>Ingrese sus áreas de atención: </p> */}
                      <label className='form-label'>Áreas de atencion</label>
                      <textarea
                        name="atencionAreas"
                        class={styles.forminput}
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
                        class={styles.textarea}
                        placeholder="Ingrese su experiencia profesional"
                        cols="30"
                        rows="5"
                      ></textarea>
                      <label className='form-label'>Formación académica</label>
                      <textarea
                        name="academics"
                        class={styles.textarea}
                        onChange={handleOnChange}
                        placeholder="Ingrese su formación académica"
                        cols="30"
                        rows="5"

                      ></textarea>
                      <label className='form-label'>Información adicional</label>
                      <textarea
                        name="aboutMe"
                        class={styles.textarea}
                        value={values.aboutMe}
                        onChange={handleOnChange}
                        placeholder="Ingrese información sobre usted"
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
                  <div class= {styles.tituloItinerario}>
                    <h1>
                      Itinerario
                    </h1>
                    </div>
                    <ItineraryP />
                  </form>
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

export default Modify_p;
