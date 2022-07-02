import { useState } from 'react'
import { searchCharacter } from '../../api/api'
import styles from './Search.module.css'

export default function Search() {
  const [data, setData] = useState([])
  const [value, setValue] = useState('')

  const getData=async(e,value) => {
    e.preventDefault()
    const result=await searchCharacter(value)
    setData(result)
    console.log(result)
  }
console.log(value)
console.log(data)
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={e=>getData(e,value)}>
        <input className={styles.input} type='text' placeholder='Search character' onChange={e=>setValue(e.target.value)}/>
        <button  className={styles.button} type='submit'>Search</button>
      </form>
    </div>
  )
}
