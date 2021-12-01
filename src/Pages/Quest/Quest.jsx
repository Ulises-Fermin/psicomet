import React from "react";
import styles from "./Quest.module.css";
import { db } from "../../Utils/FireBaseConfig";
import { useState, useEffect } from "react";
import Popup from "reactjs-popup";
import newUser from "../../Images/newUser.png";
import { app } from "../../Utils/FireBaseConfig";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import SpecialistCard from "../../Components/SpecialistCard/SpecialistCard";

function Quest() {
  const [names, setNames] = useState("");
  const [names2, setNames2] = useState("");
  const [specials, setSpecials] = useState([]);

  const [values, setValues] = useState({
    specialty: "",
  });

  const [psychologists, setPsychologists] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [url, setUrl] = useState([]);
  const { user, setUser } = useContext(UserContext);
  const list = [];
  const list2 = [];

  const special = async () => {
    const response = db.collection("specialty");
    const data = await response.get();
    data.docs.forEach((item) => {
      if (item.data().enable === "true") {
        list.push({ data: item.data(), id: item.id });
      }
    });
    setSpecials(list);
    return list;
  };

  function ShowItinerary(itinerarys) {
    var list = [];
    const itinerary = itinerarys;
    for (const days in itinerary) {
      if (itinerary[days]["checked"] === true) {
        const day = itinerary[days]["value"];
        list.push(day);
      }
    }
    return (
      <div id={styles.itinerary}>
        <h3>Itinerario del Especialista:</h3>
        {list}
      </div>
    );
  }

  const fetchPsychologists = async () => {
    const response = db.collection("users");
    const data = await response.get();
    data.docs.forEach((item) => {
      if (
        item.data().role === "psychologist" &&
        item.data().status === "accept" &&
        item.data().curriculum === "have" &&
        item.data().photo === "true" &&
        (item.data().name + " " + item.data().lastName)
          .toLowerCase()
          .includes(names.toLocaleLowerCase())
      ) {
        list.push({ data: item.data(), id: item.id });
      }
    });
    setPsychologists(list);
    return list;
  };

  // const fetchPsychologists2 = async () => {
  // const response = db.collection("users");
  // const data = await response.get();
  // /data.docs.forEach((item) => {
  // if (
  // item.data().role === "psychologist" &&
  // item.data().status === "accept" &&
  // item.data().curriculum === "have" &&
  // item.data().photo === "true" &&
  // item.data().specialty.toLowerCase().includes(names2.toLocaleLowerCase())
  // ) {
  // list2.push({ data: item.data(), id: item.id });
  //  }
  // });
  // setPsychologists(list2);
  // return list2;
  //};

  useEffect(() => {
    fetchPsychologists();
  }, [names]);

  //useEffect(() => {
  // fetchPsychologists2();
  //}, [names2]);

  const handleOnChange = async (e) => {
    setNames(e.target.value);
  };

  const handleOnChange2 = async (event) => {
    const response = db.collection("users");
    const data = await response.get();
    const { value, name: inputName } = event.target;
    setValues(value);
    console.log(values);
    data.docs.forEach((item) => {
      if (
        item.data().role === "psychologist" &&
        item.data().status === "accept" &&
        item.data().curriculum === "have" &&
        item.data().photo === "true" &&
        item.data().specialty.toLowerCase().includes(value.toLocaleLowerCase())
      ) {
        list2.push({ data: item.data(), id: item.id });
      }
    });
    setPsychologists(list2);
    return list2;
  };

  const ChangeStatusD = async (p) => {
    db.collection("users").doc(p.id).update({
      status: "denegate",
    });
    fetchPsychologists();
  };

  const handleSubmit = (e) => {
    const get = [];
    psychologists.forEach((psycho) => {
      const especialidad = psycho.data.specialty;
      if (
        (psycho.name + " " + psycho.lastName)
          .toLowerCase()
          .includes(names.toLocaleLowerCase())
      ) {
        get.push(psycho);
      }
    });
    setPsychologists(get);
  };

  const handleSubmit2 = (e) => {
    const get = [];
    psychologists.forEach((psycho) => {
      const especialidad = psycho.data.specialty;
      if (especialidad.toLowerCase().includes(names.toLocaleLowerCase())) {
        console.log(especialidad);
        get.push(psycho);
      }
    });
    setPsychologists(get);
  };

  const watchpicture = async (p) => {
    const ref = app.storage().ref("Fotos/" + p.id);
    const image = await ref.getDownloadURL();
    console.log(image);
    setUrl(image);
  };

  const showMore = (e) => {
    <Popup
      trigger={
        <button class={styles.psychoList} onClick={showMore}>
          Ver mas
        </button>
      }
      modal
    >
      Hola
    </Popup>;
  };

  return (
    <>
      {isLoading ? (
        <div id={styles.isLoading}>
          <h1>Cargando Especialistas.</h1>
        </div>
      ) : (
        <div id={styles.body}>
          <h1 id={styles.title}>Buscar especialista</h1>
          <div id={styles.containerQuest}>
            <input
              type="text"
              placeholder="Introduzca nombre del especialista"
              id={styles.name}
              value={names}
              onChange={handleOnChange}
            ></input>
            <button id={styles.button} onClick={handleSubmit}>
              Buscar
            </button>
            <select
              name="specialty"
              class={styles.fields}
              value={values.specialty}
              onClick={special}
              onChange={handleOnChange2}
            >
              <option value="">Especialidad</option>
              {specials.map((m) => (
                <option value={m.data.name}>{m.data.name}</option>
              ))}
            </select>
            <br />
          </div>
          <div id={styles.container}>
            {psychologists.map((p) => (
              <SpecialistCard specialist={p} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
export default Quest;
