var firebase = require('firebase');

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDZdsU3frwmb4aBfuMWr7ylYwrf_qjspHc",
  authDomain: "stateless-10dcd.firebaseapp.com",
  databaseURL: "https://stateless-10dcd.firebaseio.com",
  storageBucket: "stateless-10dcd.appspot.com",
  messagingSenderId: "334456278357"
};

Firebase = firebase.initializeApp(config);

module.exports = Firebase;
