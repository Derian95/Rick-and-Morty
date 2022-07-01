import {NavLink} from 'react-router-dom'
import styles from './NavBar.module.css'
export default function Navbar() {

    let activeStyle = {
        textDecoration: "underline",
      }
    
  return (
    <nav className={styles.container}>
      <ul className={styles.navbar}>
        <li>
          <NavLink
          className={styles.navLink}
            to="/"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Home
          </NavLink>
        </li>
      
        <li>
        <NavLink
          className={styles.navLink}
            to="/characters"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Characters
          </NavLink>
        </li>

        <li>
        <NavLink
          className={styles.navLink}
            to="/characters"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Episodes
          </NavLink>
        </li>
        <li>
        <NavLink
          className={styles.navLink}
            to="/characters"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Zones
          </NavLink>
        </li>
       
      </ul>
    </nav>
  )
}
