var typed = new Typed(".text", {
    strings: ["Cyber Security", "Ethical Hacker", "Penetration Tester"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
https://github.com/Dantico12/dantic0-portifolio-
// main.js
function handleClientLoad() {
    gapi.load('client:auth2', initClient);
  }
  
  function initClient() {
    gapi.client.init({
      apiKey: 'YOUR_ACTUAL_API_KEY', // Replace with your actual API key
      clientId: '129044429989-7f8ukg03bf1roc2ulpkdsacbia0mc6qp.apps.googleusercontent.com', // Replace with your actual Client ID
      discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest'],
      scope: 'https://www.googleapis.com/auth/gmail.readonly'
    }).then(function () {
      // Ensure the user is signed in
      gapi.auth2.getAuthInstance().signIn().then(function() {
        // User is signed in and authenticated
        listEmails();
      }).catch(function(error) {
        console.error('Sign-in error:', error);
      });
    }).catch(function(error) {
      console.error('Initialization error:', error);
    });
  }
  
  function listEmails() {
    gapi.client.gmail.users.messages.list({
      'userId': 'me',
      'q': 'from:example@gmail.com' // Modify the query as needed
    }).then(function(response) {
      // Handle the response from Gmail API
      console.log(response);
    }).catch(function(error) {
      console.error('API request error:', error);
    });
  }
  
  // Make sure to include the API script in your HTML
  