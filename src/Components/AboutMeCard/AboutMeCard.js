import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import pic from "/Users/tinatran/Desktop/Website/src/Images/1eabdb0f-dde4-45c3-a43c-fd36e4b96962_original.JPG";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import AboutMeText from "../AboutMeText/AboutMeText";
import "./AboutMeCard.css";

function AboutMeCard() {
  return (
    <Row>
      <Col className="AboutMe_Card">
        <Card style={{ width: "33rem"}}>
          <Card.Img variant="top" src={pic} />
          <Card.Body>
            <Row>
              <Col style={{ textAlign: "center" }}>
                <a
                  href="https://www.instagram.com/christina.ttran/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="Button_Color" size="Button_Size">
                    <h3>
                      <BsInstagram />
                    </h3>
                  </Button>
                </a>
              </Col>

              <Col style={{ textAlign: "center" }}>
                <a
                  href="https://www.linkedin.com/in/christina-tran-aba1a71b4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="Button_Color" size="Button_Size">
                    <h3>
                      <BsLinkedin />
                    </h3>
                  </Button>
                </a>
              </Col>

              <Col style={{ textAlign: "center" }}>
                <a
                  href="https://github.com/christina-ttran"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="Button_Color" size="Button_Size">
                    <h3>
                      <BsGithub />
                    </h3>
                  </Button>
                </a>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
      <AboutMeText/>
    </Row>
  );
}

export default AboutMeCard;