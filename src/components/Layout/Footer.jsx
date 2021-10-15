import React, { useContext } from "react";
import classes from "./Layout.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import pic from "../../images/logo2.png";
import { UserContext } from "../../context/UserContext";

export default function Footer() {
  const { user } = useContext(UserContext);
  return (
    <div className={classes.footer}>
      <Container fluid>
        <Row>
          <Col xs={6} md={3} className={classes.logo}>
            <img src={pic} />
          </Col>
          <Col xs={6} md={3} className={classes.li}>
            <h4>THE BASICS</h4>
            <ul>
              <li>About TMDB</li>

              <li>Contact Us</li>

              <li>API</li>
            </ul>
          </Col>
          <Col xs={6} md={3} className={classes.li}>
            <h4>GET INVOLVED</h4>
            <ul>
              <li>Contribution Bible</li>

              <li>3rd Party Applications</li>

              <li>Add New Movie</li>
            </ul>
          </Col>
          <Col xs={6} md={3} className={classes.li}>
            {user ? (
              <div className={classes.username}>
                <h4>{`Hi ${user.username}`}</h4>
              </div>
            ) : (
              " "
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
