import React from "react";
import { Nav, Navbar, FormControl, Button, Form } from "react-bootstrap";
import classes from "./Header.module.scss";

export default function Header() {
  return (
    <>
      <Navbar fixed="top" bg="sia" variant="dark" className={classes.nav}>
        <Navbar.Brand
          variant="dark"
          href="#home"
          className={classes.navLogo}
        ></Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="dark">search</Button>
        </Form>
      </Navbar>
    </>
  );
}
