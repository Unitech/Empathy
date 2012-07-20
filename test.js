//
// by Alexandre Strzelewicz
// Mini alarm with progressive sound -- Full of hack (cf node_modules/play/lib/play.js)
//
//


var play = require('play');
var cronJob = require('cron').CronJob;


new cronJob('00 28 3 * * *', function(){
    console.log('launched');

    play.sound({
	file :__dirname + '/two.mp3',
	volume : 0,
	soundcard : 'hw:0,0'
    }, function() {
	play.increaseSlowly(function() {
	    //process.exit(1);
	});

    });
    
    
}, null, true, "Europe/Paris");



//
// Event loop
//
(function tmp() {
    setTimeout(function() {
	process.nextTick(tmp);
    }, 50);
})();

