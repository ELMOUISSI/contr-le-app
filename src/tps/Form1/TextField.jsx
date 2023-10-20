import React, { useState, useRef, useEffect } from "react";


export default function Myselect(){
    const [filieres, setFilieres] = useState([])
    const [isDisabled, setIsDisabled] = useState(true)
    const inputFil = useRef()
    const inRef = useRef()

    useEffect(()=> {
        inRef.current.focus()
        inRef.current.value=''
                    })

    function handleAdd(e){
        console.log(inputFil.current)
        e.preventDefault()
        setFilieres([...filieres, inRef.current.value])
        setIsDisabled(true)
    }

    function handleChange(e){
        inputFil.current = e.target.value
        if(inRef.current.value === '')
            setIsDisabled(true)
        else setIsDisabled(false)
    }
    return (
        <div>
            <form>
                <p>Vous avez ajouter {filieres.length} filieres</p>
            <input onChange={handleChange} ref={inRef} /><button disabled={isDisabled}  onClick={e => handleAdd(e)}>Ajouter</button>
                
                {filieres.length === 0?<p>Il n'y a pas encore de filiere a afficher</p>:<select className="bloc">
                    {filieres.map((fil) => 
                        <option key={fil}>{fil}</option>
                        )}

                </select>
                }
            </form>
        </div>
    )
}