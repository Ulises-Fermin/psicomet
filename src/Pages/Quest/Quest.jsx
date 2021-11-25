import React from "react";
import styles from "./Quest.module.css";
import { db } from "../../Utils/FireBaseConfig";
import { useState, useEffect } from "react";
import Popup from "reactjs-popup";
import { Link } from "react-router-dom";
import ShowItinerary from "../Itinerary/ShowItinerary";
import newUser from "../../Images/newUser.png";

function Quest() {
  const [names, setNames] = useState("");
  const [psychologists, setPsychologists] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const list = [];

  const fetchPsychologists = async () => {
    const response = db.collection("users");
    const data = await response.get();
    data.docs.forEach((item) => {
      if (
        item.data().role === "psychologist" &&
        item.data().status === "accept" &&
        (item.data().name + " " + item.data().lastName)
          .toLowerCase()
          .includes(names.toLocaleLowerCase())
      ) {
        list.push(item.data());
      }
    });
    setPsychologists(list);
    return list;
  };

  useEffect(() => {
    fetchPsychologists();
  }, [names]);

  const handleOnChange = async (e) => {
    setNames(e.target.value);
  };

  const handleSubmit = (e) => {
    const get = [];
    psychologists.forEach((psycho) => {
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
          </div>
          <div id={styles.container}>
            {psychologists.map((p) => (
              <div id={styles.psychoCards}>
                <img src="clinica.jpg" alt="" />
                <li class={styles.psychoList}>
                  {p.name} {p.lastName}
                </li>
                <li class={styles.psychoList}>{p.specialty}</li>
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
                      src={newUser}
                      alt=""
                    />
                  </div>
                    <div class={styles.info}>
                      <h1 id={styles.nombre}>
                        Dr. {p.name} {p.lastName}
                      </h1>
                      <p>Especialidad: {p.specialty}</p>
                    </div>
                    <div id={styles.box5}>
                      <div class={styles.box4}>
                        <div class={styles.box2}>
                          <p id={styles.label1}>Correo Electrónico:</p>
                          <p id={styles.mail}>{p.email}</p>
                          <p id={styles.label1}>Teléfono:</p>
                          <p id={styles.phone}>{p.phone}</p>
                          <p id={styles.label2}>Género:</p>
                          <p id={styles.gender}>{p.gender}</p>
                          <p id={styles.label3}>Idiomas:</p>
                          <p id={styles.idioma}>{p.languages}</p>
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
                          >
                            <ShowItinerary/>
                          </Popup>
                          <br />
                        </div>
                      </div>
                      <div class={styles.box7}>
                        <div class={styles.box3}>
                          <div id={styles.box8}>
                            <h2 id={styles.label10}>Áreas de atención</h2>
                            <div id={styles.caja}>{p.atencionAreas}</div>
                          </div>
                          <div id={styles.box6}>
                            <h2 id={styles.profesional}>
                              Experiencia Profesional
                            </h2>
                            <div id={styles.caja2}>{p.experience}</div>
                          </div>
                        </div>
                      </div>
                      <div id={styles.box9}>
                        <div id={styles.box13}>
                          <h2 id={styles.label7}>Formación Académica</h2>
                          <div id={styles.caja3}>{p.academics}</div>
                        </div>
                        <div id={styles.box10}>
                          <h2 id={styles.about}>Sobre {p.name}</h2>
                          <div id={styles.caja4}>{p.aboutMe}</div>
                        </div>
                      </div>
                    </div>
                    <button class={styles.psychoList}>Agendar Cita</button>
                  </div>
                </Popup>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
export default Quest;
