import { createContext, useState } from "react";

const UserContext = createContext({});

const UserContextProvider = (props) => {

    const [user, setUser] = useState(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {props.children}
        </UserContext.Provider>
    )

}

// How to use
// const { user, setUser } = useContext(UserContext)

export { UserContext, UserContextProvider };