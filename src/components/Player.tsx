import { useState } from "react";

interface PlayerProps {
  name: string;
  number: number;
}

export const Player: React.FC<PlayerProps> = ({ number, name }) => {
  const [playerName, setPlayerName] = useState(name);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerName(e.target.value);
  };
  return (
    <div className="player">
      <div className="icon"></div>
      <span className="number">{number}</span>
      <input type="text" value={playerName} onChange={handleChange} maxLength={22} />
    </div>
  );
};
