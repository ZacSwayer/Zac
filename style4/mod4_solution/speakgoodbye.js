(function (window){

  var byeSpeaker = {};
  byeSpeaker.greeting = "Good Bye";
  byeSpeaker.Speak = function Speak(names) {
  console.log(byeSpeaker.greeting + " " + (names));
}
 window.byeSpeaker = byeSpeaker;
  })(window);
  