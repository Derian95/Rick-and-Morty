import styles from './CardEpisode.module.css'
import {Link} from 'react-router-dom'
export default function CardEpisode({ data }) {
    return (
        <Link to={'/Episode/'+ data.id}>
            <div className={styles.container}>
                <h4>{data.name}</h4>
                <p>Episode {data.id}</p>
            </div>
        </Link>
    )
}
