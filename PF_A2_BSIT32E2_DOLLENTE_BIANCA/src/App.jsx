import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./features.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import ColumnsWithIcons from "./components/ColumnsWithIcons.jsx";
import HangingIcons from "./components/HangingIcons.jsx";
import CustomCards from "./components/CustomCards.jsx";
import IconGrid from "./components/IconGrid.jsx";
import FeaturesWithTitle from "./components/FeaturesWithTitle.jsx";

function App() {
  return (
    <main>
      <h1 className="visually-hidden">Features examples</h1>

      <ColumnsWithIcons />
      <div className="b-example-divider"></div>

      <HangingIcons />
      <div className="b-example-divider"></div>

      <CustomCards />
      <div className="b-example-divider"></div>

      <IconGrid />

      <FeaturesWithTitle />

    </main>
  );
}

export default App;