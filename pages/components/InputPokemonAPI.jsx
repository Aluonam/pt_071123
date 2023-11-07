import React, { useState } from 'react'

const InputPokemonAPI = () => {

    const [dataInputUser, setDataInputUser] = useState()
  return (
    <>
    <h3>Escribe el nombre de un pokémon</h3>
    <br></br>
    <input onChange={(e)=>{setDataInputUser(e.target.value)}}></input>
    <br></br>
    {dataInputUser}
    <br></br>
    <h5>Por ejemplo: ditto, butterfree, pikachu, nidorina, pidgeot... </h5>
    </>
  )
}

export default InputPokemonAPI