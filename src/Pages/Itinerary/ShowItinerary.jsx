import React from "react";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { db } from "../../Utils/FireBaseConfig";
import styles from "./ShowItinerary.module.css"

export default function ShowItinerary() {
    var list = [];
    const { user } = useContext(UserContext);
    const itinerary = user.itinerary;
    console.log(itinerary);
    for (const days in itinerary){
        for (const hours in itinerary[days])
            if (itinerary[days][hours]["checked"] === true){
                const day = days + " " + itinerary[days][hours]["value"];
                list.push(day)
            }
    }
    return(
        <>
        <div id={styles.body}>
        {list.map((h) => (
                <p>{h}</p>
            ))};
        </div>
        </>
    )
}