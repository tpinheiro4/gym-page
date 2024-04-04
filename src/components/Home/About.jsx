import { ArrowRightIcon } from 'lucide-react';
import image from '../../assets/about.png'

export default function About() {
    return (
        <section className='about'>
            <div className='text-content half-container'>
                <h2>Sobre</h2>
                <p>Potter ipsum wand elf parchment wingardium. Headmaster dervish restricted toad-like headmaster find granger clean hat biting. Butter easy cloak hall treacle scales ground. Section bathroom cadogan trelawney silver kidney black. Hungarian back doe scabbers frisbees shunpike potter chess. Devil’s witch thestral voldemort drills hand. You mcgonagall floor them daily them honeydukes.</p>
                <p>Saiba Mais <ArrowRightIcon/></p>
            </div>

            <div className='half-container image-about' />
        </section>
    )
}