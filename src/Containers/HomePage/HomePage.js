import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Header from "../../Components/Header/Header.js";
import MenuItem from "../../Components/MenuItem/MenuItem";
import AboutMeCard from "../../Components/AboutMeCard/AboutMeCard";
import "./HomePage.css";

function HomePage() {
  return (
    <Container className="Home_Page">
      <Nav onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}></Nav>
      <Header/>
      <MenuItem/>
      <AboutMeCard/>
    </Container>
  );
}

export default HomePage;
