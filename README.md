# EmailApp

Step 1: Creating a New Project
  Make a new project in the Google Developer Console
  Select a project in the top left corner
Step 2: Create API Credentials
  Go to project settings
  Click the API Credentials
  Go to APIs overview and select Credentials
  Click the Create Credentials and choose OAuth client ID from the list
  Press the Configure consent screen and name your app
  After above step you will be redirected back to the Create client ID page.Under Application Type, choose Web Application
  You can give your client ID any name you like, but under Restrictions in the Authorized redirect URIs section add https://developers.google.com/oauthplayground
Step 3: Save your Client ID and Client Secret
Step 4: Configure OAuth
  Go to https://developers.google.com/oauthplayground and click the tools icon
  Check the box that says Use your own OAuth credentials and enter your client ID and secret. Without closing out of the settings, enter https://mail.google.com/ into the box in the Select and authorize APIs section and press Authorize APIs
Step 5: Write Code

  mkdir EmailerApp
  cd EmailerApp
  npm init
  npm install nodemailer googleapis
  create a new file and add following code
  
    const nodemailer = require("nodemailer");
    const { google } = require("googleapis");
    const OAuth2 = google.auth.OAuth2;
    const oauth2Client = new OAuth2(
         "1075967164031-a7i5qedasi4v1qb3oa0ab9nc4bbjt0b7.apps.googleusercontent.com",// Client ID
         "YbNDrnWcNnbbBSseerTkKNH0C", // Client Secret
         "https://developers.google.com/oauthplayground" // Redirect URL
    );
    oauth2Client.setCredentials({
         refresh_token: "1//04ESlulGI3jzlCgYIARAAGAQSNwF-L9IreO4Me5CN_RW3JyUbDLVozokHmjWFqlr8tZ6RN3EseNr4kXe7XiBLI4N4xkSQ0IEsX34" // Refresh Token
    });
    const accessToken = oauth2Client.getAccessToken()
    const smtpTransport = nodemailer.createTransport({
         service: "gmail",
         auth: {
              type: "OAuth2",
              user: "thirusrinivasa_teja@srmap.edu.in", 
              clientId: "1075967164031-a7i5qedasi4v1qb3oa0ab9nc4bbjt0b7.apps.googleusercontent.com",
              clientSecret: "bNDrnWcNnbbBSseerTkKNH0C",
              refreshToken: "1//04ESlulGI3jzlCgYIARAAGAQSNwF-L9IreO4Me5CN_RW3JyUbDLVozokHmjWFqlr8tZ6RN3EseNr4kXe7XiBLI4N4xkSQ0IEsX34",
              accessToken: accessToken
         }
    });
    tls: {
      rejectUnauthorized: false
    }
    const mailOptions = {
         from: "thirusrinivasa_teja@srmap.edu.in",
         to: "vt.srinivasteja@gmail.com",
         subject: "Node.js Email with Secure OAuth",
         generateTextFromHTML: true,
         html: "<b>Testing</b>"
    };
    smtpTransport.sendMail(mailOptions, (error, response) => {
         error ? console.log(error) : console.log(response);
         smtpTransport.close();
    });
    
Step 6: Run using node "filename"
