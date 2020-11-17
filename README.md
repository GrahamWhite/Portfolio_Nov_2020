# Welcome to my portfolio project.

This project is intended to be a demonstration of web app creation.  
Follow the instructions to reproduce a portfolio just like this one.

Cheers
**Graham White**

*Nov 17 2020*



Instructions to install this app yourself:

**Install NodeJS:**

https://nodejs.org/en/download/


**Clone Repository**

Open a local terminal and navigate to your desired directory

    git clone https://github.com/GrahamWhite/Portfolio_Nov_2020.git
![Step1](https://firebasestorage.googleapis.com/v0/b/gw-portfolio.appspot.com/o/Step1.PNG?alt=media&token=01a130ed-8cbf-4c93-a19c-a92d3b3e83e5 "Step1"  )
**Install Dependencies**

    cd Portfolio_Nov_2020
    npm install
![Step2a](https://firebasestorage.googleapis.com/v0/b/gw-portfolio.appspot.com/o/Step%202a.PNG?alt=media&token=ed265f8b-60dc-4cf5-9061-16b83aa6b377 "Step2a" )

![Step2b](https://firebasestorage.googleapis.com/v0/b/gw-portfolio.appspot.com/o/Step%202b.PNG?alt=media&token=1ef386fd-ad3f-4081-ae5d-1a9b5660ffdb "Step2b" )
**Create Firebase Project**

1. Create a firebase project
1. Register your app on firebase


**Edit *firebaseConfig* in the *SubscriptionForm.js* file 
to match the settings from your firebase project**

1. Navigate to the realtime database console and select Project Settings
![Settings](https://firebasestorage.googleapis.com/v0/b/gw-portfolio.appspot.com/o/settings.PNG?alt=media&token=4b54d9de-57d8-4a45-b89d-09a45a154b55 "Settings")
2. Copy the config parameters and replace firebaseConfig in your SubscriptionForm.js file
![Config](https://firebasestorage.googleapis.com/v0/b/gw-portfolio.appspot.com/o/config.PNG?alt=media&token=44366c76-d3ea-4b61-a0f7-a744333c65a0 "Config")

Please note that in future updates constants and functions included in the 
*SubscriptionForm.js* page will be divided into data, facade, utility, and 
controller files to maintain project organization.

The app should now save a subscriber's email and name to the realtime 
firebase database you created.

