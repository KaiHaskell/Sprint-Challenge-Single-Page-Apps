import React from "react";
import styles from "styled-components";

const Card = styles.div`
width: 10rem;
margin: 2rem;
background-color: lightgrey;
border-radius: 1rem;
`;

const CharacterCard = props => {
  const character = props.character;

  return (
    <>
      {character.map(character => {
        return (
          <Card key={character.id}>
            <img src={character.image} className="card-img-top" alt="profile" />
            <div className="card-body">
              <h5 className="card-title">{character.name}</h5>
              <p className="card-text">{character.species} </p>
              <p className="card-text"> {character.status}</p>
            </div>
          </Card>
        );
      })}
      ;
    </>
  );
};
export default CharacterCard;
