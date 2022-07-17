import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getCharacter } from '../../api/api'
import styles from './Detail.module.css'
import imgGender from '../../assets/img/gender.png'
import imgSpecies from '../../assets/img/species.png'
import imgLocation from '../../assets/img/location.png'
import imgOrigin from '../../assets/img/origin.png'
import { motion } from 'framer-motion'

export default function Detail() {
    const { id } = useParams()
    const [data, setData] = useState([])

    const getInfoCharacter = async (id) => {
        const result = await getCharacter(id)
        setData(result)
    }

    useEffect(() => {
        getInfoCharacter(id)
    }, [])
    return (
        <div className={styles.container}>
            <h1>{data.name}</h1>

            <div className={styles.contain}>
                <img src={data.image} alt='img' />

                <div className={styles.info}>
                    <motion.div
                        className={styles.status}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            repeatType: 'mirror',
                        }}
                    >
                        <div
                            className={
                                data.status === 'Dead'
                                    ? styles.dead
                                    : styles.live
                            }
                        >
                            {' '}
                        </div>
                    </motion.div>

                    <div>
                        <img
                            src={imgSpecies}
                            alt='img'
                            className={styles.icon}
                        />
                        <p>{data.species}</p>
                    </div>
                    <div>
                        <img
                            src={imgGender}
                            alt='img'
                            className={styles.icon}
                        />
                        <p>{data.gender}</p>
                    </div>
                    <div>
                        <img
                            src={imgOrigin}
                            alt='img'
                            className={styles.icon}
                        />
                        <p>{data.origin?.name}</p>
                    </div>
                    <div>
                        <img
                            src={imgLocation}
                            alt='img'
                            className={styles.icon}
                        />
                        <p>{data.location?.name}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
