import { useEffect, useState } from "react";
import { db } from "../../Utils/FireBaseConfig";
import {useContext} from "react";
import {UserContext} from "../../Context/UserContext";

export const useTestimonials = () => {
    const { user, setUser } = useContext(UserContext);
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const [messages, setMessages] = useState([])
    useEffect( () => {
            const unsubscribe = db.collection("messages").onSnapshot(
                snapshop => {   
                    setLoading(false)
                    setMessages(snapshop.docs.map(d => ({ id: d.id, ...d.data() } )));    
                    console.log(snapshop.docs)  
            },
            err => {
                setError(err);
            }
        );
        return() =>unsubscribe()
    },
    [setMessages]
    )
    return{ error, loading, messages, user }
}