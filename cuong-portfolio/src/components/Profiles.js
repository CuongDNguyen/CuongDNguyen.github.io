import React from 'react';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {ListItemText} from "@material-ui/core";
import EmailIcon from '@material-ui/icons/Email';

const Profiles = () => {

    function ListItemLink(props) {
        return <ListItem button component="a" {...props} />;
    }

    return (
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
        </List>
    );
};

export default Profiles;