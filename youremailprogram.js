
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
