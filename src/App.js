import React, { useState } from "react";

const App = () => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [fullName, setFullName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setFullName(`${fName} ${lName}`);
  };
  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label for="fName">First Name:</label>
          <input
            required
            type="text"
            id="fName"
            value={fName}
            onChange={(e) => setFName(e.target.value)}
          />
        </div>
        <div>
          <label for="lName">Last Name:</label>
          <input
            type="text"
            required
            value={lName}
            id="lName"
            onChange={(e) => setLName(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
        {fullName && <p>Full Name: {fullName}</p>}
      </form>
    </div>
  );
};

export default App;
