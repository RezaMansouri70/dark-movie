import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/Layout/Layout";
import Pages from "./components/Pages";
import "./index.scss";

ReactDOM.render(
  <BrowserRouter>
    <Layout>
      <Pages />
    </Layout>
  </BrowserRouter>,
  document.getElementById("root")
);
