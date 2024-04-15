import logo from '../../assets/Logo.png'
import { Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
    return (
        <footer className='container'>
            <div className='footer'>
                <img src={logo} alt="Logo da página" />

                <p> &copy; Todos os direitos reservados</p>

                <div className='social-medias'>
                    <Instagram/>
                    <Linkedin/>
                </div>
            </div>
        </footer>
    )
}