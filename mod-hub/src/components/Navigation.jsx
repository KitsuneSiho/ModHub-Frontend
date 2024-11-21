import { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation() {
  const navStyle = {
    height: '40px',
    minHeight: '40px'
  };

  const navLinkStyle = {
    height: '40px',
    lineHeight: '40px',
    padding: '0 15px'
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-top">
      <Container>
        <Navbar.Brand as={Link} to="/">모드 허브!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">모드허브 소개</Nav.Link>
            <Nav.Link as={Link} to="/about">게임 목록</Nav.Link>
            <Nav.Link as={Link} to="/users">개발진</Nav.Link>
            <NavDropdown title="회원가입/로그인" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/action/3.1">로그인</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/action/3.2">카카오로 로그인</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/action/3.3">회원가입</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/action/3.4">로그인 문제 해결</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;