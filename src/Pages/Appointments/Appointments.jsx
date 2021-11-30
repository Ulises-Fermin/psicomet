import React from "react";
import styles from "./Appointments.module.css";
import { db } from "../../Utils/FireBaseConfig";
import { useState, useEffect } from "react";
import PopUp from "reactjs-popup";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";


function Appointments() {
  const { user, setUser } = useContext(UserContext);
  const [dates, setdates] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = useState({
    idPacient: "",
    idPsycho: "",
    namePacient: "",
    lastNamePacient: "",
    namePsycho: "",
    lastNamePsycho: "",
    date: "",
    progress: "",
    treatment: "",
    observations: "",
});
  const list = [];
  const tarjetas = async () => {
    const citas = db.collection("consultations");
    const data = await citas.get();
    data.docs.forEach((item) => {
      if (item.data().idPsycho === user.id) {
        list.push({ data: item.data(), id: item.id });
      }
    });
    setdates(list);
    return list;
  };

  useEffect(() => {
    tarjetas();
  }, [user]);

  const handleOnClic = async (userId) => {
    try{
      var citas = db.collection("users");
      var item = await citas.doc(userId).get();
      var us = {data:item.data(), id:item.id};
      createHistory(us.id, us.data.name, us.data.lastName)
    }catch (e){
      console.log(e)
    }
  }

  const handleOnChange = (e) => {
    const { value, name: inputName } = e.target;
    setValues({ ...values, [inputName]: value });
  }

  const createHistory = async (id, name, lastName) => {
    setIsLoading(true);
    const today = new Date();
    const now = today.toString().split(" ");
    const date = now[1] + "-" + now[2] + "-" + now[3]
    await db.collection("histories").add({
      idPacient: id,
      idPsycho: user.id,
      namePacient: name,
      lastNamePacient: lastName,
      namePsycho: user.name,
      lastNamePsycho: user.lastName,
      date: date,
      progress: values.progress,
      treatment: values.treatment,
      observations: values.observations,
    });
      window.alert("Historia generada con exito.")
      setIsLoading(false);
  }

  return (
    <>
      {isLoading ? (
        <div id={styles.isLoading}>
            <h1>Cargando...</h1>
            <h1>Será redirigido automáticamente.</h1>
        </div>
      ) : (
        <div>
          {dates.map((d) => (
            <div class={styles.card}>
              <h2 id={styles.titulo}>Consulta</h2>
              <p id={styles.nombre}>{d.data.namePacient} {d.data.lastNamePacient}</p>
              <p id={styles.fecha}>{d.data.date}</p>
              <p id={styles.fecha}>{d.data.hour}</p>
              <PopUp trigger={<button>Generar nueva historia</button>} modal>
                <div>
                  <h1>Paciente:</h1>
                  <h1>{d.data.namePacient} {d.data.lastNamePacient}</h1>
                  <h2>Avances:</h2>
                  <textarea rows="5" placeholder="Escribe aqui..." value={values.progress} name="progress" onChange={handleOnChange}></textarea>
                  <h2>Tratamiento aplicado:</h2>
                  <textarea rows="5" placeholder="Escribe aqui..." value={values.treatment} name="treatment" onChange={handleOnChange}></textarea>
                  <h2>Otras observaciones:</h2>
                  <textarea rows="5" placeholder="Escribe aqui..." value={values.observations} name="observations" onChange={handleOnChange}></textarea>
                  <button onClick={()=>handleOnClic(d.data.idPacient)}>Generar historia</button>
                </div>
              </PopUp>
            </div>
          ))}
        </div>
      )};
    </>
  );
}

export default Appointments;
