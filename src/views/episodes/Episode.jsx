import React, { useState, useEffect } from 'react'
import styles from './Episode.module.css'
import { getEpisodes } from '../../api/api'
import CardEpisode from '../../components/cardEpisode/CardEpisode'
import InfiniteScroll from 'react-infinite-scroll-component'

export default function Episode() {
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(true)

    const getDataEpisode = async (numberPage) => {
        const response = await getEpisodes(numberPage)
        setData((prevCharactes) => prevCharactes.concat(response.results))
        setHasMore(response.info.next!=null)
    }

    useEffect(() => {
        getDataEpisode(page)
    }, [page])

    return (
        <div className={styles.container}>
           
            <InfiniteScroll
            className={styles.infinite}
                dataLength={data.length}
                next={() => setPage((prevPage) => prevPage + 1)}
                hasMore={hasMore}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >
                {data.map((episode) => {
                return <CardEpisode key={episode.id} data={episode} />
            })}
            </InfiniteScroll>
        </div>
    )
}
