import styles from './styles.module.css'
import logo from '../../assets/Logo.png'
import { LogOut, Search } from 'lucide-react'

export default function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.nav}>
                <img className={styles.logo} src={logo} alt="Logo" />
                <a href="">Sobre</a>
                <a href="">Exercícios</a>
                <a href="">Meus treinos</a>
            </div>
            <div className={styles.icons}>
                <Search color="#fff"/>
                <LogOut color='#fff'/>
            </div>
        </div>
    )
}