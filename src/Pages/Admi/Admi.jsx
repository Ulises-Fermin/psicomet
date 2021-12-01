import React from "react";
import styles from "./Admi.module.css";
import { db } from "../../Utils/FireBaseConfig";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { app } from "../../Utils/FireBaseConfig"
import { useHistory } from "react-router";
function Admi() {
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
            if (item.data().status === "waiting" && item.data().curriculum === "have")
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
    const ChangeEnableT = async (p) => {
        db.collection("specialty").doc(p.id).update({
            enable: "true",
        })
        watchspecialits()
    }
    const ChangeEnableF = async (p) => {
        db.collection("specialty").doc(p.id).update({
            enable: "false",
        })
        watchspecialits()
    }
    const DownloadCurriculum = async (p) => {
        const ref = app.storage().ref("Curriculum/" + p.id);
        const url = await ref.getDownloadURL()
        window.location = (url);
    }

    const sendSpecial = (e) => {
        if (!(newspecial === "")) {
            db.collection("specialty").add({
                enable: "true",
            })
        } else {
            window.alert("El espacio se encuentra vacio, escriba algo.");
        }
    };


    return (
        <>
            {isLoading ? (
                <div id={styles.isLoading}>
                    <h1>Cargando Especialistas.</h1>
                </div>
            ) : (
                <>
                    {(user?.role === "admi") ? (
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
                                            <button class={styles.psychoListC} onClick={() => DownloadCurriculum(p)}><p>Ver Curriculum</p></button>
                                            <div id={styles.linebuttom}>
                                                <button class={styles.psychoListA} onClick={() => ChangeStatusA(p)}><p>Aceptar</p></button>
                                                <button class={styles.psychoListD} onClick={() => ChangeStatusD(p)}><p>Denegar</p></button>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <h1 id={styles.title}>Modificar Especialidades</h1>
                                <div id={styles.inputcontainer}>
                                    <input
                                        id={styles.newspecialist}
                                        name = "enable"
                                        type="text"
                                        class={styles.fields}
                                        value={values.enable}
                                        onChange={handleOnChange}
                                        placeholder="Ingrese nueva especialidad"
                                    >

                                    </input>
                                    <button id={styles.buttonE} onClick={sendSpecial}>
                                        Enviar mensaje
                                    </button>
                                </div>
                                <div id={styles.container2}>
                                    {specials.map((m) => (
                                        <div id={styles.psychoCards2}>
                                            <li class={styles.psychoList}><p>{m.data.name}</p></li>
                                            {((m.data.enable === "true") ? (
                                                <buttom id={styles.checkT} onClick={() => ChangeEnableF(m)}>.</buttom>
                                            ) : (
                                                <buttom id={styles.checkF} onClick={() => ChangeEnableT(m)}>.</buttom>
                                            )
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </>
                    ) : (history.push("/home"))};
                </>
            )

            }
        </>
    )
}
export default Admi;

/*<input
                        name="status"
                        id={styles.nombre}
                        type="text"
                        placeholder="accept/denegate"
                        value={values.status}
                        onChange={handleOnChange}
                    />*/