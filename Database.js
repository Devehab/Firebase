


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
    

   



//---------------------------- Set Data

var data = { FirstName: 'Ehab', LastName: 'Kahwati', Age:23 };
var UserID = 225422;
var MyPath = firebase.database().ref('Users/'+ UserID);
MyPath.set(data)
  .then(function() {
    console.log('succeeded');
  })
  .catch(function(error) {
    console.log("failed: " + error.message);
  });


//--------------------- 2 

var data = { FirstName: 'Ehab', LastName: 'Kahwati', Age:23 };
var MyPath = firebase.database().ref('Users/');
MyPath.push(data)
  .then(function() {
    console.log('succeeded');
  })
  .catch(function(error) {
    console.log("failed: " + error.message);
  });



//--------------------------------- Get Data

var UserID = 225422;
var MyPath = firebase.database().ref('Users/'+ UserID);
MyPath.once('value')
  .then(function(GetData) {

    var Data = GetData.val();

    console.log('FirstName: ' + Data.FirstName + '\n LastName: ' + Data.LastName + '\n Age: ' + Data.Age);

  });

//------------------------------------------------ update

var data = { FirstName: 'Ehab', LastName: 'Kahwati', Age:23 };
var UserID = 225422;
var MyPath = firebase.database().ref('Users/'+ UserID);
MyPath.update(data).then(function() {
    console.log(' succeeded');
  })
  .catch(function(error) {
    console.log(' failed' + error.message);
  });

//-------------------------------------- Delete Data

var UserID = 225422;
var MyPath = firebase.database().ref('Users/'+ UserID);
MyPath.child('Age').remove().then(function() {
    console.log("Remove succeeded.")
  })
  .catch(function(error) {
    console.log("Remove failed: " + error.message)
  });

//----------------------------------- Listen Data

var UserID = 225422;
var MyPath = firebase.database().ref('Users/'+ UserID);
 MyPath.on('value', function(GetData) {

 	console.log("Change Data" , GetData.val());
 
 }); 

//-------------- Child 

var UserID = 225422;
var Child = "FirstName";
var MyPath = firebase.database().ref('Users/'+ UserID + '/' + Child);
MyPath.on('value', function(GetData) {

console.log("Change Data " + Child + ": "+ GetData.val());
 
 }); 




</script>



    