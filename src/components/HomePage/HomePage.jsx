import React from "react";
import classes from "./HomePage.module.scss";
import { GiClapperboard } from "react-icons/gi";
import NavHomePage from "./NavHomePage";
import pic from "../../images/deadpool.png";

export default function HomePage() {
  return (
    <div className={classes.main}>
      <div className={classes.box}>
        <NavHomePage />

        <h1>DMDB</h1>
        <img src={pic} />
      </div>
    </div>
  );
}
