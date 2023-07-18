import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import "./MenuItem.css";

function MenuItem() {
  return (
    <Row>
      <Col>
        <div className="menu_item">
          <Col style={{ textAlign: "center" }}>
            <Nav.Item>
              <Nav.Link>PROJECTS</Nav.Link>
            </Nav.Item>
          </Col>

          <Col style={{ textAlign: "center" }}>
            <Nav.Item>
              <Nav.Link>RESUME</Nav.Link>
            </Nav.Item>
          </Col>

          <Col style={{ textAlign: "center" }}>
            <Nav.Item>
              <Nav.Link>WRITING PORTFOLIO</Nav.Link>
            </Nav.Item>
          </Col>

          <Col style={{ textAlign: "center" }}>
            <Nav.Item>
              <Nav.Link>ABOUT ME</Nav.Link>
            </Nav.Item>
          </Col>
        </div>
      </Col>
    </Row>
  );
}

export default MenuItem;
