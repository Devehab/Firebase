
/*
// Tage HTML

<input  style=" display: block; margin: 20px 0px; " type="file" id="myFile" name="file"/>

<img id="myImage" src="#">

*/

<script src="https://www.gstatic.com/firebasejs/3.2.0/firebase.js"></script>
<script src="https://www.gstatic.com/firebasejs/3.4.0/firebase-auth.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCvj1odFm6bFS4_peANAOeAI27GRe0wySc",
    authDomain: "test-762f9.firebaseapp.com",
    databaseURL: "https://test-762f9.firebaseio.com",
    storageBucket: "test-762f9.appspot.com",
    messagingSenderId: "339380771447"
  };
  firebase.initializeApp(config);
</script>
 
<script>


//---------------------------- rules PUBLIC

/*

service firebase.storage {
  match /b/your-firbase-storage-bucket/o {
    match /{allPaths=**} {
      allow read, write;
    }
  }
}

*/



//---------------------------- Upload Data

 <input type="file" id="file" name="file"/>
     <span id="linkbox"></span>


     var storageRef = firebase.storage().ref();

    function handleFileSelect(evt) {
      evt.stopPropagation();
      evt.preventDefault();
      var file = evt.target.files[0];
      var metadata = {
        'contentType': file.type
      };
      
      storageRef.child('images/' + file.name).put(file, metadata).then(function(snapshot) {
        console.log('Uploaded', snapshot.totalBytes, 'bytes.');
        console.log(snapshot.metadata);
        var url = snapshot.metadata.downloadURLs[0];
        console.log('File available at', url);
        document.getElementById("myImage").src = url;
        
      }).catch(function(error) {
        console.error('Upload failed:', error);
      });

    }


    document.getElementById('myFile').addEventListener('change', handleFileSelect, false);






  //-------------------------------  Download Data via URL

var storageRef = firebase.storage().ref();
var starsRef = storageRef.child('images/NameImage.jpg');

starsRef.getDownloadURL().then(function(url) {
document.getElementById("myImage").src = url;
console.log('File available at', url);

}).catch(function(error) {
  switch (error.code) {
    case 'storage/object_not_found':
      console.log(' File doesnt exist');
      break;

    case 'storage/unauthorized':
      console.log('User doesnt have permission to access the object');
      break;

    case 'storage/canceled':
      console.log(' User canceled the upload');
      break;

    case 'storage/unknown':
      console.log('Unknown error occurred, inspect the server response');
      break;
  }
});


//-------------------------------  Delete a File

var storageRef = firebase.storage().ref();
var desertRef = storageRef.child('images/name_file.jpg');
desertRef.delete().then(function() {
  console.log(' File deleted successfully');
}).catch(function(error) {
  console.log(' Uh-oh, an error occurred! ');
});



//-------------------------------------- Metadata

// 1: getMetadata ==>

var storageRef = firebase.storage().ref();
var forestRef = storageRef.child('images/forest.jpg');


forestRef.getMetadata().then(function(metadata) {
  console.log(metadata);
  console.log('URL: ',metadata.downloadURLs[0]);
}).catch(function(error) {
  console.log(' Uh-oh, an error occurred!'); 
});


// 2: Update Metadata  ==>

var storageRef = firebase.storage().ref();
var forestRef = storageRef.child('images/forest.jpg');

var newMetadata = {
  timeCreated: Date.now(),
  contentType: 'image/jpeg'
}


forestRef.updateMetadata(newMetadata).then(function(metadata) {
   console.log(metadata);
    console.log('timeCreated: '+ metadata.timeCreated);
    console.log('contentType: '+ metadata.contentType);
}).catch(function(error) {
  console.log(' Uh-oh, an error occurred!');
});



// 3: Custom Metadata ==>

var storageRef = firebase.storage().ref();
var forestRef = storageRef.child('images/forest.jpg');
var newMetadata = {
  customMetadata: {
    'location': 'Amman, JO',
    'activity': 'Fase'
  }
}

forestRef.updateMetadata(newMetadata).then(function(metadata) {
   console.log(metadata);
}).catch(function(error) {
  console.log(' Uh-oh, an error occurred!');
});






    
