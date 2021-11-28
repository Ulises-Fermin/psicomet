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
    for (const hours in itinerary[days])
      if (itinerary[days][hours]["checked"] === true) {
        const day = days + " " + itinerary[days][hours]["value"] + " / ";
        list.push(day)
        console.log("aqui llego")
      }
  }
  return (
    <div id={styles.itinerary}>
      <h3>Itinerario del Especialista:</h3>
      {list}
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
          <div class={styles.box1}>
            <img
              id={styles.img1}
              src={url}
              alt=""
            />
          </div>
          <div class={styles.info}>
            <h1 id={styles.nombre}>
              Dr. {specialist.data.name} {specialist.data.lastName}
            </h1>
            <p>Especialidad: {specialist.data.specialty}</p>
          </div>
          <div id={styles.box5}>
            <div class={styles.box4}>
              <div class={styles.box2}>
                <p id={styles.label1}>Correo Electrónico:</p>
                <p id={styles.mail}>{specialist.data.email}</p>
                <p id={styles.label1}>Teléfono:</p>
                <p id={styles.phone}>{specialist.data.phone}</p>
                <p id={styles.label2}>Género:</p>
                <p id={styles.gender}>{specialist.data.gender}</p>
                <p id={styles.label3}>Idiomas:</p>
                <p id={styles.idioma}>{specialist.data.languages}</p>
                <p id={styles.label4}>
                  Modelo de Trabajo Terapéutico:
                </p>
                <p id={styles.model}>Consultas en sincronéa</p>
                <p id={styles.label5}>Precio de consulta:</p>
                <p id={styles.price}>20$ 60 min</p>
                <p id={styles.label8}>Ver Itinerario:</p>
                <Popup
                  trigger={<button> Itinerario </button>}
                  position="center center"
                  modal
                  id={styles.itinerary}
                >
                  {ShowItinerary(specialist.data.itinerary)}
                </Popup>
                <br />
              </div>
            </div>
            <div class={styles.box7}>
              <div class={styles.box3}>
                <div id={styles.box8}>
                  <h2 id={styles.label10}>Áreas de atención</h2>
                  <div id={styles.caja}>{specialist.data.atencionAreas}</div>
                </div>
                <div id={styles.box6}>
                  <h2 id={styles.profesional}>
                    Experiencia Profesional
                  </h2>
                  <div id={styles.caja2}>{specialist.data.experience}</div>
                </div>
              </div>
            </div>
            <div id={styles.box9}>
              <div id={styles.box13}>
                <h2 id={styles.label7}>Formación Académica</h2>
                <div id={styles.caja3}>{specialist.data.academics}</div>
              </div>
              <div id={styles.box10}>
                <h2 id={styles.about}>Sobre {specialist.name}</h2>
                <div id={styles.caja4}>{specialist.aboutMe}</div>
              </div>
            </div>
          </div>
          <Link to="/CreateAppointment" id={styles.linkk}>Agendar Cita</Link>
        </div>
      </Popup>
      {(user?.role === "admi") ? (
        <button class={styles.psychoListD} onClick={() => ChangeStatusD(specialist)}><p id={styles.block}>Bloquear Usuario</p></button>
      ) : (null)}
    </div>
  )
}

export default SpecialistCard;