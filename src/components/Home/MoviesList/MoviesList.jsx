import React from "react";
import { Container, Tab, Row, Col, Nav } from "react-bootstrap";
import PopMovies from "../PopMovies/PopMovies";
import TopRatedMovies from "../TopRatedMovies/TopRatedMovies";
import classes from "./MoviesList.module.scss";

export default function MoviesList() {
  return (
    <div className={classes.container}>
      <Container fluid>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={2} className={classes.nav}>
              <Nav variant="dark" className="flex-column">
                <Nav.Item>
                  <Nav.Link className={classes.navItem} eventKey="first">
                    Popular Movies
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className={classes.navItem} eventKey="second">
                    Top Rated Movies
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={10}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <PopMovies />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <TopRatedMovies />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </div>
  );
}
