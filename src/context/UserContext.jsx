import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext(null);

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  function logout() {
    localStorage.clear();
    setUser(null);
  }
  async function getUserDetails(id) {
    localStorage.setItem("session_id", id);
    const result = await (
      await fetch(
        `https://api.themoviedb.org/3/account?api_key=6e26d2fd9f12428430a110d2ab0ec995&session_id=${id}`
      )
    ).json();
    localStorage.setItem("user", JSON.stringify(result));
    setUser(result);
    window.history.pushState({}, "", "/");
  }
  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    if (params?.approved) {
      fetch(
        `https://api.themoviedb.org/3/authentication/session/new?api_key=6e26d2fd9f12428430a110d2ab0ec995`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            request_token: params.request_token,
          }),
        }
      )
        .then((r) => r.json())
        .then((data) => {
          getUserDetails(data.session_id);
        });
    }
  }, []);

  useEffect(() => {
    const sessionId = localStorage.getItem("session_id");
    if (sessionId) {
      getUserDetails(sessionId);
    }
  }, []);

  async function login() {
    const { request_token } = await (
      await fetch(
        `https://api.themoviedb.org/3/authentication/token/new?api_key=6e26d2fd9f12428430a110d2ab0ec995`
      )
    ).json();

    window.location = `https://themoviedb.org/authenticate/${request_token}?redirect_to=https://www.darkmoviedb.ir`;
  }

  return (
    <UserContext.Provider value={{ logout, login, user }}>
      {children}
    </UserContext.Provider>
  );
}
