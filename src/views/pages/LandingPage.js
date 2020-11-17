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

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// sections for this page
import ProjectSection from "../sections/ProjectSection.js";
import BehindTheScenes from "../sections/BehindTheScenes";
import {Divider} from "@material-ui/core";
import {Link} from "react-router-dom";
import SubscriptionForm from "../sections/SubscriptionForm";

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
              <h1 className={classes.title}>Graham White</h1>
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cupiditate impedit iure odio suscipit. Architecto cumque fugiat, in ipsum iste laudantium mollitia natus nostrum odio odit quaerat quo quos recusandae reiciendis sunt. At doloribus, omnis.
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
            <GridContainer>
                <GridItem>
                    <ProjectSection />
                </GridItem>

                <GridItem>
                    <Divider />
                </GridItem>

                <GridItem>
                    <a href={"/behind-the-scenes-page"}>
                        <BehindTheScenes/>
                    </a>
                </GridItem>

                <GridItem>
                    <Divider />
                </GridItem>

                <GridItem>
                    <SubscriptionForm/>
                </GridItem>

            </GridContainer>
        </div>
      </div>
      <Footer />
    </div>
  );
}
