import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage.js";
import CharacterList from "./components/CharacterList.js";

export default function App() {
  return (
    <main>
      <Header />
      <WelcomePage />
      <Route exact path="/" />
      <Route exact path="/characters" component={CharacterList} />
    </main>
  );
}
