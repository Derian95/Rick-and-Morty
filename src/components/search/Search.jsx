import { useState } from 'react'
import { searchCharacter } from '../../api/api'
import styles from './Search.module.css'

export default function Search({setSearch,setError}) {
  const [value, setValue] = useState('')

  const getData=async(e,value) => {
    e.preventDefault()
    const result=await searchCharacter(value)

    if(result==='error'){
    setError(true)

    setTimeout(() => {
    setError(false)
      
    }, 3000);
    }else{
      setSearch(result)
   
    }
    
      
  }
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={e=>getData(e,value)}>
        <input className={styles.input} type='text' placeholder='Search character' onChange={e=>setValue(e.target.value)}/>
        <button  className={styles.button} type='submit'>Search</button>
      </form>
    </div>
  )
}
