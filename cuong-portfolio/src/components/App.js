import React, {useState} from 'react';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Projects from "./Projects";
import Profiles from "./Profiles";
import {Switch, Route, Link, BrowserRouter} from "react-router-dom";

const App = () => {

    const [currentTab, setCurrentTab] = useState("/profile");

    const profileTabClicked = () => {
        setCurrentTab("/profile")
    };

    const projectsTabClicked = () => {
        setCurrentTab("/projects")
    };

    return (
        <BrowserRouter>
            <div className="container-fluid">
                <Tabs value={currentTab === "/profile" ? "/profile" : "/projects"}>
                    <Tab className="tabs" value="/profile" component={Link} label="My Profile" to="/profile" onClick={profileTabClicked} />
                    <Tab className="tabs" value="/projects" component={Link} label="Projects" to="/projects" onClick={projectsTabClicked} />
                </Tabs>
                <Switch>
                    <Route path="/profile" component={Profiles} />
                    <Route path="/projects" component={Projects} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;
