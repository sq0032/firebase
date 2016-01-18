import $ from 'jquery';
import Firebase from 'firebase';

var myFirebaseRef = new Firebase("https://blazing-fire-2123.firebaseio.com/");
var usersRef = myFirebaseRef.child("users");
var newUsersRef = usersRef.push();
const usersRefKey = newUsersRef.key();

const authData = myFirebaseRef.getAuth();
console.log(authData);

if(!authData){
  myFirebaseRef.authAnonymously(function(error, authData) {
    if (error) {
      console.log("Login Failed!", error);
    } else {
      console.log("Authenticated successfully with payload:", authData);
    }
  });
}
  

var actions = {};
//console.log(newUsersRef);
// Attach an asynchronous callback to read the data at our posts reference
usersRef.on("value", function(snapshot) {
  actions.updatePlayerList(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

actions.joinGame = function(username){
  const data = {
    key: usersRefKey,
    name: username,
    active: true,
    join_datetime: new Date()
  };
  
  newUsersRef.set(data, function(error){
    if (error) {
      alert("Data could not be saved." + error);
    } else {
      actions.joingGameSuccess(data);
    }
  });
};

actions.joingGameSuccess = function(user){
  $(window).trigger({
    type: 'JOIN_GAME',
    user: user,
  });  
}

actions.leave = function(){
  
  newUsersRef.set({
    active: false
  });
}

actions.updatePlayerList = function(players){
  var player_arr = [];
  for(let key in players){
    player_arr.push(players[key])
  }
  player_arr = player_arr.filter(function(player){
    return player.active;
  });
  
  $(window).trigger({
    type: 'UPDATE_PLAYER_LIST',
    players: player_arr,
  });
};

actions.fetchUserList = function(users){
  
}

module.exports = actions;
