var censor = function(string){
  stringCheck = ". " + string + "   .";
  var curse = [" shit " , " fuck " , " ass ", " cunt " , " dang "];
  for(var cc = 0 ; cc < curse.length ; cc ++){
  for(var i = 0; i < stringCheck.length - curse[cc].length ; i++){
    var inspect = stringCheck.slice(i,i + curse[cc].length);
    if(inspect === curse[cc]){
      string = "CENSORED!";
      return string;
    }
  }
}
return string.trim();
}

var strg = "assthis food is the shift mom";
var strb = "ass this food is the shift mom";
var strc = "I want to throw stuff fuck";
var strd = "I want to throw shitake";
var strk = "shit";

console.log(strg);
console.log(strb);

console.log(censor("  dang"));
console.log(censor(strb));
console.log(censor(strc));
console.log(censor(strd));
console.log(censor(strk));
