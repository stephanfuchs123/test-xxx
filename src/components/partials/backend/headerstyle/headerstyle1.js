import React from "react";
import { Container, Row, Col, Navbar, Dropdown, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../../assets/images/logo.png";

import SearchBar from "./search";
import SearchBar2 from "./searchMobile";

const HeaderStyle1 = () => {
  return (
    <>
      <header id="main-header">
        <div className="main-header">
          <Container fluid>
            <Row>
              <Col sm="12">
                <Navbar expand="lg" className="p-0">
                  <Navbar.Toggle className="c-toggler">
                    <div className="navbar-toggler-icon">
                      <span className="navbar-menu-icon navbar-menu-icon--top"></span>
                      <span className="navbar-menu-icon navbar-menu-icon--middle"></span>
                      <span className="navbar-menu-icon navbar-menu-icon--bottom"></span>
                    </div>
                  </Navbar.Toggle>
                  <Navbar.Brand className="navbar-brand" href="/">
                    <img className="img-fluid logo" src={logo} alt="streamit" />
                  </Navbar.Brand>
                  <SearchBar2 />

                  <Navbar.Collapse className="">
                    <div className="menu-main-menu-container">
                      <Nav as="ul" id="top-menu" className="ml-auto">
                        <li className="menu-item">
                          <Link to="/">Home</Link>
                        </li>
                        <li className="menu-item">
                          <Link to="/movie-category">Movies</Link>
                        </li>
                        <li className="menu-item">
                          <Link to="/show-category">Tv Shows</Link>
                        </li>

                        <li className="menu-item ">
                          <Link to="/contact">Contact</Link>
                        </li>
                      </Nav>
                    </div>
                  </Navbar.Collapse>
                  <div className="navbar-right menu-right">
                    <ul className="d-flex align-items-center list-inline m-0">
                      {/* Search input */}
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
    </>
  );
};

export default HeaderStyle1;
