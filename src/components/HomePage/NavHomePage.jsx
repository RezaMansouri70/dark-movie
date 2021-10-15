import React, { useState } from "react";
import { GiClapperboard } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import classes from "./HomePage.module.scss";
import { Link } from "react-router-dom";
import Login from "../Login/Login";

export default function NavHomePage() {
  const [state, setState] = useState(false);
  return (
    <>
      <div className={classes.nav}>
        {state ? (
          <GiClapperboard
            className={classes.clap1}
            onClick={() => {
              setState(!state);
            }}
          />
        ) : (
          <GiClapperboard
            className={classes.clap}
            onClick={() => {
              setState(!state);
            }}
          />
        )}

        <form className={classes.form}>
          <input type="text" />
          <button type="submit">
            <FaSearch className={classes.search} />
          </button>
        </form>
        <Login className={classes.user} />
      </div>

      {state && (
        <div className={classes.list}>
          <ul>
            <Link to="/movies">
              <li>Movies</li>
            </Link>
            <Link to="/tv-shows">
              <li>TV Shows</li>
            </Link>
            {/* <Link to="/actors">
              <li>Actors</li>
            </Link> */}
          </ul>
        </div>
      )}
    </>
  );
}
