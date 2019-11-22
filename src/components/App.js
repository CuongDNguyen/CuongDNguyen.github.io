import React, { useState } from 'react';
import Container from "@material-ui/core/Container";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabContent from "./TabContent";

const App = () => {

    const [currentTab, setCurrentTab] = useState("");

    const toggleProfileTab = () => {
        setCurrentTab(`Profile`)
    };

    const toggleTechTab = () => {
        setCurrentTab(`Tech`)
    };

    const toggleTutorialsTab = () => {
       setCurrentTab(`Tutorials`)
    };

    return (
        <Container fixed maxWidth="lg">
            <Tabs value={false}>
                <Tab label={<span className='tabs' onClick={toggleProfileTab}>Profile</span>} />
                <Tab label={<span className='tabs' onClick={toggleTechTab}>Tech Reviews</span>} />
                <Tab label={<span className='tabs' onClick={toggleTutorialsTab}>Tutorials</span>} />
            </Tabs>
            <TabContent content={currentTab}/>
        </Container>
    );
};

export default App;