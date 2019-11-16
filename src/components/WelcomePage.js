import React from "react";
import { Link } from "react-router-dom";
import styles from "styled-components";

const PsuedoNav = styles.div`
display: flex;
justify-content: space-evenly;
`;

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <PsuedoNav>
          <h1>Welcome to the ultimate fan site!</h1>
          <Link to="/characters">
            <button type="button" className="btn btn-info">
              Characters
            </button>
          </Link>
        </PsuedoNav>

        <img
          className="main-img"
          src="https://cdn2us.denofgeek.com/sites/denofgeekus/files/styles/main_wide/public/2017/10/rick-and-morty-season-4.png?itok=ttETnHjk"
          alt="rick"
        />
      </header>
    </section>
  );
}
