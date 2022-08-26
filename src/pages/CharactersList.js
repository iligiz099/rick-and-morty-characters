import React from "react";
import { useCharacters } from "../hooks/useCharacters";
import "./CharacterList.css";


export default function CharactersList() {
  const { error, loading, data } =useCharacters(); 

  if (loading) return <div>spinner...</div>;

  if (error) return <div>something went wrong</div>;

  return (
    <div className="CharacterList">
      {data.characters.results.map((character) => {
        return (
          <div>
            <img className="border-img" src={character.image} />
            <h2>{character.name}</h2>
          </div>
        );
      })}
    </div>
  );
}