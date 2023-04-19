import './Ves.css'
import { useState } from 'react'

interface PropsType{
    valore: number
    aggiorna: Function
    contato: number
}

function Ves({valore, aggiorna, contato}: PropsType){
    const name = "Mattia"
    const [count, setCount] = useState(0)
  
    const cliccato = () =>{
        aggiorna(count+1)
    }
    return(

        <div>
            <h1>Ciao {valore}</h1>
        <button onClick={()=>{cliccato()}}>Cliccami {contato}
        </button>
        </div>
    )

}
export default Ves 