import React from "react";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { db } from "../../Utils/FireBaseConfig";
import styles from "./ShowItinerary.module.css"

export default function ShowItinerary() {
    var list = [];
    const { user } = useContext(UserContext);
    const itinerary = user.itinerary;
    for (const days in itinerary){
        if (itinerary[days]["checked"] === true){
            const day = itinerary[days]["value"];
            list.push(day)
        }
    }
    return(
        <>
        <div id={styles.body}>
        <h3>Tu Itinerario:</h3>
        {list.map((h) => (
                <p>{h}</p>
            ))};
        </div>
        </>
    )
}