import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core template_components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core template_components
import Header from "custom_components/header/Header.js";
import Footer from "template_components/Footer/Footer.js";
import GridContainer from "template_components/Grid/GridContainer.js";
import GridItem from "template_components/Grid/GridItem.js";
import HeaderLinks from "custom_components/header/HeaderLinks";
import Parallax from "template_components/Parallax/Parallax.js";
// At the component you want to use confetti
import ConfettiGenerator from "confetti-js";
import styles from "assets/jss/material-kit-react/views/landingPage.js";

// sections for this page
import {Link} from "react-router-dom";


const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function ThankyouPage(props) {
    const classes = useStyles();
    const { ...rest } = props;


    React.useEffect(() => {
        const confettiSettings = { target: 'my-canvas' };
        const confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();

        return () => confetti.clear();
    }, []) // add the var dependencies or not

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



            <Parallax filter image={require("assets/img/bg3.jpg")} style={{height: '200px'}}>
            </Parallax>

                <div className={classNames(classes.main, classes.mainRaised)} style={{height: '500px'}}>
                    <h1 color={'black'} align={'center'}>Thank You for Subscribing</h1>
                    <Link to={'/'}>Click here to return to the homepage.</Link>
                    <canvas id={"my-canvas"}>

                    </canvas>


                </div>
            <Footer />
        </div>
    );
}
