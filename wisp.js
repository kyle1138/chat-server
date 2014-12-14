var wisp = function(wisp){
  if(wisp.slice(0,8) === "/whisper"){
    var wTarget = -1;
    for(var wc = 0; wc < namList.length; wc++ ){
      if(namList[wc] === wisp.slice(8,namList[wc].length){
        wTarget = wc;
        console.log(wc + " is the whisper target");
      }
      if (wTarget <0){
        ws.send("User does not exist.")
      }else clients[wTarget].send("PRIVATE")
    }
  }else{return wisp;}
};
