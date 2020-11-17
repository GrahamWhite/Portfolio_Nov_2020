import React from "react";
// @material-ui/core template_components
import {makeStyles} from "@material-ui/core/styles";

// @material-ui/icons
import VerifiedUser from "@material-ui/icons/VerifiedUser";

// core template_components
import GridContainer from "template_components/Grid/GridContainer.js";
import GridItem from "template_components/Grid/GridItem.js";
import InfoArea from "template_components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

import {CloudDownload, StorageSharp} from "@material-ui/icons";


const useStyles = makeStyles(styles);

export default function ProjectSection() {
    const classes = useStyles();
    return (
        <div className={classes.section}>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8}>
                    <h3 className={classes.title}>Instructions</h3>
                    <h5 className={classes.description}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est exercitationem facilis molestiae mollitia numquam placeat quis? Culpa dolorum enim, eos minus nostrum placeat ut voluptatum.
                    </h5>
                </GridItem>
            </GridContainer>
        </div>

    );
}
