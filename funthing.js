var fun = function(string){
  var fun = ["(table flip)" , "(umadbro)" , "(fu)"];
  var newFun = ["(╯°□°）╯︵ ┻━┻" , "¯\\_(ツ)_/¯" ,"╭∩╮（︶︿︶）╭∩╮"]
  for(var cc = 0 ; cc < fun.length ; cc ++){

    for(var i = 0; i < string.length - fun[cc].length ; i++){
      var inspect = string.slice(i,i + fun[cc].length);
      if(inspect === fun[cc]){
        string = string.slice(0,i) + newFun[cc] + string.slice(i + fun[cc].length , string.length);
      }
    }
  }
  return string.trim();
}


var str1 = "hi everybody, this is a test of the (fu)n string functio(fu)n."
var str2 = "(umadbro)hi everybody, this is a test of the fun string function."
var str3 = "hi everybody, this  (table flip) is a test of the fun string function."
var str4 = "hi everybody, this is a test of the fun s(umadbro)tring function."

console.log(fun(str1));
console.log(fun(str2));
console.log(fun(str3));
console.log(fun(str4));
