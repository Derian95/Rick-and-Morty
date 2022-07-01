import { useState } from 'react'
import {searchCharacter} from '../../api/api'

export default function Search() {
  
  const [data, setData] = useState();

  return (
    <div>
        <input type="text" placeholder="Search character"/>
        <button>Search</button>
    </div>
  )
}
