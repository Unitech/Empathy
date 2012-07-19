


var play = require('play');

var tmp = play.sound(__dirname + '/two.mp3',function() {
    // setTimeout(function() {
    // 	play.setVolume(0);    
    // }, 600);
});


play.increaseSlowly(function() {
    process.exit(1);
});


(function tmp() {
    setTimeout(function() {
	process.nextTick(tmp);
    }, 50);
})();

