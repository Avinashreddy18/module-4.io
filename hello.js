(function(window){
  var speak="Hello";
  var hellospeaker=function(name){
    console.log(speak+" "+name);
  }
  window.hellospeaker=hellospeaker;
})(window);
