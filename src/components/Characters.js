import React from "react";
import CharacterItem from "./CharacterItem";

const Characters = ({ characters }) => {

  return (
    <div className="cards">
      {characters.map((item, index) => (
          <CharacterItem key={item.key} item={item}></CharacterItem>
      ))}
    </div>
  );
};

export default Characters;
