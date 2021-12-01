import React, { useState, useContext } from "react";
import { db } from "../../Utils/FireBaseConfig";
import { UserContext } from "../../Context/UserContext";
import { useHistory } from "react-router";
import styles from "./Itinerary.module.css"


const _inputs = [
    {
        name: "1-1",
        value: "6:00 - 6:50",
        checked: false,
    },
    {
        name: "1-2",
        value: "7:00 - 7:50",
        checked: false,
    },
    {
        name: "1-3",
        value: "8:00 - 8:50",
        checked: false,
    },
    {
        name: "1-4",
        value: "9:00 - 9:50",
        checked: false,
    },
    {
        name: "1-5",
        value: "10:00 - 10:50",
        checked: false,
    },
    {
        name: "1-6",
        value: "11:00 - 11:50",
        checked: false,
    },
    {
        name: "1-7",
        value: "12:00 - 12:50",
        checked: false,
    },
    {
        name: "1-8",
        value: "13:00 - 13:50",
        checked: false,
    },
    {
        name: "1-9",
        value: "14:00 - 14:50",
        checked: false,
    },
    {
        name: "1-10",
        value: "15:00 - 15:50",
        checked: false,
    },
    {
        name: "1-11",
        value: "16:00 - 16:50",
        checked: false,
    },
    {
        name: "1-12",
        value: "17:00 - 17:50",
        checked: false,
    },
    {
        name: "1-13",
        value: "18:00 - 18:50",
        checked: false,
    },
];

export default function ItineraryP() {
  const [inputs, setInputs] = useState(_inputs);
  const { user} = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  const handleOnChange = (e) => {
    const { name, checked } = e.target;

    const idx = inputs.findIndex((val) => val.name === name);

    setInputs((prev) => [
      ...prev.slice(0, idx),
      { ...prev[idx], checked },
      ...prev.slice(idx + 1),
    ]);
    console.log(inputs);
  };

  const handleOnSubmit = (e) => {
    setIsLoading(true);
    db.collection("users").doc(user.id).update({
      itinerary: inputs
    });
    setIsLoading(false);
    history.push("/Home");
  };

  return (
    <>
        <form onSubmit={handleOnSubmit} id={styles.forms}>
            {inputs.map((input) => (
                <div id={styles.itinerary}>
                    <input
                    type="checkbox"
                    name={input.name}
                    value={input.value}
                    checked={input.checked}
                    onChange={handleOnChange}
                    id={styles.inputs}
                    />{input.value}
                </div>
            ))}
      </form>
      <button onClick={handleOnSubmit} id={styles.buttonss}>Guardar</button>
    </>
  );
}
