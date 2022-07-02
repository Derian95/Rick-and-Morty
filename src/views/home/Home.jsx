import styles from './Home.module.css'
import imgHome from '../../assets/img/homeImg.png'
import portal from '../../assets/img/portal.png'
import Logo from '../../assets/svg/Logo'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <Logo />
        <p>Web application that uses api de rick and morty to make queries <br/>-by Derian Francisco Herrera Amezquita -2022
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 5 }}
        className={styles.image}
      >
        <motion.img
          className={styles.portal}
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 70,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
          }}
          src={portal}
          alt=''
        />

        <motion.img
          className={styles.imgIcon2}
          initial={{ y: 10 }}
          animate={{ y: 0 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'mirror' }}
          src={imgHome}
          alt=''
        />
      </motion.div>
      
    </div>
    
  )
}
