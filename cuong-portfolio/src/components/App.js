import React, { useState } from 'react';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Projects from "./Projects";
import Profiles from "./Profiles";

const App = () => {

  const [currentTab, setCurrentTab] = useState("Profiles");

  const tabClicked = (event) => {

  };

  return (
      <div className="container-fluid">
        <Tabs value={0}>
          <Tab value={0} label="My Profile" onClick={tabClicked} />
          <Tab value={1} label="Projects" onClick={tabClicked} />

        </Tabs>
        {currentTab === "Projects" ? <Projects /> : ""}
        {currentTab === "Profiles" ? <Profiles /> : ""}
      </div>
  );
};

export default App;
