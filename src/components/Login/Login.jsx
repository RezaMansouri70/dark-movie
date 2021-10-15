import React, { useContext } from "react";
import { Dropdown } from "react-bootstrap";
import { FaRegUserCircle } from "react-icons/fa";
import { UserContext } from "../../context/UserContext";
import classes from "./Login.module.scss";

export default function Login() {
  const { logout, login, user } = useContext(UserContext);

  console.log(user);
  return (
    <div>
      {user ? (
        <img
          onClick={logout}
          src={`https://image.tmdb.org/t/p/w45${user.avatar.tmdb.avatar_path}`}
          className={classes.avatar}
        />
      ) : (
        <FaRegUserCircle onClick={login} className={classes.user} />
      )}
    </div>
  );
}
