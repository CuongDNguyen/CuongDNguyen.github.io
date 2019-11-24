import React from 'react';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {ListItemText} from "@material-ui/core";
import EmailIcon from '@material-ui/icons/Email';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import ProfileContent from "./ProfileContent";
import "../styles/Profiles.css";

const Profiles = () => {

    function ListItemLink(props) {
        return <ListItem button component="a" {...props} />;
    }

    return (
        <React.Fragment>
            <List>
                <ListItem>
                    <ListItemIcon>
                        <ListItemLink href="https://github.com/CuongDNguyen">
                            <GitHubIcon/>
                        </ListItemLink>
                    </ListItemIcon>
                    <ListItemLink href="https://github.com/CuongDNguyen">
                        <ListItemText primary="Github"/>
                    </ListItemLink>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <ListItemLink href="https://www.linkedin.com/in/cuong-nguyen-20701134/">
                            <LinkedInIcon/>
                        </ListItemLink>
                    </ListItemIcon>
                    <ListItemLink href="https://www.linkedin.com/in/cuong-nguyen-20701134/">
                        <ListItemText primary="LinkedIn"/>
                    </ListItemLink>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <ListItemLink href="mailto:cduynguyen95@gmail.com">
                            <EmailIcon/>
                        </ListItemLink>
                    </ListItemIcon>
                    <ListItemLink href="mailto:cduynguyen95@gmail.com">
                        <ListItemText primary="Mail"/>
                    </ListItemLink>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <ListItemLink href="./Cuong_Nguyen_Resume_PDF.pdf">
                            <PictureAsPdfIcon/>
                        </ListItemLink>
                    </ListItemIcon>
                    <ListItemLink href="./Cuong_Nguyen_Resume_PDF.pdf">
                        <ListItemText primary="Resume"/>
                    </ListItemLink>
                </ListItem>
            </List>
            <ProfileContent/>
        </React.Fragment>
    );
};

export default Profiles;