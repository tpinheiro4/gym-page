import { Row, Col} from 'react-bootstrap';

export default function Banner() {
    return (
        <section className="banner">
            <div className="container">
                <Row>
                    <Col className="content" sm={6}>
                        <h1>Potter ipsum wand elf parchment wingardium.</h1>
                    </Col>
                </Row>
            </div>
        </section>
    )
}