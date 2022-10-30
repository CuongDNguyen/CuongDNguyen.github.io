import React from 'react';
import "../styles/Profiles.css";
import ProfileContent from "./ProfileContent";

const Projects = () => {

    function ListItemLink(props) {
        return <ListItem button component="a" {...props} />;
    }

    return (
        <React.Fragment>
            <List>
                <ListItem>
                    <ListItemLink href="https://bliss-nails.vercel.app/">
                        <ListItemText primary="Bliss Nails"/>
                    </ListItemLink>
                </ListItem>
            </List>
            <ProfileContent/>
        </React.Fragment>
    );
};

export default Projects;