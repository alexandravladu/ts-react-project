import Carousel from "react-multi-carousel";
import { Container, Col, Row } from "react-bootstrap"
import "react-multi-carousel/lib/styles.css";
// import { Container } from "../footer/FooterStyles";
import ImageDummy from "../../images/dummyimage.jpg"
import './FactSection.css'

const FactSection = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
    
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Key Facts
                            </h2>
                            <p>Some key facts to be aware of:</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={ImageDummy} alt="image" />
                                    <h5> large business jets contribute 10 percent of U.S. transportation emissions </h5>
                                </div>
                                <div className="item">
                                    <img src={ImageDummy} alt="image" />
                                    <h5>Rail and waterborne transport have the lowest emissions per kilometre and unit transported, while aviation and road transport emit significantly more</h5>
                                </div>
                                <div className="item">
                                    <img src={ImageDummy} alt="image" />
                                    <h5>Many trains are equipped with advanced emission control systems to reduce the amount of pollution that they produce. These systems can include catalytic converters, particulate filters, and other technologies that help to reduce the emission of harmful gases.</h5>
                                </div>
                                <div className="item">
                                    <img src={ImageDummy} alt="image" />
                                    <h5>Electric trains are becoming more common as countries transition to renewable energy sources, such as wind and solar power. This can help to reduce the overall pollution associated with train travel.</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}

export default FactSection