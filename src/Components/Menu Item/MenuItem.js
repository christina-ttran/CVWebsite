import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import "./MenuItem.css";
import { useNavigate } from "react-router-dom";

function MenuItem() {
  let navigate = useNavigate();

  return (
    <Row>
      <Col>
        <div className="menu_item">
          <Col style={{ textAlign: "center" }}>
            <Nav.Item>
              <Nav.Link onClick={() => navigate('/Projects')}>
                PROJECTS
              </Nav.Link>
            </Nav.Item>
          </Col>

          <Col style={{ textAlign: "center" }}>
            <Nav.Item>
              <Nav.Link onClick={() => navigate('/Resume')}>
                RESUME
              </Nav.Link>
            </Nav.Item>
          </Col>

          <Col style={{ textAlign: "center" }}>
            <Nav.Item>
              <Nav.Link onClick={() => navigate('/WritingPortfolio')}>
                WRITING PORTFOLIO
              </Nav.Link>
            </Nav.Item>
          </Col>

          <Col style={{ textAlign: "center" }}>
            <Nav.Item>
              <Nav.Link onClick={() => navigate('/')}>
                ABOUT ME
                </Nav.Link>
            </Nav.Item>
          </Col>
        </div>
      </Col>
    </Row>
  );
}

export default MenuItem;
