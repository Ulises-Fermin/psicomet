import React from "react";
import { db } from "../../Utils/FireBaseConfig";
import { useState, useEffect, useContext } from "react";
import styles from "./Histories.module.css"
import { UserContext } from "../../Context/UserContext";
import { useHistory } from "react-router";
import PopUp from "reactjs-popup";

export default function Histories() {
    const {user} = useContext(UserContext);
    const [dates, setDates] = useState([]);

    const list = [];
    const cards = async () => {
        const citas = db.collection("histories");
        const data = await citas.get();
        data.docs.forEach((item) => {
            if (item.data().idPsycho === user.id) {
                list.push({ data: item.data(), id: item.id });
            }
        });
        setDates(list);
        return list;
    };

    function filterDates () {
        console.log((dates.sort((a, b) => new Date(a.data.date).getTime() > new Date(b.data.date).getTime())));
    }

    useEffect(() => {
    cards();
    }, [user]);

    return(
        <> 
            <h1>Historias de Pacientes:</h1>
            <div id={styles.chart}>
                <div class={styles.row}>
                    <div class={styles.item}>
                        <h3>Fecha</h3>
                    </div>
                    <div class={styles.item}>
                        <h3>Nombre y Apellido</h3>
                    </div>
                    <div class={styles.item}>
                        <h3>Otros</h3>
                    </div>
                </div>

                {dates.map ((d) => (
                    <div class={styles.row}>
                        <div>
                            <p>{d.data.date}</p>
                        </div>
                        <div>
                            <p>{d.data.namePacient} {d.data.lastNamePacient}</p>
                        </div>
                        <div>
                            <PopUp trigger={<button>Ver mas</button>} modal>
                                <div id={styles.PopUp}>
                                    <h1>Paciente: {d.data.namePacient}</h1>
                                    <h2 id={styles.date}>Fecha: {d.data.date}</h2>
                                    <div>
                                        <h3>Avances:</h3>
                                        <p class={styles.info}>{d.data.progress}</p>
                                    </div>
                                    <div>
                                        <h3>Tratamiento:</h3>
                                        <p class={styles.info}>{d.data.treatment}</p>
                                    </div>
                                    <div>
                                        <h3>Otras observaciones:</h3>
                                        <p class={styles.info}>{d.data.observations}</p>
                                    </div>
                                </div>
                            </PopUp>
                        </div>
                    </div>
                ))};
            </div>
        </>
    );
};