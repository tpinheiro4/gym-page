import { useState } from 'react'
import logo from '../../assets/Logo.png'
import { LogOut, Search, Menu, X } from 'lucide-react'

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const openMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    }

    const navItems = [
        {
            name: 'Sobre',
            link: '/',
        },
        {
            name: 'Exercícios',
            link: '/',
        },
        {
            name: 'Meus treinos',
            link: '/',
        },
    ]

    return (
        <header>
            <div className="container">
                <img className="logo" src={logo} alt="Logo" />
                
                <nav className="desktop-menu">
                    <ul className="desktop-menu__menu">
                        {navItems.map((item, index) => (
                            <li key={index} className="desktop-menu__menu--item"><a href={item.link}>{item.name}</a></li>
                        ))}
                    </ul>
                </nav>

                {isMobileMenuOpen && (
                    <nav className="mobile-menu">
                        <X className='close' color='white' onClick={closeMobileMenu}/>    

                        <ul className="mobile-menu__menu">
                            {navItems.map((item, index) => (
                                <li key={index} className="mobile-menu__menu--item"><a href={item.link}>{item.name}</a></li>
                            ))}
                        </ul>
                    </nav>   
                )}     
    
                <div className="right">
                    <Search width="18" height={18} color="#fff"/>
                    <LogOut width="18" height={18} color='#fff'/>
                    <Menu className="menu-mobile-btn" color='white' onClick={openMobileMenu} />
                </div>
            </div>
        </header>
    )
}