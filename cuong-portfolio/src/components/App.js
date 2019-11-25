import React, {useState} from 'react';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Projects from "./Projects";
import Profiles from "./Profiles";

const App = () => {

    const [currentTab, setCurrentTab] = useState("profiles");

    const profileTabClicked = () => {
        setCurrentTab("profiles")
    };

    const projectsTabClicked = () => {
        setCurrentTab("projects")
    };

    return (
            <div className="container-fluid">
                <Tabs value={currentTab === "profiles" ? "profiles" : "projects"}>
                    <Tab className="tabs" value="profiles" label="My Profiles" onClick={profileTabClicked} />
                    <Tab className="tabs" value="projects" label="Projects"  onClick={projectsTabClicked} />
                </Tabs>
                {currentTab === "profiles" ? <Profiles /> : <Projects />}
            </div>
    );
};

export default App;
