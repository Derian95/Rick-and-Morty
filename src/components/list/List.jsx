import { useState, useEffect } from 'react'
import { getCharacters,searchCharacter } from '../../api/api'
import InfiniteScroll from 'react-infinite-scroll-component'
import styles from './List.module.css'
import Card from '../card/Card'
import { motion } from 'framer-motion'
import Search from '../search/Search'


export default function List() {
  const [characters, setCharacters] = useState([])
  const [page, setPage] = useState(1)
  const [error, setError] = useState(false)

  const getResults = async (numberPage) => {
    const result = await getCharacters(numberPage)
    setCharacters((prevCharactes) => prevCharactes.concat(result))
  }

 

  useEffect(() => {
    getResults(page)
  }, [page])


  return (
    <main>
      <Search setSearch={setCharacters} setError={setError}/>
      {error && <p className={styles.messageError}>Character not found</p>}
      <InfiniteScroll
        className={styles.container}
        dataLength={characters.length}
        next={() => setPage((prevPage) => prevPage + 1)}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {characters.map((character, idx) => (
          <Card key={idx} data={character} />
        ))}
      </InfiniteScroll>
    </main>
  )
}
