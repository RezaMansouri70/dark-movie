import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./Footer.module.scss";
import pic from "../Header/logo2.png";
import { Link } from "react-router-dom";

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
              <Link>
                <li>About TMDB</li>
              </Link>
              <Link>
                <li>Contact Us</li>
              </Link>
              <Link>
                <li>API</li>
              </Link>
            </ul>
          </Col>
          <Col xs={12} lg={3} className={classes.li}>
            <h4>GET INVOLVED</h4>
            <ul>
              <Link>
                <li>Contribution Bible</li>
              </Link>
              <Link>
                <li>3rd Party Applications</li>
              </Link>
              <Link>
                <li>Add New Movie</li>
              </Link>
            </ul>
          </Col>
          <Col xs={12} lg={3} className={classes.li}>
            <h4>COMMUNITY</h4>
            <ul>
              <Link>
                <li>Guidelines</li>
              </Link>
              <Link>
                <li>Discussions</li>
              </Link>
              <Link>
                <li>Leaderboard</li>
              </Link>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
