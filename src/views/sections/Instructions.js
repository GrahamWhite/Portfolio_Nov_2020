import React from "react";
// @material-ui/core template_components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import VerifiedUser from "@material-ui/icons/VerifiedUser";

// core template_components
import GridContainer from "template_components/Grid/GridContainer.js";
import GridItem from "template_components/Grid/GridItem.js";


import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import ReactMarkdown from "react-markdown";

let i = require('./instructions.md');

const useStyles = makeStyles(styles);



const instructions = "# Welcome to my portfolio project.\n" +
    "\n" +
    "This project is intended to be a demonstration of web app creation.  \n" +
    "Follow the instructions to reproduce a portfolio just like this one.\n" +
    "\n" +
    "Cheers\n" +
    "**Graham White**\n" +
    "\n" +
    "*Nov 17 2020*\n" +
    "\n" +
    "\n" +
    "\n" +
    "Instructions to install this app yourself:\n" +
    "\n" +
    "**Install NodeJS:**\n" +
    "\n" +
    "https://nodejs.org/en/download/\n" +
    "\n" +
    "\n" +
    "**Clone Repository**\n" +
    "\n" +
    "Open a local terminal and navigate to your desired directory\n" +
    "\n" +
    "    git clone https://github.com/GrahamWhite/Portfolio_Nov_2020.git\n" +
    "![Step1](https://firebasestorage.googleapis.com/v0/b/gw-portfolio.appspot.com/o/Step1.PNG?alt=media&token=01a130ed-8cbf-4c93-a19c-a92d3b3e83e5 \"Step1\" )\n" +
    "**Install Dependencies**\n" +
    "\n" +
    "    cd Portfolio_Nov_2020\n" +
    "    npm install\n" +
    "![Step2a](https://firebasestorage.googleapis.com/v0/b/gw-portfolio.appspot.com/o/Step%202a.PNG?alt=media&token=ed265f8b-60dc-4cf5-9061-16b83aa6b377 \"Step2a\" )\n" +
    "\n" +
    "![Step2b](https://firebasestorage.googleapis.com/v0/b/gw-portfolio.appspot.com/o/Step%202b.PNG?alt=media&token=1ef386fd-ad3f-4081-ae5d-1a9b5660ffdb \"Step2b\" )\n" +
    "**Create Firebase Project**\n" +
    "\n" +
    "1. Create a firebase project\n" +
    "1. Register your app on firebase\n" +
    "\n" +
    "\n" +
    "**Edit *firebaseConfig* in the *SubscriptionForm.js* file \n" +
    "to match the settings from your firebase project**\n" +
    "\n" +
    "1. Navigate to the realtime database console and select Project Settings\n" +
    "![Settings](https://firebasestorage.googleapis.com/v0/b/gw-portfolio.appspot.com/o/settings.PNG?alt=media&token=4b54d9de-57d8-4a45-b89d-09a45a154b55 \"Settings\")\n" +
    "2. Copy the config parameters and replace firebaseConfig in your SubscriptionForm.js file\n" +
    "![Config](https://firebasestorage.googleapis.com/v0/b/gw-portfolio.appspot.com/o/config.PNG?alt=media&token=44366c76-d3ea-4b61-a0f7-a744333c65a0 \"Config\")\n" +
    "\n" +
    "Please note that in future updates constants and functions included in the \n" +
    "*SubscriptionForm.js* page will be divided into data, facade, utility, and \n" +
    "controller files to maintain project organization.\n" +
    "\n" +
    "The app should now save a subscriber's email and name to the realtime \n" +
    "firebase database you created.\n" +
    "\n";



export default function ProjectSection() {
  const classes = useStyles();


  return (

    <div className={classes.section}>
      <GridContainer justify="left">
        <GridItem xs={12} sm={12} md={8}>
          <h3 className={classes.title}>Instructions</h3>
        </GridItem>
        <GridItem>

             <ReactMarkdown source={instructions}/>

        </GridItem>
      </GridContainer>
    </div>
  );
}
