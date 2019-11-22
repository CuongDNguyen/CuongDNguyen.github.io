import React, { useState } from 'react';
import Container from "@material-ui/core/Container";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";

const App = () => {
    const [showProfileTab, setShowProfileTab ] = useState(false);
    const [showTechTab, setShowTechTab ] = useState(false);
    const [showTutorialsTab, setShowTutorialsTab ] = useState(false);

    const toggleProfileTab = () => {
        const shouldShowProfileTab = showProfileTab;
        console.log(shouldShowProfileTab);
        setShowProfileTab(!shouldShowProfileTab);
    };

    const toggleTechTab = () => {
        const shouldShowTechTab = showTechTab;
        console.log(shouldShowTechTab);
        setShowTechTab(!shouldShowTechTab);
    };

    const toggleTutorialsTab = () => {
        const shouldShowTutorialsTab = showTutorialsTab;
        console.log(shouldShowTutorialsTab);
        setShowTutorialsTab(!shouldShowTutorialsTab);
    };

    return (
        <Container fixed maxWidth="lg">
            <Tabs value={false}>
                <Tab label={<span className={showProfileTab ? 'profileTab' : 'noShow'} onClick={toggleProfileTab}>Profile</span>} />
                <Tab label={<span className={showTechTab ? 'techTab' : 'noShow'} onClick={toggleTechTab}>Tech Reviews</span>} />
                <Tab label={<span className={showTutorialsTab ? 'tutorialsTab' : 'noShow'} onClick={toggleTutorialsTab}>Tutorials</span>} />
            </Tabs>
            <Box component="span" m={1}>

            </Box>
        </Container>
    );
};

export default App;