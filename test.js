


var play = require('play');

play.sound({
    file :__dirname + '/two.mp3',
    volume : 0,
    soundcard : 'hw:0,0'
});

// setTimeout(function() {
//     play.setVolume(0);
// }, 500);

play.increaseSlowly(function() {
    process.exit(1);
});


(function tmp() {
    setTimeout(function() {
	process.nextTick(tmp);
    }, 50);
})();

