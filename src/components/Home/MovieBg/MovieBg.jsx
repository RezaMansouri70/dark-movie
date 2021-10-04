import React from "react";
import pic1 from "./bg1.jpg";
import pic2 from "./bg2.jpg";
import pic4 from "./bg4.jpg";

import classes from "./MovieBg.module.scss";

export default function MovieBg() {
  let images = [pic1, pic2, pic4];
  let image = images[Math.floor(Math.random() * images.length)];
  return (
    <div className={classes.bg} style={{ backgroundImage: `url(${image})` }}>
      <h1>
        <span>Dark MovieDB</span>
      </h1>
      <p>Millions of movies,</p>
      <p> TV shows and people to discover.</p>
      <p> Explore now.</p>
    </div>
  );
}
