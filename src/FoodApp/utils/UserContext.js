import { createContext } from "react";

const UserContext = createContext(
    {
        loggedId : "Admin"
    }
)

export default UserContext;