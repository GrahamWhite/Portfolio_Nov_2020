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
                    <h2 className={classes.title}>Projects</h2>
                    <h5 className={classes.description}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab at autem, culpa delectus dicta
                        enim, ex impedit, officia perspiciatis recusandae repellat repudiandae ullam velit voluptas.
                    </h5>
                </GridItem>

            </GridContainer>

            <div>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                        <InfoArea
                            title="Databases"
                            description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                            icon={StorageSharp}
                            iconColor="info"
                            vertical
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <InfoArea
                            title="Resources"
                            description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                            icon={VerifiedUser}
                            iconColor="success"
                            vertical
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <InfoArea
                            title="Downloads"
                            description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                            icon={CloudDownload}
                            iconColor="rose"
                            vertical
                        />
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}
