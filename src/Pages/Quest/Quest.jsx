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
  const [psychologists, setPsychologists] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [url, setUrl] = useState([]);
  const { user, setUser } = useContext(UserContext);
  const list = [];

function ShowItinerary(itinerarys) {
  var list = [];
  const itinerary = itinerarys;
  for (const days in itinerary){
        if (itinerary[days]["checked"] === true){
            const day = itinerary[days]["value"];
            list.push(day)
        }
    }
  return(
    <div id={styles.itinerary}>
      <h3>Itinerario del Especialista:</h3>
      {list}
    </div>
  )
};

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
        list.push({data:item.data(), id:item.id});
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
              <SpecialistCard specialist={p} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
export default Quest;

