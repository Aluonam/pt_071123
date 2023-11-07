import React, { useEffect, useState } from 'react'

const InputPokemonAPI = () => {

    const [dataInputUser, setDataInputUser] = useState();
    const [dataAPI, setDataAPI] = useState([])

    useEffect(() => {
      try{


      }
      catch(error){"error deteceted", error}
    }, [])
    
    // const handleShowPokemon = ()=>{}
  return (
    <>
    <h3>Escribe el nombre de un pokémon</h3>
    <br></br>
    <input onChange={(e)=>{setDataInputUser(e.target.value)}}></input>
    <button onClick={()=>{}}>buscar</button>
    <br></br>
    {dataInputUser}
    <br></br>
    <h5>Por ejemplo: ditto, butterfree, pikachu, nidorina, pidgeot... </h5>
    </>
  )
}

export default InputPokemonAPI