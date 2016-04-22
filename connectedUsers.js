
function ConnectedUsers() {
  this.connectedUsers = {}
}

ConnectedUsers.prototype.updateUser = function(socketId, facePositionObject) {
  //console.log(socketId, facePositionObject.x, facePositionObject.y);
  this.connectedUsers[socketId] = {
    x: facePositionObject.x,
    y: facePositionObject.y
  }
}

ConnectedUsers.prototype.removeUser = function(socketId) {
  delete this.connectedUsers[socketId];
}

ConnectedUsers.prototype.getUsers = function() {
  return this.connectedUsers;
}



module.exports = ConnectedUsers;