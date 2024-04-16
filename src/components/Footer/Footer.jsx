import logo from '../../assets/Logo.png'
import { Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
    return (
        <footer className=''>
            <div className='footer container'>
                <img src={logo} alt="Logo da página" />

                <p> &copy; Todos os direitos reservados</p>

                <div className='social-medias'>
                    <Instagram className='media-logo'/>
                    <Linkedin className='media-logo'/>
                </div>
            </div>
        </footer>
    )
}