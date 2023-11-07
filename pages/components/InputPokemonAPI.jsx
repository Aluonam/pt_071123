import React, { useEffect, useState } from 'react'

const InputPokemonAPI = () => {

    const [dataInputUser, setDataInputUser] = useState();
    const [dataAPI, setDataAPI] = useState([])

    const APIcall = async (pokemonName) => {
      try{
        const url = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        const data = await url.json()
        setDataAPI(data)

      }
      catch(error){"error deteceted", error}
    }

    const imgPokemon = <>
                        <img src={dataAPI?.sprites?.front_default}></img>
                        </>

  return (
    <>
    <h3>Escribe el nombre de un pokémon</h3>
    <br></br>
    <input onChange={(e)=>{setDataInputUser(e.target.value)}}></input>
    <button onClick={()=>{APIcall(dataInputUser)}}>buscar</button>
    <br></br>
    {dataAPI !== '' && imgPokemon}
    <br></br>
    <h5>Por ejemplo: ditto, butterfree, pikachu, nidorina, pidgeot... </h5>
    </>
  )
}

export default InputPokemonAPI