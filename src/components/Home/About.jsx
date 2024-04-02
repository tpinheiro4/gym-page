import { ArrowRightIcon } from 'lucide-react';
import image from '../../assets/about.png'

import { Col, Row } from "react-bootstrap";

export default function About() {
    return (
        <div className='container-2'>
            <Row className='about-section'>
                <Col lg={8} className='text-content'>
                    <h2>Sobre</h2>
                    <p>Potter ipsum wand elf parchment wingardium. Headmaster dervish restricted toad-like headmaster find granger clean hat biting. Butter easy cloak hall treacle scales ground. Section bathroom cadogan trelawney silver kidney black. Hungarian back doe scabbers frisbees shunpike potter chess. Devil’s witch thestral voldemort drills hand. You mcgonagall floor them daily them honeydukes.</p>
                    <p>Saiba Mais <ArrowRightIcon/></p>
                </Col>
                <Col md={4}>
                    <img src={image} alt="woman workout"/>
                </Col>
            </Row>
        </div>
    )
}