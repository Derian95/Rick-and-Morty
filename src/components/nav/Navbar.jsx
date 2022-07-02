import {NavLink} from 'react-router-dom'
import styles from './NavBar.module.css'
export default function Navbar() {

      
    
  return (

    <nav className={styles.container}>
      <ul className={styles.navbar}>

        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.selected}` : styles.navLink
          }
          >
            Home
          </NavLink>
        </li>
      
        <li>
        <NavLink
            to="/characters"
            className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.selected}` : styles.navLink
          }
          >
            Characters
          </NavLink>
        </li>

        <li>
        <NavLink
            to="/characters"
            className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.selected}` : styles.navLink
          }
          >
            Episodes
          </NavLink>
        </li>
        <li>
        <NavLink
            to="/characters"
            className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.selected}` : styles.navLink}
          >
            Zones
          </NavLink>
        </li>
       
      </ul>
    </nav>

  )
}
