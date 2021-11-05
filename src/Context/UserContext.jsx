import {useState, useEffect, createContext} from "react";
import { EmailIcon } from "react-share";
import {auth} from "../Utils/FireBaseConfig";

export const UserContext = createContext(null);

function UserContextProvider({children}){
    const [user,setUser] = useState(null);

    useEffect(() => {
        const unListen = auth.onAuthStateChanged((loggedUser)=>{
            if (loggedUser){
                setUser({
                    name: loggedUser.displayName,
                    email: loggedUser.email,
                })
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
        }}>
        {children}
        </UserContext.Provider>
    )
}
export default UserContextProvider;