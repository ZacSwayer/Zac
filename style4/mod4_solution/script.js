(function (){
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

    for (var i = 0; i < names.length;i++) {
         
       var firstname = names[i].charAt(0).toLowerCase();
      if (firstname === 'j') {
         byeSpeaker.Say(names[i]);
      } else {
         helloSpeaker.Say(names[i]);
      }
    }
})();