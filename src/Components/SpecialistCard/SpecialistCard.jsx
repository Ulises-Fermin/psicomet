import React from "react";
import styles from "./SpecialistCard.module.css";
import { db } from "../../Utils/FireBaseConfig";
import { useState, useEffect } from "react";
import Popup from "reactjs-popup";
import newUser from "../../Images/newUser.png";
import { app } from "../../Utils/FireBaseConfig";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";


function ShowItinerary(itinerarys) {
  var list = [];
  const itinerary = itinerarys;
  for (const days in itinerary) {
    if (itinerary[days]["checked"] === true) {
      const day = itinerary[days]["value"];
      list.push(day)
    }
  }
  return (
    <div id={styles.itinerary}>
      <h3 id={styles.itititle}>Itinerario del Especialista:</h3>
      {list.map((h) => (
        <p>{h}</p>
      ))};
    </div>
  )
};
function SpecialistCard({ specialist }) {
  const [names, setNames] = useState("");
  const [psychologists, setPsychologists] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [url, setUrl] = useState([]);
  const { user, setUser } = useContext(UserContext);
  const list = [];

  const fetchPsychologists = async () => {
    const response = db.collection("users");
    const data = await response.get();
    data.docs.forEach((item) => {
      if (
        item.data().role === "psychologist" &&
        item.data().status === "accept" &&
        item.data().curriculum === "have" &&
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

  useEffect(() => {
    fetchPsychologists();
  }, [names]);
  useEffect(() => {
    watchpicture(specialist)
  }, [specialist]);
  const handleOnChange = async (e) => {
    setNames(e.target.value);
  };
  const ChangeStatusD = async (p) => {
    db.collection("users").doc(p.id).update({
      status: "denegate",
    })
    fetchPsychologists()
  }
  const handleSubmit = (e) => {
    const get = [];
    psychologists.forEach((psycho) => {
      if (
        (psycho.data.name + " " + psycho.data.lastName)
          .toLowerCase()
          .includes(names.toLocaleLowerCase())
      ) {
        get.push(psycho);
      }
    });
    setPsychologists(get);
  };

  const watchpicture = async (p) => {
    const ref = app.storage().ref("Fotos/" + p.id);
    const image = await ref.getDownloadURL()
    console.log(image)
    setUrl(image)
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
    <div id={styles.psychoCards}>
      <img onClick={() => watchpicture(specialist)} id={styles.img2} src={url} alt="" />
      <li class={styles.psychoList}>
        {specialist.data.name} {specialist.data.lastName}
      </li>
      <li class={styles.psychoList}>{specialist.data.specialty}</li>


      <Popup
        trigger={
          <button class={styles.psychoList} onClick={showMore}>
            Ver mas
          </button>
        }
        modal
      >

        <div id={styles.PopUp}>

          <div class={styles.box2}>
            <p class={styles.label1}>Correo Electrónico: </p>
            <p class={styles.label1}>{specialist.data.email}</p>
            <p class={styles.label1}>Teléfono: {specialist.data.phone}</p>
            <p class={styles.label1}>Género: {specialist.data.gender}</p>
            <p class={styles.label1}>Idiomas: {specialist.data.languages}</p>
            <p class={styles.label1}>Ver Itinerario:</p>
            <Popup
              trigger={<button id={styles.buttonI}> <p id={styles.pButton}>Itinerario</p> </button>}
              position="center center"
              modal
              id={styles.itinerary}
            >
              {ShowItinerary(specialist.data.itinerary)}
            </Popup>
            <br />
          </div>
          <div id={styles.bigbox}>
            <div class={styles.box1}>
              <div id={styles.info}>
                <h1 id={styles.nombre}>
                  Dr. {specialist.data.name} {specialist.data.lastName}
                </h1>
                <p>Especialidad: {specialist.data.specialty}</p>
              </div>
              <div id={styles.imgstars}>
                <img
                  id={styles.img1}
                  src={url}
                  alt=""
                />
                <div id={styles.stars}>
                  {(((specialist.data.points) / (specialist.data.consults)) < 1) ? (
                    <p id={styles.paintstars}></p>
                  ) : (null)}
                  {(((((specialist.data.points) / (specialist.data.consults)) > 1) ||
                    (((specialist.data.points) / (specialist.data.consults)) === 1)) &&
                    ((((specialist.data.points) / (specialist.data.consults)) < 2))
                  ) ? (
                    <p id={styles.paintstars}>*</p>
                  ) : (null)}
                  {(((((specialist.data.points) / (specialist.data.consults)) > 2) ||
                    (((specialist.data.points) / (specialist.data.consults)) === 2)) &&
                    ((((specialist.data.points) / (specialist.data.consults)) < 3))
                  ) ? (
                    <p id={styles.paintstars}>* *</p>
                  ) : (null)}
                  {(((((specialist.data.points) / (specialist.data.consults)) > 3) ||
                    (((specialist.data.points) / (specialist.data.consults)) === 3)) &&
                    ((((specialist.data.points) / (specialist.data.consults)) < 4))
                  ) ? (
                    <p id={styles.paintstars}>* * *</p>
                  ) : (null)}
                  {(((((specialist.data.points) / (specialist.data.consults)) > 4) ||
                    (((specialist.data.points) / (specialist.data.consults)) === 4)) &&
                    ((((specialist.data.points) / (specialist.data.consults)) < 5))
                  ) ? (
                    <p id={styles.paintstars}>* * * *</p>
                  ) : (null)}
                  {((((specialist.data.points) / (specialist.data.consults)) === 5) ||
                    (((specialist.data.points) / (specialist.data.consults)) > 5)
                  ) ? (
                    <p id={styles.paintstars}>* * * * *</p>
                  ) : (null)}
                </div>
              </div>
            </div>
            <div id={styles.box5}>


            </div>
            <div class={styles.box7}>
              <div class={styles.box3}>
                <div class={styles.box8}>
                  <h2 class={styles.label10}>Áreas de atención</h2>
                  <div class={styles.caja}><p class={styles.infor}>{specialist.data.atencionAreas}</p></div>
                </div>
                <div class={styles.box8}>
                  <h2 class={styles.label10}>Experiencia Profesional</h2>
                  <div class={styles.caja}><p class={styles.infor}>{specialist.data.experience}</p></div>
                </div>
              </div>
              <div class={styles.box3}>
                <div class={styles.box8}>
                  <h2 class={styles.label10}>Formación Académica</h2>
                  <div class={styles.caja}><p class={styles.infor}>{specialist.data.academics}</p></div>
                </div>
                <div class={styles.box8}>
                  <h2 class={styles.label10}>Sobre {specialist.name}</h2>
                  <div class={styles.caja}><p class={styles.infor}>{specialist.aboutMe}</p></div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </Popup>
      {(user?.role === "admi") ? (
        <button class={styles.psychoListD} onClick={() => ChangeStatusD(specialist)}><p id={styles.block}>Bloquear Usuario</p></button>
      ) : (null)}
    </div>
  )
}

export default SpecialistCard;