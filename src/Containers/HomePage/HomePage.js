import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import pic from "/Users/tinatran/Desktop/Website/src/Images/_IGP9372.jpeg";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import HomePageCSS from "./HomePage.css";

function HomePage() {
  return (
    <Container>
      <Nav onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}></Nav>

      <Row>
        <Col>
          <Nav.Item className="header_name">
            <Nav.Link>Christina Tran</Nav.Link>
          </Nav.Item>
        </Col>
      </Row>

      <Row>
        <Col style={{ textAlign: "center" }}>
          <Nav.Item>
            <Nav.Link>Projects</Nav.Link>
          </Nav.Item>
        </Col>

        <Col style={{ textAlign: "center" }}>
          <Nav.Item>
            <Nav.Link>Resume</Nav.Link>
          </Nav.Item>
        </Col>

        <Col style={{ textAlign: "center" }}>
          <Nav.Item>
            <Nav.Link>Writing Portfolio</Nav.Link>
          </Nav.Item>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card style={{ width: "34rem" }}>
            <Card.Img variant="top" src={pic} />
            <Card.Body>
              <Row>
                <Col style={{ textAlign: "center" }}>
                  <a
                    href="https://www.instagram.com/christina.ttran/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button>
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
                    <Button>
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
                    <Button>
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
        <Col>
          Hello, I’m Christina Tran! I’m from Ho Chi Minh City, Vietnam, and I
          am currently a junior at Wake Forest University studying Computer
          Science. I attended Emma Willard School for high school. My interests
          include computers, economics, and literature. During my free time, I
          enjoy playing tennis, traveling, writing, and eating.
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
