import { useState, useEffect } from 'react'
import { getCharacters } from '../../api/api'
import InfiniteScroll from 'react-infinite-scroll-component'
import styles from './List.module.css'
import Card from '../card/Card'
import {motion} from 'framer-motion'
import Search from '../search/Search'
const container = {
  show: {
      opacity: 1,
      transition: {
          staggerChildren: 4.8,
      },
  },
  hidden: {
      opacity: 0
  },
};

const children = {
  show: {
      opacity: 1
  },
  hidden: {
      opacity: 0
  }

}

export default function List() {
  const [characters, setCharacters] = useState([])
  const [page, setPage] = useState(1)

  const getResults = async (numberPage) => {
    const result = await getCharacters(numberPage)
    setCharacters((prevCharactes) => prevCharactes.concat(result))
  }

  useEffect(() => {
    getResults(page)
  }, [page])

  return (
    <main >
      <Search/>
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
          <Card key={idx} data={character}/>
        ))}
      </InfiniteScroll>
    </main>
  )
}
