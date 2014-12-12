// var user["name"] = process.argv[2];
var WSS = require("ws").Server;
var server = new WSS({port:3000});
var clients = [];
var msgLog = [];
var namListS = [];

server.on("connection" , function(ws){
  console.log("there has been a connection.")
  clients.push(ws);
  msgLog.forEach(function(msg){ws.send(msg)})
  ws.on("message" , function(msg){
    var hash = JSON.parse(msg);
    var index = clients.indexOf(ws);
    namListS[index] = hash.name;
    hash["namList"] = namListS;
    msgLog.push(msg);
    msgOut = JSON.stringify(hash);
    console.log(hash.name + ": " + hash.message);
    console.log(namListS);
    clients.forEach(function(user){user.send(msgOut)});

  })
  ws.on("close" , function(){
    var escapee = clients.indexOf(ws);
    clients.splice(escapee,1);
    clients.forEach(function(user){user.send("A user has left the room")})

  })
})
