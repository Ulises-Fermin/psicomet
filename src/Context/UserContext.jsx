import {useState, useEffect, createContext} from "react";
import {auth, db} from "../Utils/FireBaseConfig";
import {getFirstElementArrayCollection} from "../Utils/Parsers";

export const UserContext = createContext(null);

function UserContextProvider({children}){
    const [user, setUser] = useState(null);

    const createUser = async (user, uid) => {
        await db.collection("users").doc(uid).set(user);
    };

    const getUserByEmail = async (email) => {
        const usersReference = db.collection("users");
        const snapshot = await usersReference.where("email", "==", email).get();
        
        if (!snapshot.size) return null;

        const loggedUser = getFirstElementArrayCollection(snapshot);

        return getFirstElementArrayCollection(snapshot);
    }

    useEffect(() => {
        const unListen = auth.onAuthStateChanged(async(loggedUser)=>{
            if (loggedUser){
                const profile = await getUserByEmail(loggedUser.email);
                if(!profile){
                    const newProfile={
                        name: loggedUser.displayName,
                        lastName: null,
                        email: loggedUser.email,
                        phone: null,
                        date: null,
                        gender: null,
                        role: "pacient",
                        id: null,
                        college: null,
                        specialty: null,
                    };
                    await createUser(newProfile ,loggedUser.uid);
                    setUser(newProfile);
                } else {
                    setUser(profile);
                }
            } else {
                setUser(null);
            }
        });
        return ()=>{
            unListen();
        }
    }, [])

    return(
        <UserContext.Provider 
            value={{
                user,
                setUser,
                createUser,
                getUserByEmail,
        }}>
        {children}
        </UserContext.Provider>
    )
}
export default UserContextProvider;