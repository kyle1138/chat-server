var censor = function(string){
  stringCheck = "check  " + string.trim() + "  check";
  for(var cc = 0 ; cc < curse.length ; cc ++){
    for(var i = 0; i < stringCheck.length - curse[cc].length ; i++){
      var inspect = stringCheck.slice(i,i + curse[cc].length);
      if(inspect === curse[cc]){
        string = "CENSORED! AND KICKED!";
        kill = 1;
        return string;
      }
    }
  }
  return string.trim();
}
var WSS = require("ws").Server;
var server = new WSS({port:3000});
var curse = [" shit " , " fuck " , " ass ", " cunt " , " dang "];
var clients = [];
var msgLog = [];
var namListS = [];

server.on("connection" , function(ws){
  console.log("there has been a connection.")
  clients.push(ws);
  msgLog.forEach(function(msg){ws.send(msg)})

  ws.on("message" , function(msg){
    var hash = JSON.parse(msg);
    var kill = 0;
    var index = clients.indexOf(ws);
    namListS[index] = hash.name;
    hash["namList"] = namListS;
    console.log(hash.name + ": " + hash.message);
    hash.message = censor(hash.message);
    msgOut = JSON.stringify(hash);
    msgLog.push(msgOut);
    if(hash.message === "CENSORED! AND KICKED!"){
      ws.send("YOU HAVE BEEN KICKED");
      setTimeout(function(){ws.close()} , 1)
      console.log("death")}

    clients.forEach(function(user){user.send(msgOut)});

  })
  ws.on("close" , function(){
    var escapee = clients.indexOf(ws);
    clients.splice(escapee,1);
    namListS.splice(escapee,1);
    console.log("somebody left")
    clients.forEach(function(user){user.send("A user has left the room")})

  })
})
