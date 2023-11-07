import React, { useState } from 'react'

const FirstCapitalLetter = () => {
    const [dataUser, setDataUser] = useState([])
  return (
    <>
    {dataUser}
    <input onChange={(e)=>{setDataUser(e.target.value)}}></input>
    </>
  )
}

export default FirstCapitalLetter