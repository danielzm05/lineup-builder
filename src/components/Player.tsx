import { useState } from "react";
import "../styles/player.css"

interface PlayerProps {
  name: string;
  number: number;
  jerseyColor: string;
}

export const Player: React.FC<PlayerProps> = ({ number, name, jerseyColor }) => {
  const [playerInfo, setPlayerInfo] = useState({
    name: name,
    number: number,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPlayerInfo((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="player">
      <div className="icon" style={{ background: jerseyColor }}>
        <input className="number" type="text" name="number" value={playerInfo.number} onChange={handleChange} maxLength={2} />
      </div>
      <input type="text" name="name" value={playerInfo.name} onChange={handleChange} maxLength={22} />
    </div>
  );
};
