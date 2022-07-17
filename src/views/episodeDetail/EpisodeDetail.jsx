import { useParams } from 'react-router'
import styles from './Detail.module.css'
import { getEpisode } from '../../api/api'
import { useEffect, useState } from 'react'
import Card from '../../components/card/Card'
export default function EpisodeDetail() {
    const [data, setData] = useState([])
    const { episodeId } = useParams()
    const getData = async (id) => {
        const response = await getEpisode(id)
        setData(response)
    }
    useEffect(() => {
        getData(episodeId)
    }, [])
    return (
    <div className={styles.container}>
        {
        data.map((character)=>{
            return(
            <div>
                <Card key={character.id} data={character}/>
            </div>
        )})
         }
    </div>

)
}
