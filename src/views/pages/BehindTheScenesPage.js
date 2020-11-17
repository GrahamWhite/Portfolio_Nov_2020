import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core template_components
import { makeStyles } from "@material-ui/core/styles";

// core template_components
import Header from "custom_components/header/Header.js";
import Footer from "template_components/Footer/Footer.js";
import GridContainer from "template_components/Grid/GridContainer.js";
import GridItem from "template_components/Grid/GridItem.js";
import HeaderLinks from "custom_components/header/HeaderLinks";
import Parallax from "template_components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// sections for this page
import Instructions from "../sections/Instructions";
import {Link} from "react-router-dom";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
    const classes = useStyles();
    const { ...rest } = props;
    return (
        <div>
            <Header
                color="transparent"
                routes={dashboardRoutes}
                brand="Graham White"
                rightLinks={<HeaderLinks />}
                fixed
                changeColorOnScroll={{
                    height: 400,
                    color: "white"
                }}
                {...rest}
            />
            <Parallax filter image={require("assets/img/bg3.jpg")}>
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={6}>
                            <h1 className={classes.title}>How this Portfolio was Created</h1>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>




            <div className={classNames(classes.main, classes.mainRaised)} >
                <Instructions/>
                {/*Center this element*/}
                <video src="/src/assets/img/bg7.jpg" poster="/src/assets/img/bg4.jpg" width="480" controls >
                </video>
                {/*<CustomStyledButton/>*/}
            </div>
            {/*Format this element*/}
            <Link to={'/'}>Click here to return to the homepage.</Link>
            <Footer />
        </div>
    );
}
