import React, { useState } from "react";
import { Container, Row, Col, Navbar, Dropdown, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../../assets/images/logo.png";
import SearchBar from "./search";
import SearchBar2 from "./searchMobile";

const Logo = () => (
  <Navbar.Brand href="/">
    <img className="img-fluid logo" src={logo} alt="Streamit Logo" />
  </Navbar.Brand>
);

const MenuItems = ({ handleCollapse }) => (
  <Nav as="ul" id="top-menu" className="ml-auto">
    <li className="menu-item">
      <Link to="/" onClick={handleCollapse}>Home</Link>
    </li>
    <li className="menu-item">
      <Link to="/movie-category" onClick={handleCollapse}>Movies</Link>
    </li>
    <li className="menu-item">
      <Link to="/show-category" onClick={handleCollapse}>Tv Shows</Link>
    </li>
    <li className="menu-item">
      <Link to="/contact" onClick={handleCollapse}>Contact</Link>
    </li>
  </Nav>
);

const HeaderStyle1 = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);
  const handleCollapse = () => setExpanded(false);

  return (
    <header id="main-header">
      <div className="main-header">
        <Container fluid>
          <Row>
            <Col sm="12">
              <Navbar expand="lg" className="p-0" expanded={expanded}>
                <Navbar.Toggle className="c-toggler" onClick={handleToggle} aria-expanded={expanded}>
                  <div className="navbar-toggler-icon">
                    <span className="navbar-menu-icon navbar-menu-icon--top"></span>
                    <span className="navbar-menu-icon navbar-menu-icon--middle"></span>
                    <span className="navbar-menu-icon navbar-menu-icon--bottom"></span>
                  </div>
                </Navbar.Toggle>
                <Logo />
                <SearchBar2 />
                <Navbar.Collapse>
                  <div className="menu-main-menu-container">
                    <MenuItems handleCollapse={handleCollapse} />
                  </div>
                </Navbar.Collapse>
                <div className="navbar-right menu-right">
                  <ul className="d-flex align-items-center list-inline m-0">
                    <Dropdown as="li" className="nav-item nav-icon">
                      <SearchBar />
                    </Dropdown>
                  </ul>
                </div>
              </Navbar>
            </Col>
          </Row>
        </Container>
      </div>
    </header>
  );
};

export default HeaderStyle1;
