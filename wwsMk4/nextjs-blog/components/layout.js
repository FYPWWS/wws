import styles from '../styles/Layout.module.css'
import MainNavigation from './MainNavigation'

export default function Layout({children}){
    return(
        <div>
            <MainNavigation/>
            {children}
        </div>
    )
}