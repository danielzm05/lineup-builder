import { useState } from "react";
import { lineups } from "./utils/lineups";
import { Player } from "./components/Player";
import "./App.css";

interface FormState {
  teamName: string;
  lineupSelected: number;
}

function App() {
  const [rotate, setRotate] = useState(false)
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
          <label htmlFor="rotate">
            3D
            <input type="checkbox" name="rotate" id="rotate" onChange={()=>setRotate(!rotate)}/>
          </label>
        </form>
      </section>
      <section className="field-container ">
        <header>
          <p>{formValues.teamName}</p>
          <p>{lineups[formValues.lineupSelected].formation}</p>
        </header>
        <div className={`field ${rotate && 'rotate'}`} style={{ gridTemplateAreas: lineups[formValues.lineupSelected].style }}>
          <Player number={1} name={"GK"} />
          <Player number={2} name={"GK"} />
          <Player number={3} name={"GK"} />
          <Player number={4} name={"GK"} />
          <Player number={5} name={"GK"} />
          <Player number={6} name={"GK"} />
          <Player number={7} name={"GK"} />
          <Player number={8} name={"GK"} />
          <Player number={9} name={"GK"} />
          <Player number={10} name={"GK"} />
          <Player number={11} name={"GK"} />
        </div>
      </section>
    </main>
  );
}

export default App;
