var firebaseConfig = {
      apiKey: "AIzaSyABkSVByV6kGoG8iiCZm6-3r8lK331v7sQ",
      authDomain: "classtest-821bb.firebaseapp.com",
      databaseURL: "https://classtest-821bb-default-rtdb.firebaseio.com",
      projectId: "classtest-821bb",
      storageBucket: "classtest-821bb.appspot.com",
      messagingSenderId: "971982953226",
      appId: "1:971982953226:web:04985dabc0719e067bf8f3",
      measurementId: "G-SNSFT2CT8J"
    };
  firebase.initializeApp(firebaseConfig); 
  user_name = localStorage.getItem("user_name"); 
  document.getElementById("user_name").innerHTML = "welcome" + user_name +"!";

function addRoom() {
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose: "Adding Room Name"  
});
localStorage.setItem("room_name", room_name);
window.location = "kwitter_room.html";
}
function getData() 
{
firebase.database().ref("/").on('value', function(snapshot) {
document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {
childKey  = childSnapshot.key;
Room_names = childKey;
console.log("room name + room_names");
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
});
});
}
getData();

function redirectToRoomName(name) {
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_room.html";
}