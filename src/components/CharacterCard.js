import React from "react";
import styles from "styled-components";

const Card = styles.div`
width: 10rem;

`;

export default function CharacterCard({ name, species, status, image }) {
  return (
    <Card>
      <img src={image} className="card-img-top" alt="profile" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          {species}
          {status}
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </Card>
  );
}
