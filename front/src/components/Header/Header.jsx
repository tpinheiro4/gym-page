import { useState, useEffect } from 'react';
import { LogOut, Search, Menu, X } from 'lucide-react';
import Logo from './Logo';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;

            if (scrollTop > 500) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

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
        <header className={scrolled ? 'scrolled' : ''}>
            <div className="container">
                <Logo fill={scrolled ? 'black' : 'white'} />
                
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
                    <Search width="18" height={18} color={scrolled ? 'black' : 'white'} />
                    <LogOut width="18" height={18} color={scrolled ? 'black' : 'white'} />
                    <Menu className="menu-mobile-btn" color='white' onClick={openMobileMenu} />
                </div>
            </div>
        </header>
    )
}