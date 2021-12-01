import React from "react";
import styles from "./Ranking.module.css";
import { db } from "../../Utils/FireBaseConfig";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { app } from "../../Utils/FireBaseConfig"
import { useHistory } from "react-router";
function Ranking() {
    const [names, setNames] = useState("");
    const [psychologists, setPsychologists] = useState([]);
    const [specials, setSpecials] = useState([])
    const [newspecial, setNewspecial] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const { user, setUser } = useContext(UserContext);
    const history = useHistory();
    const list = [];
    const list2 = [];

    const [values, setValues] = useState({
        enable: "",
    });
    const handleOnChange = (event) => {
        const { value, name: inputName } = event.target;
        setValues({ ...values, [inputName]: value });
        console.log(inputName, value);
    };
    const fetchPsychologists = async () => {
        setIsLoading(true)
        const response = db.collection("users");
        const data = await response.get();
        data.docs.forEach(item => {
                list.push({ data: item.data(), id: item.id });
        })
        setPsychologists(list);
        setIsLoading(false);
        return list
    }

    const watchspecialits = async () => {
        setIsLoading(true)
        const response = db.collection("specialty");
        const data = await response.get();
        data.docs.forEach(item => {
            list2.push({ data: item.data(), id: item.id });

        })
        setSpecials(list2);
        setIsLoading(false);
        return list2
    }


    useEffect(() => {
        fetchPsychologists();
    }, [])
    useEffect(() => {
        watchspecialits();
    }, [])



    const ChangeStatusA = async (p) => {
        db.collection("users").doc(p.id).update({
            status: "accept",

        });
        fetchPsychologists()


    };
    const ChangeStatusD = async (p) => {
        db.collection("users").doc(p.id).update({
            status: "denegate",
        })
        fetchPsychologists()
    }


    return (

        <>
            <div id={styles.body}>
                <h1 id={styles.title}>Aceptar personas</h1>
                <div id={styles.container}>
                    {psychologists.map((p) => (
                        <div id={styles.psychoCards}>
                            <li class={styles.psychoList}><p>{p.data.name} {p.data.lastName}</p></li>
                            <li class={styles.psychoList}><p>{p.data.email}</p></li>
                            <li class={styles.psychoList}><p>{p.data.phone}</p></li>
                            <li class={styles.psychoList}><p>{p.data.specialty}</p></li>
                            
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Ranking;