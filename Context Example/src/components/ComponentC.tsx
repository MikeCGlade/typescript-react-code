import ComponentD from "./ComponentD.tsx";
import "../css/box.css";

function ComponentC(){
    return(
        <>
            <div className="box">
                <h1>ComponentA</h1>
                <ComponentD />
            </div>
        </>
    );
}

export default ComponentC;