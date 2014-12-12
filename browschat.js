// var chatToo = new WebSocket("ws://kyle.princesspeach.nyc:3000");
var chatToo = new WebSocket("ws://localhost:3000");
var info = {namList:[]};
// var namList = {list:[]};

var talker = function(words){
  var li = document.createElement("li");
  li.innerHTML = words;
  var top = list.firstChild;
  list.insertBefore(li , top);
}

var userListGen = function(arr){
  usersList.innerHTML = "";
  arr.forEach(function(nam){
  var userNam = document.createElement("li");
  userNam.innerText = nam;
  usersList.appendChild(userNam);
  })


}
chatToo.addEventListener("message" , function(evt){
  mumble = JSON.parse(evt.data);
  if(mumble.message){
  talker(mumble.name + " : " + mumble.message);
  userListGen(mumble.namList);
  console.log(mumble.namList);
}else{talker(mumble);
  userListGen(mumble.namList);}
})

handle.addEventListener("keyup" , function(){
  info["name"] = handle.value
})

input.addEventListener("keyup",function(){
  info["message"] = input.value;
})

say.addEventListener("click", function(msg){
  var out = JSON.stringify(info);
  chatToo.send(out);
  input.value = ""
})

input.addEventListener("keydown",function(ent){
  if(ent.keyCode === 13){
    var out = JSON.stringify(info);
    chatToo.send(out);
    input.value = ""
  }
})

chatToo.addEventListener("open" , function(){
  console.log("connected");
  talker("connected");
  info["name"] = prompt("what is your username?");
  info.namList.push(info["name"]);
  handle.value = info["name"];
  info["message"] = handle.value + " has joined the chatroom."
  var join = JSON.stringify(info);
  chatToo.send(join);
})
