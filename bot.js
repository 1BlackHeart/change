const Eris = require("eris");
var x5bzteam = new Eris("mfa.XMWpvZHezUKW9du-oS9Xqt6cWt76_OCG-SxeEnvs8vJXzzzmnzZDqzIogEbZk6p7-Dk6U0poP3i752xf2XGt");
x5bzteam.on("ready", () => {
    console.log("Yo! Changer [ON]");
    onstart();
});
x5bz = "355599060540981249";
nick = "A B D U L L A H";
function onstart(){
    var v1 = nick.split('');
    var counter;
    var i=0;
var x5bz2 = ' ';
  var x5bz3 =   setInterval(function(){
     
     if (i == v1.length){
     clearInterval(x5bz3);
     onstart()
      return;
     }
     var v2 = v1[i];
    x5bz2 += v2;
    x5bzteam.editNickname(x5bz, x5bz2);
 
        i++;
   
     }, 1000);
}
x5bzteam.connect();
