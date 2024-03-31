import logo from '../../assets/Logo.png'
import { LogOut, Search } from 'lucide-react'

export default function Header() {
    return (
        <header>
            <div className="container">
                <img className="logo" src={logo} alt="Logo" />
                
                <nav>
                    <ul className="menu">
                        <li className="menu__item"><a href="">Sobre</a></li>
                        <li className="menu__item"><a href="">Exercícios</a></li>
                        <li className="menu__item"><a href="">Meus treinos</a></li>
                    </ul>
                </nav>
    
                <div className="right">
                    <Search width="18" height={18} color="#fff"/>
                    <LogOut width="18" height={18} color='#fff'/>
                </div>
            </div>
        </header>
    )
}