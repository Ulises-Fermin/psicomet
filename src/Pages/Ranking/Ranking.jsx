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
            if (item.data().idPacient === user.id && item.data().status === "pending" && item.data().ranked === "false")
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
            ranked: "false",
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
            ranked: "false",
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
            ranked: "false",
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
            ranked: "false",
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
            ranked: "false",
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
                            <buttom class={styles.star} onClick={() => PutRank1(p)}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg></buttom>
                            <buttom class={styles.star} onClick={() => PutRank2(p)}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg></buttom>
                            <buttom class={styles.star} onClick={() => PutRank3(p)}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg></buttom>
                            <buttom class={styles.star} onClick={() => PutRank4(p)}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg></buttom>
                            <buttom class={styles.star} onClick={() => PutRank5(p)}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg></buttom>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Ranking;