import React, { useState } from "react";
import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./ChildComponent2";
import "./../styles/App.css";

const App = () => {
  // Step 1: Create state in parent
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div className="parent">
      {/* Step 2: Display the selected option */}
      <h2>Selected Option: {selectedOption || "None"}</h2>

      {/* Step 3: Pass handler to children */}
      <ChildComponent1 setSelectedOption={setSelectedOption} />
      <ChildComponent2 setSelectedOption={setSelectedOption} />
    </div>
  );
};

export default App;
