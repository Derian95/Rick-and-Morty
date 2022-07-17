import { NavLink } from 'react-router-dom'
import styles from './NavBar.module.css'
import { motion, useViewportScroll } from 'framer-motion'
import { useEffect, useState } from 'react'
const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -25 },
}

export default function Navbar() {
    const [hidden, setHidden] = useState(false)
    const [nav, setNav] = useState(false)
    const { scrollY } = useViewportScroll()

    const update = () => {
        if (scrollY?.current < scrollY?.prev) {
            setHidden(false)
        } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
            setHidden(true)
        }
    }
    useEffect(() => {
        return scrollY.onChange(() => update())
    }, [])
    return (
        <motion.nav
            variants={variants}
            animate={hidden ? 'hidden' : 'visible'}
            transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
            className={styles.container}
        >
            <ul className={styles.navbar}>
                <li>
                    <div
                        className={styles.hm}
                        onClick={() => {
                            setNav(!nav)
                        }}
                    >
                        <div
                            className={nav ? styles.lineClick1 : styles.line1}
                        ></div>
                        <div
                            className={nav ? styles.lineClick3 : styles.line2}
                        ></div>
                        <div
                            className={nav ? styles.lineClick2 : styles.line3}
                        ></div>
                    </div>
                    <NavLink
                        to='/'
                        className={({ isActive }) =>
                            isActive
                                ? `${styles.navLink} ${styles.selected}`
                                : styles.navLink
                        }
                    >
                        Home
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to='/characters'
                        className={({ isActive }) =>
                            isActive
                                ? `${styles.navLink} ${styles.selected}`
                                : styles.navLink
                        }
                    >
                        Characters
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to='/episodes'
                        className={({ isActive }) =>
                            isActive
                                ? `${styles.navLink} ${styles.selected}`
                                : styles.navLink
                        }
                    >
                        Episodes
                    </NavLink>
                </li>
            </ul>

            <ul
                className={
                    nav
                        ? `${styles.navResponsive} ${styles.noActiveNav}`
                        : `${styles.navResponsive} ${styles.activeNav}`
                }
            >
                <li>
                    <NavLink
                        to='/'
                        className={({ isActive }) =>
                            isActive
                                ? `${styles.navLinkRes} ${styles.selected}`
                                : styles.navLinkRes
                        }
                    >
                        Home
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to='/characters'
                        className={({ isActive }) =>
                            isActive
                                ? `${styles.navLinkRes} ${styles.selected}`
                                : styles.navLinkRes
                        }
                    >
                        Characters
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to='/episodes'
                        className={({ isActive }) =>
                            isActive
                                ? `${styles.navLinkRes} ${styles.selected}`
                                : styles.navLinkRes
                        }
                    >
                        Episodes
                    </NavLink>
                </li>
            </ul>
        </motion.nav>
    )
}
