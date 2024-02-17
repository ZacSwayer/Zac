(function(window) {
    var helloSpeaker = {};
    helloSpeaker.gretting = "Hello";
    helloSpeaker.Say = function Speak(names) {
      console.log(helloSpeaker.gretting + " " + names);
    }
    window.helloSpeaker = helloSpeaker;
    
})(window);

