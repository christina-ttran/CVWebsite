import { Container, Row, Col } from "react-bootstrap";
import HeaderName from "/Users/tinatran/Desktop/Website/src/Components/Header/Header.js";
import MenuItem from "../../Components/Menu Item/MenuItem";
import pdf from "./ThuTran-Christina.pdf";
import "./Resume.css";

function Resume() {
  return (
    <Container className="Home_Page">
      <HeaderName />
      <MenuItem />
      <Row className="Resume_pdf">
        <Col>
        
        <object
          data={pdf}
          type="application/pdf"
          width="100%"
          height="100%"
        >
          <p>
          </p>
        </object>
        </Col>
      </Row>
    </Container>
  );
}

export default Resume;
