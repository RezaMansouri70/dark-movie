import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/Layout/Layout";
import "./index.scss";
import Routes from "./Routes";

ReactDOM.render(
  <BrowserRouter>
    <Layout>
      <Routes />
    </Layout>
  </BrowserRouter>,
  document.getElementById("root")
);
