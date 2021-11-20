import { useEffect, useState } from "react";
import { db } from "../../Utils/FireBaseConfig";
import {useContext} from "react";
import {UserContext} from "../../Context/UserContext";

export const useTestimonials = () => {
    const { user, setUser } = useContext(UserContext);
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const [applications, setApplications] = useState([])
    useEffect( () => {
            const unsubscribe = db.collection("Application").onSnapshot(
                snapshop => {   
                    setLoading(false)
                    setApplications(snapshop.docs.map(d => ({ id: d.id, ...d.data() } )));
    
            },
            err => {
                setError(err);
            }
        );
        return() =>unsubscribe()
    },
    [setApplications]
    )
    return{ error, loading, applications, user }
}