import { useState } from "react";
import { lineups } from "./utils/lineups";
import { fieldOptions } from "./utils/fieldOptions";
import { Field } from "./components/Field";
import html2canvas from "html2canvas";
import "./App.css";

interface FormState {
  teamName: string;
  lineupSelected: number;
  fieldSelected: number;
  jerseyColor: string;
}

function App() {
  const [rotate, setRotate] = useState(false);
  const [formValues, setFormValues] = useState<FormState>({
    teamName: "",
    lineupSelected: 0,
    fieldSelected: 0,
    jerseyColor: "#00506a",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormValues((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCaptureClick = async () => {
    const fieldElmt = document.querySelector<HTMLElement>(".field-container");
    if (!fieldElmt) return;

    const canvas = await html2canvas(fieldElmt);
    const dataURL = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = dataURL;
    link.download = `lineup.png`;
    link.click();
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
          <div className="field-options">
            <p>Field Style:</p>
            <ul>
              {fieldOptions.map((o, i) => (
                <li
                  className="field-option"
                  style={{ background: o.style }}
                  onClick={() => setFormValues((prev) => ({ ...prev, fieldSelected: i }))}
                ></li>
              ))}
            </ul>
          </div>
          <label>
            Jersey:
            <input type="color" name="jerseyColor" onChange={handleChange} />
          </label>
          <label htmlFor="rotate">
            3D
            <input type="checkbox" name="rotate" id="rotate" onChange={() => setRotate(!rotate)} />
          </label>
        </form>
        <button className="btn-download" onClick={handleCaptureClick}>
          Save as Image
        </button>
      </section>
      <Field
        teamName={formValues.teamName}
        formation={lineups[formValues.lineupSelected].formation}
        gridArea={lineups[formValues.lineupSelected].style}
        fieldStyle={fieldOptions[formValues.fieldSelected].style}
        jerseyColor={formValues.jerseyColor}
        rotate={rotate}
      />
    </main>
  );
}

export default App;
