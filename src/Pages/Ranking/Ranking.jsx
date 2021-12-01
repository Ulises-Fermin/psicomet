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


    const uptaderank = async () => {
        setIsLoading(true)
        const response = db.collection("consultations");
        const data = await response.get();
        data.docs.forEach(item => {
            if (item.data().idPacient === user.id && item.data().status === "pendiente" && item.data().ranked === "false")
                list.push({ data: item.data(), id: item.id });
        })
        setPsychologists(list);
        setIsLoading(false);
        return list
    }


    useEffect(() => {
        uptaderank();
    }, [])


    const PutRank1 = async (p) => {
        db.collection("consultations").doc(p.id).update({
            ranked: "true",
        })
        addpoint1(p)
        uptaderank()
    }
    const addpoint1 = async (p) => {

        await db.collection("users").doc(p.data.idPsycho).get().then(data => {
            db.collection("users").doc(p.data.idPsycho).update({
                consults: (data.data().consults) + 1,
                points: (data.data().points) + 1,
            })
        })
    }
    const PutRank2 = async (p) => {
        db.collection("consultations").doc(p.id).update({
            ranked: "true",
        })
        addpoint2(p)
        uptaderank()
    }
    const addpoint2 = async (p) => {

        await db.collection("users").doc(p.data.idPsycho).get().then(data => {
            db.collection("users").doc(p.data.idPsycho).update({
                consults: (data.data().consults) + 1,
                points: (data.data().points) + 2,
            })
        })
    }
    const PutRank3 = async (p) => {
        db.collection("consultations").doc(p.id).update({
            ranked: "true",
        })
        addpoint3(p)
        uptaderank()
    }
    const addpoint3 = async (p) => {

        await db.collection("users").doc(p.data.idPsycho).get().then(data => {
            db.collection("users").doc(p.data.idPsycho).update({
                consults: (data.data().consults) + 1,
                points: (data.data().points) + 3,
            })
        })
    }
    const PutRank4 = async (p) => {
        db.collection("consultations").doc(p.id).update({
            ranked: "true",
        })
        addpoint4(p)
        uptaderank()
    }
    const addpoint4 = async (p) => {

        await db.collection("users").doc(p.data.idPsycho).get().then(data => {
            db.collection("users").doc(p.data.idPsycho).update({
                consults: (data.data().consults) + 1,
                points: (data.data().points) + 4,
            })
        })
    }
    const PutRank5 = async (p) => {
        db.collection("consultations").doc(p.id).update({
            ranked: "true",
        })
        addpoint5(p)
        uptaderank()
    }
    const addpoint5 = async (p) => {

        await db.collection("users").doc(p.data.idPsycho).get().then(data => {
            db.collection("users").doc(p.data.idPsycho).update({
                consults: (data.data().consults) + 1,
                points: (data.data().points) + 5,
            })
        })
    }

    return (

        <>
            <div id={styles.body}>
                <h1 id={styles.title}>Ranking</h1>
                <div id={styles.container}>
                    {psychologists.map((p) => (
                        <div id={styles.psychoCards}>
                            <li class={styles.psychoList}><p>{p.data.idPsycho}</p></li>
                            <buttom onClick={() => PutRank1(p)}>1</buttom>
                            <buttom onClick={() => PutRank2(p)}>2</buttom>
                            <buttom onClick={() => PutRank3(p)}>3</buttom>
                            <buttom onClick={() => PutRank4(p)}>4</buttom>
                            <buttom onClick={() => PutRank5(p)}>5</buttom>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Ranking;