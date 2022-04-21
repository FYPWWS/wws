import Link from 'next/link'
import { useState } from "react";
import classes from "../styles/MainNavigation.module.css";
import Image from 'next/image'


export default function MainNavigation(props){
    
    const [isOpen,setIsOpen] = useState(false);
    const openMenu= ()=> setIsOpen(!isOpen);
    return <> 
            <header className={classes.header}>
                <nav className={classes.navbar}>
                    <Link href='/'>
                     <div className={classes.navlogo}>
                        <Image src="/Logo-WWS.png" width={250} height={150}/>
                     </div> 
                    </Link>
                <ul className={isOpen === false ? 
                        classes.navmenu : classes.navmenu +' '+ classes.active}>
                    <li className={classes.navitem}>
                       <Link href='/'>
                         <a className={isOpen === false ? 
                                    classes.navlink : classes.navlink+' '+classes.active}
                                    onClick={openMenu}>Intro</a>
                        </Link>
                    </li>
                    <li className={classes.navitem}>
                        <Link href='/fireWatcher'>
                          <a className={isOpen === false ? 
                                    classes.navlink : classes.navlink+' '+classes.active}
                                    onClick={openMenu}>Fire Watcher</a>
                        </Link>
                    </li>
                    <li className={classes.navitem}>
                        <Link href='/forecast'>
                         <a className={isOpen === false ? 
                                    classes.navlink : classes.navlink+' '+classes.active}
                                    onClick={openMenu}>Forecast</a>
                        </Link>
                    </li>
                </ul>
                <button className={isOpen === false ? 
                                    classes.hamburger : classes.hamburger+' '+classes.active}
                                    onClick={openMenu}
                                    >
                    <span className={classes.bar}></span>
                    <span className={classes.bar}></span>
                    <span className={classes.bar}></span>
                </button>
                </nav>
            </header>
     </>
}