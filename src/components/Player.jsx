import { useState } from "react";

export default function Player({ name, symbol, children, ...props }) {
  const [isEditing, setIsEditing] = useState(false);
  function handleEditClick() {
    setIsEditing(!isEditing);
  }
  /*  this was my solution but we will go for maxmillian sol
  if (isEditing) {
    return (
      <span className="player">
        <input type="text" placeholder="Enter Player Name"></input>
      </span>
    );
  } */
  // Max solution
  let playerName = <span className="player-name">{name}</span>;
  if (isEditing) {
    playerName = <input type="text" required value={name} />;
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
