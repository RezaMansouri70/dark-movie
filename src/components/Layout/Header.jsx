import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import {
  Nav,
  Navbar,
  FormControl,
  Button,
  Form,
  NavDropdown,
} from "react-bootstrap";

import classes from "./Layout.module.scss";
import Login from "../Login/Login";

export default function Header() {
  return (
    <>
      <Navbar variant="dark" className={classes.nav}>
        <Navbar.Brand
          variant="dark"
          href="/"
          className={classes.navLogo}
        ></Navbar.Brand>

        <Nav className="mr-auto">
          <Nav.Link href="/movies">Movies</Nav.Link>
          <Nav.Link href="/tv-shows">TV Shows</Nav.Link>
          {/* <Nav.Link href="/actors">Actors</Nav.Link> */}
        </Nav>
        <Login className={classes.user} />
        <Form inline>
          <form className={classes.form}>
            <input type="text" />
            <button type="submit">
              <FaSearch className={classes.search} />
            </button>
          </form>
        </Form>
      </Navbar>
    </>
  );
}
