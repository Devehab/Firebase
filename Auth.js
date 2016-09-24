


<script src="https://www.gstatic.com/firebasejs/3.2.0/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCvj1odFm6bFS4_peANAOeAI27GRe0wySc",
    authDomain: "test-762f9.firebaseapp.com",
    databaseURL: "https://test-762f9.firebaseio.com",
    storageBucket: "",
  };
  firebase.initializeApp(config);
</script>
    

   

// SIGN-IN METHOD ==> Status Enable

//-------------------------------- Create a password-based account

var email = "pro2014learning@gmail.com";
var password = "abcd1234";
firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
console.log(error.code , error.message );
});

//-------------------------------- signIn

firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  console.log(error.code , error.message );
});

 //----------------------------------------------- Update a user's profile
 
 var user = firebase.auth().currentUser;
user.updateProfile({
  displayName: "Ehab Kahwati",
  photoURL: "https://lh3.googleusercontent.com/-eju2ETy3EYI/AAAAAAAAAAI/AAAAAAAAAAA/APaXHhRjYDylhc7suvVy9nb2N4XSvsIJEQ/s96-c-mo/photo.jpg"
}).then(function() {
  console.log("Update successful."); 
}, function(error) {
  console.log(' An error happened.' , error);
});


//---------------------------- signOut

firebase.auth().signOut().then(function() {
  console.log("Sign-out successful."); 
}, function(error) {
  console.log(' An error happened.' , error);
});

//---------------------------- Lestin Changed

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log("User is signed in.");
    
  } else {
     console.log("User is signed out .");
  }
});

//---------------------------------------- email Verified

user.emailVerified;
user.sendEmailVerification();


//---------------------------- Check User

var user = firebase.auth().currentUser;

if (user) {
  var uid = user.uid;
  console.log("User is signed in." + ", ID: " + uid); 

} else {
 console.log("No user is signed in .");  
}

//--------------------------------Get a user's provider-specific profile information

var user = firebase.auth().currentUser;

if (user != null) {
  user.providerData.forEach(function (profile) {
    console.log("Sign-in provider: "+profile.providerId);
    console.log("  Provider-specific UID: "+profile.uid);
    console.log("  Name: "+profile.displayName);
    console.log("  Email: "+profile.email);
    console.log("  Photo URL: "+profile.photoURL);
  });
}

// -----------------2

var user = firebase.auth().currentUser;
var name, email, photoUrl, uid;

if (user != null) {
  name = user.displayName;
  email = user.email;
  photoUrl = user.photoURL;
  uid = user.uid;  
}


//-------------------------------- updateEmail

var user = firebase.auth().currentUser;
user.updateEmail("user@example.com").then(function() {
  console.log('Update successful.'); 
}, function(error) {
  console.log(' An error happened.' , error);
});

//------------------------------ updatePassword 

var user = firebase.auth().currentUser;
var newPassword = getASecureRandomPassword();

user.updatePassword(newPassword).then(function() {
  console.log('Update successful.'); 
}, function(error) {
  console.log('An error happened.', error); 
});


//----------------------------- Send a password reset email
var auth = firebase.auth();
var emailAddress = "user@example.com";

auth.sendPasswordResetEmail(emailAddress).then(function() {
  console.log('Email sent.');  
}, function(error) {
  console.log('An error happened.', error); 
});

//------------------------------------- Delete a user
var user = firebase.auth().currentUser;

user.delete().then(function() {
  console.log('User deleted.');   
}, function(error) {
  console.log('An error happened.', error); 
});





    
