import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import {getCharacter} from '../../api/api'

export default function Detail() {
  const {id}= useParams()
  const [data,setData] = useState([])
  
  const getInfoCharacter=async(id) => {
    const result = await getCharacter(id)
    setData(result)
  }

  useEffect(() => {
    getInfoCharacter(id)
  }, []);
console.log(data)
    return (
    <div>
        <h1>{data.name}</h1>
        <p>{data.status}</p>
        <p>{data.species}</p>
        <p>{data.gender}</p>
        <p>{data.origin?.name}</p>
        <p>{data.location?.name}</p>
        <img src={data.image} alt="img" />


    </div>


    )
}
