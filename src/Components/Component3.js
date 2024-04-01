import { MeriContext } from "../App"
import { useContext } from "react"
export default function Component3() {
    const { state, dispatch } = useContext(MeriContext);
    const {dataForComponent3, dataforcomponent43}  = state;
    console.log(state)
    return (
       <>
        <h1>Component 3 hai apun, {dataForComponent3}, {dataforcomponent43}</h1>
        <button onClick={()=>{dispatch({type: "component43", payload: "han hogya data change"})}}>data changer</button>
    
       </>
       )
}