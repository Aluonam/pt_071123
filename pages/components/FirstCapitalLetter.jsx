import React, { useState } from 'react'

const FirstCapitalLetter = () => {
    const [dataUser, setDataUser] = useState([])

    const firstCapitalLetter = ()=>{
        const copyArr = structuredClone(dataUser);
        const splitWords = copyArr.split(" ");

        const goToWords = splitWords.map((oneWord)=>{
            const letter = oneWord.split("")
            const capitalLetter = letter.at(0).toUpperCase()
            letter[0] = capitalLetter
            return(
                letter.join("")
            )
            
        })
        console.log(goToWords)
    }
  return (
    <>
    {dataUser}
    <input onChange={(e)=>{setDataUser(e.target.value)}}></input>
    <button onClick={()=>{firstCapitalLetter()}}>convertir primera letra en mayúscula</button>
    </>
  )
}

export default FirstCapitalLetter