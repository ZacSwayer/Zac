(function (){
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

    (function(window) {
      var helloSpeaker = {};
      helloSpeaker.gretting = "Hello";
      helloSpeaker.Say = function Speak(names) {
        console.log(helloSpeaker.gretting + " " + names);
      }
      window.helloSpeaker = helloSpeaker;
      
  })(window);
  
  (function(window) {
   var byeSpeaker = {};
   byeSpeaker.gretting = "Good Bye";
   byeSpeaker.Say = function Speak(names) {
     console.log(byeSpeaker.gretting + " " + names);
   }
   window.byeSpeaker = byeSpeaker;

})(window);

 for (var i = 0; i < names.length;i++) {
         
       var firstname = names[i].charAt(0).toLowerCase();
      if (firstname === 'j') {
         byeSpeaker.Say(names[i]);
      } else {
         helloSpeaker.Say(names[i]);
      }
    }
})();