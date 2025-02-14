import { Col, Container, Row } from "react-bootstrap"
import "./Services.css"
import imgCourse1 from "../../assets/img/hbo.jpeg"
import imgCourse2 from "../../assets/img/netflix.jpeg"
import imgCourse3 from "../../assets/img/prime.jpeg"
import CardService from "./CardService"

export default function Services() {

    const sevicesArray = [
        {
            title: "Wordpress Course",
            subtitle: "Learn all about this great CMS",
            image: imgCourse1,
            footer: "Go to the course",
            link: "#!"
        },
        {
            title: "Prestashop Course",
            subtitle: "Learn all about this great CMS",
            image: imgCourse2,
            footer: "Go to the course",
            link: "#!"
        },
        {
            title: "React Course",
            subtitle: "Learn all about this great CMS",
            image: imgCourse3,
            footer: "Go to the course",
            link: "#!"
        },
    ]


    return (
        <div className="services p-4 mt-5">
            <Container fluid>
                <Row className="justify-content-center">
                    <Col xs={12} md={8}>
                        <h2 className="text-center">Services</h2>
                        <h4 className="pb-3 text-center">
                            Check Some of my services that I did
                        </h4>
                        <Row xs={12} md={3} className="g-4 mt-4">
                            {sevicesArray.map((service, index) => (
                                <CardService service={service}  key={index} />
                            ))}                           
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
