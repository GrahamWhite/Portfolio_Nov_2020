import React from "react";
// @material-ui/core template_components
import {makeStyles} from "@material-ui/core/styles";


// core template_components
import GridContainer from "template_components/Grid/GridContainer.js";
import GridItem from "template_components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProjectSection() {
    const classes = useStyles();
    return (
        <div className={classes.section}>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8}>
                    <h3 className={classes.title}>How this Portfolio was Created</h3>
                    <h5 className={classes.description}>
                        This site is uses Material-UI.
                    </h5>
                </GridItem>
            </GridContainer>
        </div>

    );
}
