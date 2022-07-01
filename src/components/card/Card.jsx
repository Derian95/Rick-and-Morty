import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import styles from './Card.module.css'
const container = {
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 1,
    },
  },
  hidden: {
    opacity: 0,
  },
}

const children = {
  show: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
}
export default function Card({ data }) {
  return (
    <Link to={'/Detail/' + data.id}>
      <motion.div
        initial='hidden'
        animate='show'
        variants={container}
        className={styles.container}
        
      >
        <motion.h3 key={1} variants={children} className={styles.title} title={data.name}>
          {data.name}
        </motion.h3>
        <motion.img
          key={2}
          variants={children}
          src={data.image}
          alt='image'
          className={styles.image}
          
        />

      </motion.div>
    </Link>
  )
}
