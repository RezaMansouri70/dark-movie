import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./Footer.module.scss";
import pic from "../Header/logo2.png";

export default function Footer() {
  return (
    <div className={classes.footer}>
      <Container fluid>
        <Row>
          <Col xs={12} lg={3} className={classes.logo}>
            <img src={pic} />
          </Col>
          <Col xs={12} lg={3} className={classes.li}>
            <h4>THE BASICS</h4>
            <ul>
              <li>About TMDB</li>

              <li>Contact Us</li>

              <li>API</li>
            </ul>
          </Col>
          <Col xs={12} lg={3} className={classes.li}>
            <h4>GET INVOLVED</h4>
            <ul>
              <li>Contribution Bible</li>

              <li>3rd Party Applications</li>

              <li>Add New Movie</li>
            </ul>
          </Col>
          <Col xs={12} lg={3} className={classes.li}>
            <h4>COMMUNITY</h4>
            <ul>
              <li>Guidelines</li>

              <li>Discussions</li>

              <li>Leaderboard</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
