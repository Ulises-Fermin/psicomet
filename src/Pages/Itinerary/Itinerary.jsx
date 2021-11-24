import React, { useState, useContext } from "react";
import styles from "./Itinerary.module.css";
import { db } from "../../Utils/FireBaseConfig";
import { UserContext } from "../../Context/UserContext";
import { useHistory } from "react-router";

const initialStateOfHours = [
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
    value: "1:00 - 1:50",
    checked: false,
  },
  {
    name: "1-9",
    value: "2:00 - 2:50",
    checked: false,
  },
  {
    name: "1-10",
    value: "3:00 - 3:50",
    checked: false,
  },
  {
    name: "1-11",
    value: "4:00 - 4:50",
    checked: false,
  },
  {
    name: "1-12",
    value: "5:00 - 5:50",
    checked: false,
  },
  {
    name: "1-13",
    value: "6:00 - 6:50",
    checked: false,
  },

];

const HoursInDay = ({ day, hours, onChange }) => {
  const [inputs, setInputs] = useState([...hours]);

  const handleOnChange = (e) => {
    const { name, checked } = e.target;

    const idx = inputs.findIndex((val) => val.name === name);

    setInputs((prev) => {
      const newInputs = [
        ...prev.slice(0, idx),
        { ...prev[idx], checked },
        ...prev.slice(idx + 1),
      ];

      onChange(day, newInputs);
      return newInputs;
    });
  };

  return (
    <div class={styles.section}>
      <p>{day}</p>
      {inputs.map((input) => (
        <div id={styles.itinerary}>  
          <input
            type="checkbox"
            name={input.name}
            value={input.value}
            checked={input.checked}
            onChange={handleOnChange}
          /> {input.value}
        </div>
      ))}
    </div>
  );
};

export default function Itinerary() {
  const { user} = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  const [values, setValues] = useState({});

  const handleOnSubmit = (e) => {
    setIsLoading(true);
    db.collection("users").doc(user.id).update({
      itinerary: values
    });
    setIsLoading(false);
    history.push("/Home");
  };

  const onChangeDays = (day, hours) => {
    setValues((prev) => ({
      ...prev,
      [day]: [...hours],
    }));
  };

  return (
    <>
    {isLoading ? (
      <div id={styles.isLoading}>
        <h1>Cargando Especialistas.</h1>
      </div>
    ) : (
        <div class= {styles.body}>
          <form onSubmit={handleOnSubmit} id= {styles.body}>
            <div class={styles.section}>
            <HoursInDay
              day="Lunes:"
              hours={initialStateOfHours}
              onChange={onChangeDays}
            />
            </div>
            <div>
            <HoursInDay
              day="Martes:"
              hours={initialStateOfHours}
              onChange={onChangeDays}
            />
            </div>
            <div>
            <HoursInDay
              day="Miercoles:"
              hours={initialStateOfHours}
              onChange={onChangeDays}
            />
            </div>
            <div>
            <HoursInDay
              day="Jueves:"
              hours={initialStateOfHours}
              onChange={onChangeDays}
            />
            </div>
            <div>
            <HoursInDay
              day="Viernes:"
              hours={initialStateOfHours}
              onChange={onChangeDays}
            />
            </div>
          </form>
          <button onClick={handleOnSubmit}>Guardar</button>
        </div>
    )}
  </>
  )
}
