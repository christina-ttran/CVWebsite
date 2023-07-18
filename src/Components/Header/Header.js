import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import "./Header.css";
import { Col } from "react-bootstrap";

export default function Header() {
  return (
    <Row>
      <Col>
        <Nav.Item className="header_name">
          <Nav.Link>Christina Tran</Nav.Link>
        </Nav.Item>
      </Col>
    </Row>
  );
}
