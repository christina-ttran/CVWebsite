import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Header from "/Users/tinatran/Desktop/Website/src/Components/Header/Header.js";
import MenuItem from "../../Components/Menu Item/MenuItem";
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
