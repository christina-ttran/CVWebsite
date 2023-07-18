import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./AboutMeText.css";

function AboutMeText() {
  return (
    <Col>
      <Row className="AboutMe_Text">Hello, I’m Christina Tran!</Row>
      <Row className="AboutMe_Text">
        I’m from Ho Chi Minh City, Vietnam, and I am currently a junior at Wake
        Forest University studying Computer Science. I attended Emma Willard
        School for high school.
      </Row>
      <Row className="AboutMe_Text">
        My interests include computers, economics, and literature. During my
        free time, I enjoy playing tennis, traveling, writing, and eating.
      </Row>
    </Col>
  );
}

export default AboutMeText;
