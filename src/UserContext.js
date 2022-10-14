import { createContext, useState } from "react"
import useLocalStorage from "use-local-storage";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage("user", {cartItems:[]});
    const saveUser = (user) => {
        setUser(user);
    }

    return (
        <UserContext.Provider value={{ user, saveUser }}>
            {children}
        </UserContext.Provider>
    )
}

export const UserConsumer = UserContext.Consumer;

export default UserContext