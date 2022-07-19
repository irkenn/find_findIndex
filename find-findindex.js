
function findUserByUsername(usersArray, username){
  return usersArray.find(function(i){
    return i.username === username; 
  })
}

function removeUser(usersArray, username){
  userNameIndex = usersArray.findIndex(function(i){
    return i.username === username;
    })
  output = usersArray[userNameIndex];
  if (output !== undefined){
    usersArray.splice(userNameIndex, 1);
    } 
  return output;
}
