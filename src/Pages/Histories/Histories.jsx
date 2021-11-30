import React from "react";
import { db } from "../../Utils/FireBaseConfig";
import { useState, useEffect, useContext } from "react";
import styles from "./Histories.module.css"
import { UserContext } from "../../Context/UserContext";
import { useHistory } from "react-router";

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
                        <p>Fecha</p>
                        <button onClick={filterDates}>Filtrar</button>
                    </div>
                    <div>
                        <p>Hora</p>
                    </div>
                    <div>
                        <p>Nombre y Apellido</p>
                    </div>
                </div>

                {dates.map ((d) => (
                    <div class={styles.row}>
                        <div>
                            <p>{d.data.date}</p>
                        </div>
                        <div>
                            <p>{d.data.hour}</p>
                        </div>
                        <div>
                            <p>{d.data.namePacient} {d.data.lastNamePacient}</p>
                        </div>
                    </div>
                ))};
            </div>
        </>
    );
};