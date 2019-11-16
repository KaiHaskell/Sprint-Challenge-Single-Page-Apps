import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import { Link } from "react-router-dom";
import styles from "styled-components";

const CardContainer = styles.div`
display:flex;
flex-wrap: wrap;
justify-content: space-evenly;
`;

const PsuedoNav = styles.div`
display: flex;
justify-content: space-evenly;
`;

const CharacterList = props => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        const characters = response.data.results.filter(character =>
          character.name.toLowerCase().includes(query.toLowerCase())
        );
        console.log(response.data);
        setData(characters);
      })
      .catch(error => {
        console.log("uh oh, you have an", error);
      });
  }, [query]);

  const handleInputChange = event => {
    setQuery(event.target.value);
  };
  return (
    <section className="wrapper">
      <PsuedoNav>
        <form className="search">
          <input
            type="text"
            onChange={handleInputChange}
            value={query}
            name="name"
            tabIndex="0"
            className="prompt search-name"
            placeholder="search by name"
            autoComplete="off"
          />
        </form>
        <Link to="/">
          <button type="button" className="btn btn-info">
            Home
          </button>
        </Link>
      </PsuedoNav>
      <CardContainer>
        <CharacterCard character={data} />
      </CardContainer>
    </section>
  );
};

export default CharacterList;
