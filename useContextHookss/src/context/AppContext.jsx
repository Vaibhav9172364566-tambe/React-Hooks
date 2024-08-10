/* eslint-disable react/prop-types */
import { createContext } from "react";

// Create the context
export const AppContext = createContext();

const ContextProvider = (props) => {
    const phone = "25421654654";

    return (
        <AppContext.Provider value={phone}>
            {props.children}
        </AppContext.Provider>
    );
};

export default ContextProvider;
