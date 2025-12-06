import react, {  createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppContextProvider = ({children})=>{
const [name, setName] = useState("");
const [age, setAge] = useState('');

    const value = {
        name,
        age
    }
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useAppContext = ()=> useContext(AppContext);



<AppContextProvider>
    <APP/>
    </AppContextProvider>