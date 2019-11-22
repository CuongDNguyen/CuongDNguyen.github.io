import React from 'react';
import Profile from "../pages/Profile";
import TechReviews from "../pages/TechReviews";
import Tutorials from "../pages/Tutorials";

const TabContent = (props) => {
    switch(props.content) {
        case `Profile`:  return <Profile />;
        case `Tech`: return <TechReviews />;
        case `Tutorials`: return <Tutorials />;
        default: return <Profile />;
    }
};

export default TabContent;