import logo from '../../assets/Logo.png'
import { LogOut, Search } from 'lucide-react'

export default function Header() {
    return (
        <div>
            <div>
                <img src={logo} alt="Logo" />
                <a href="">Sobre</a>
                <a href="">Exercícios</a>
                <a href="">Meus treinos</a>
            </div>

            <div>
                <Search color="#fff"/>
                <LogOut color='#fff'/>
            </div>
        </div>
    )
}