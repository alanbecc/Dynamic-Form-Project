import { Button, Col, Container, Row } from "react-bootstrap"
import "./Introduction.css"

export default function Introduction() {
    return (
        <div className="introduction p-3 p-lg-5 mt-5">
            <Container fluid>
                <Row className="justify-content-center">
                    <Col xs={12} md={8}>
                        <h1 className="pl-2 text-center">
                            Welcome to  dynamic form{" "}
                            <span className="pt-2 pb-4">
                                that you will do everything that you want
                            </span>
                        </h1>
                        <h4 className="text-center pt-3">
                            Hi, I`m Juan Camilo, I am 40 Year old and I like make programs
                            and develop whith jsx.
                        </h4>
                        <div className="d-flex container-actions mt-5">
                            <div className="container-buttons">
                                <Button className="p-3" onClick={()=> console.log("click Button")}>Get in touch</Button>
                                <Button className="p-3">Get in tuch</Button>
                            </div>
                            <div className="btn-start-create">
                            <a href="#dynamic-form"> Start create ➡️</a>
                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}
