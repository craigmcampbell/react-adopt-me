import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>

      <Pet name="Chloe" animal="Dog" breed="Aussiedoodle" />
      <Pet name="Cooper" animal="Dog" breed="Aussiedoodle" />
      <Pet name="Ranger" animal="Dog" breed="Who Knows" />
    </div>
  );
};

render(<App></App>, document.getElementById("root"));
