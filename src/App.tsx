import "./App.css";

function App() {
  return (
    <main>
      <section className="options">
        <form action="">
          <label htmlFor="formation">
            Team Name:
            <input type="text" />
          </label>
          <label htmlFor="formation">
            Formation:
            <select name="formation" id="">
              <option value="4-3-3">4-3-3</option>
            </select>
          </label>
        </form>
      </section>
      <section className="field-container ">
        <header>
          <p>Team Name</p>
          <p>4-3-3</p>
        </header>
        <div className="field ">
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
