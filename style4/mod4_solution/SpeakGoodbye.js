(function(window) {
    var byeSpeaker = {};
    byeSpeaker.gretting = "Good Bye";
    byeSpeaker.Say = function Speak(names) {
      console.log(byeSpeaker.gretting + " " + names);
    }
    window.byeSpeaker = byeSpeaker;

})(window);


