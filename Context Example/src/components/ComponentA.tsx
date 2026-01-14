import ComponentB from "./ComponentB.tsx";
import "../css/box.css";
import {useState} from "react";
import {UserContext} from "../contexts/UserContext.ts";

/*
* Bare minimum context example using TypeScript
* Access Line:
* useState - > user="name" -> value (provider) -> UserContext prop -> useContext -> const (user)
* eslint -> recommends context be created in separate file & TS
* */
function ComponentA(){
    const [user] = useState("MikeCGlade");
    return(
        <>
            <div className="box">
                <h1>ComponentA</h1>
                <h2>{`Hello ${user}`}</h2>

                <UserContext.Provider value={user}>
                    <ComponentB />
                </UserContext.Provider>
            </div>
        </>
    );
}

export default ComponentA;