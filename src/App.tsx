import { useState } from "react";
import { lineups } from "./utils/lineups";
import "./App.css";

interface FormState {
  teamName: string;
  lineupSelected: number;
}

function App() {
  const [formValues, setFormValues] = useState<FormState>({
    teamName: "",
    lineupSelected: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormValues((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <main>
      <section className="options">
        <form action="">
          <label htmlFor="teamName">
            Team Name:
            <input type="text" name="teamName" onChange={handleChange} value={formValues.teamName} maxLength={40} />
          </label>
          <label htmlFor="lineupSelected">
            Formation:
            <select name="lineupSelected" onChange={handleChange}>
              {lineups.map((l, index) => (
                <option key={l.style} value={index}>
                  {l.formation}
                </option>
              ))}
            </select>
          </label>
        </form>
      </section>
      <section className="field-container ">
        <header>
          <p>{formValues.teamName}</p>
          <p>{lineups[formValues.lineupSelected].formation}</p>
        </header>
        <div className="field" style={{ gridTemplateAreas: lineups[formValues.lineupSelected].style }}>
          <div className="player"></div>
          <div className="player"></div>
          <div className="player"></div>
          <div className="player"></div>
          <div className="player"></div>
          <div className="player"></div>
          <div className="player"></div>
          <div className="player"></div>
          <div className="player"></div>
          <div className="player"></div>
          <div className="player"></div>
        </div>
      </section>
    </main>
  );
}

export default App;
