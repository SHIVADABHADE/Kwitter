
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBiWGbxmCX_k6NQqRu45mYzpPnYNK1ttW8",
      authDomain: "kwitter-7885f.firebaseapp.com",
      databaseURL: "https://kwitter-7885f-default-rtdb.firebaseio.com",
      projectId: "kwitter-7885f",
      storageBucket: "kwitter-7885f.appspot.com",
      messagingSenderId: "769322987926",
      appId: "1:769322987926:web:b8a5a447544aed9aec6db7"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
     user_name=localStorage.getItem("user_name");
     document.getElementById("user_name").innerHTML="wellcome "+user_name+"!";
     function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
purpose:"We are going to add Shiva's room"
      })
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html"
     }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("roomname- "+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)'> #"+Room_names+"</div><hr";
document.getElementById("output").innerHTML+=row
      //End code
      });});}
getData();

function redirecttoroomname(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html"
}
