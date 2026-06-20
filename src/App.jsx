import "./App.css";
import { useState } from "react";

function App() {
  const [dob, setDob] = useState("");
  const [age, setAge] = useState("");

  const calculateAge = () => {
    const birthDate = new Date(dob);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      days += 30;
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    setAge(`${years} Years, ${months} Months, ${days} Days`);
  };

  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      <h1>Age Calculator</h1>

      <input
        type="date"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
      />

      <br /><br />

      <button onClick={calculateAge}>Calculate Age</button>

      <h2>{age}</h2>

      <hr />

      <p><b>Gangadharan Shanmugam</b></p>
      <p>skdharan007@gmail.com</p>

      <a
        href="https://digitalheroesco.com"
      >
        <button>Built for Digital Heroes</button>
      </a>
    </div>
  );
}

export default App;