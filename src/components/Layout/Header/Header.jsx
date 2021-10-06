import React, { useState } from "react";
import {
  Nav,
  Navbar,
  FormControl,
  Button,
  Form,
  NavDropdown,
  DropdownButton,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import classes from "./Header.module.scss";

export default function Header() {
  return (
    <>
      <Navbar fixed="top" bg="sia" variant="dark" className={classes.nav}>
        <Navbar.Brand
          variant="dark"
          href="/"
          className={classes.navLogo}
        ></Navbar.Brand>

        <Nav className="mr-auto">
          <NavDropdown title="Movies" id="basic-nav-dropdown">
            <NavDropdown.Item href="/pop">Popular</NavDropdown.Item>
            <NavDropdown.Item href="/top">Top Rated</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/tv">TV Shows</Nav.Link>
          <Nav.Link>Actors</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="dark">search</Button>
        </Form>
      </Navbar>
    </>
  );
}
