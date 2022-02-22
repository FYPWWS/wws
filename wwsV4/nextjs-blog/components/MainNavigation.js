import Link from 'next/link'
import { useState } from "react";
import styles from "../styles/Layout.module.css";
import styles2 from '../styles/Home.module.css'
export default function MainNavigation(props){

    const [isOpen,setIsOpen] = useState(false);
    const openMenu= ()=> setIsOpen(!isOpen);
    return <> 
            <header className={styles2.header}>
                <nav className={styles.navbar}>
                    <Link href='/'>
                     <a className={styles.navlogo}>[BrandLogo]</a>
                    </Link>
                <ul className={isOpen === false ? 
                        styles.navmenu : styles.navmenu +' '+ styles.active}>
                    <li className={styles.navitem}>
                       <Link href='/'>
                         <a className={isOpen === false ? 
                                    styles.navlink : styles.navlink+' '+styles.active}
                                    onClick={openMenu}>Intro</a>
                        </Link>
                    </li>
                    <li className={styles.navitem}>
                        <Link href='/fireWatcher'>
                          <a className={isOpen === false ? 
                                    styles.navlink : styles.navlink+' '+styles.active}
                                    onClick={openMenu}>Fire Watcher</a>
                        </Link>
                    </li>
                    <li className={styles.navitem}>
                        <Link href='/forecast'>
                         <a className={isOpen === false ? 
                                    styles.navlink : styles.navlink+' '+styles.active}
                                    onClick={openMenu}>Forecast</a>
                        </Link>
                    </li>
                </ul>
                <button className={isOpen === false ? 
                                    styles.hamburger : styles.hamburger+' '+styles.active}
                                    onClick={openMenu}
                                    >
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </button>
                </nav>
            </header>
     </>
}