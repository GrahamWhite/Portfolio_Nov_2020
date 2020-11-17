
import React from "react";
// @material-ui/core template_components
import {makeStyles} from "@material-ui/core/styles";

// core template_components
import GridContainer from "template_components/Grid/GridContainer.js";
import GridItem from "template_components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";



import {FormControl} from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import CardContent from "@material-ui/core/CardContent";
import Card from "../../template_components/Card/Card";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import firebase from "firebase";


const useStyles = makeStyles(styles);



const firebaseConfig = {
    apiKey: "AIzaSyAYWQw9Vq8rz6apOT0K8-NssNxlNgIzzyI",
    authDomain: "gw-portfolio.firebaseapp.com",
    databaseURL: "https://gw-portfolio.firebaseio.com",
    projectId: "gw-portfolio",
    storageBucket: "gw-portfolio.appspot.com",
    messagingSenderId: "493407732070",
    appId: "1:493407732070:web:146e5dcc125647d44e88a7",
    measurementId: "G-CK8WK3R91V"
};

    firebase.initializeApp(firebaseConfig);
    console.log("Firebase initialized");

    const db = firebase.database();
//Callbacks
function gotData(data)
{
    console.log(data.val());

}
function  errData(err)
{
    console.error(err);
}

//Data Layer
function retrieveData()
{
    let dataRef = db.ref('users');

    dataRef.on('value', gotData, errData);
}

//Utility
function formatData(data)
{

}

//Facade
function saveData(userId, name, email, imageUrl) {
    db.ref('users/' + userId).set({
        username: name,
        email: email,
        profile_picture : imageUrl
    });

    //window.location.replace("thank-you");
}

//Controller
function submitForm()
{
    try {
        let username = document.getElementById('name-input').value;
        let email = document.getElementById('email_address').value;

        let id = db.ref('users').push().key;
        saveData(id, username, email, "#");

        retrieveData();

        window.location.replace("/thank-you");

    }
    catch(e){

        console.error("Error: " + e.message);
    }
}

export default function SubscriptionForm() {
    const classes = useStyles();

    return (
        <div className={classes.section}>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8}>
                        <Card>
                            <CardContent className={classes.section} >
                                <h3 className={classes.title}>Subscribe</h3>
                                <FormControl>
                                    <InputLabel htmlFor={"email_address"}>Email Address</InputLabel>
                                    <Input id={"email_address"} aria-describedby={"Please enter your email address"}/>
                                </FormControl>

                                <br/>

                                <FormControl>
                                    <InputLabel htmlFor={"name-input"}>Name</InputLabel>
                                    <Input id={"name-input"} aria-describedby={"Please enter your name"}/>
                                </FormControl>
                                <br/>
                                <br/>
                                <br/>
                                <FormControl>
                                    <Button onClick={submitForm}><Icon>save</Icon>Subscribe</Button>
                                </FormControl>
                            </CardContent>
                        </Card>
                </GridItem>
            </GridContainer>
        </div>

    );
}
