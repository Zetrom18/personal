var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
var Character = require('./character.js');
var Characters = new Character.objects();
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
  colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
	token: auth.token,
	autorun: true
});
bot.on('ready', function (evt) {
	logger.info('Connected');
	logger.info('Logged in as: ');
	logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
  // Our bot needs to know if it will execute a command
  // It will listen for messages that will start with `!`
  if (message.substring(0, 1) == '!') {
    var args = message.substring(1).split(' ');
    var cmd = args[0].toUpperCase();

    args = args.splice(1);
    switch(cmd) {
      // !test
      case 'TEST':
        test(user, userID, channelID, args);
	      break;
      case 'SAVE':
        save(user, userID, channelID);
	      break;
      case 'LOAD':
        load(channelID);
	      break;
      // Just add any case commands if you want to..
    }
  }

});

function save(user, userID, channelID) {
	Characters.save(user, userID);
	bot.sendMessage({
	  to: channelID,
	  message: 'Data saved.'
	});
}

function load(channelID) {
	Characters.load.then(function(message){
		bot.sendMessage({
		  to: channelID,
		  message: message
		})
	}, function(err){
		console.log(err);
	});
}

function test(user, userID, channelID, args){
	bot.sendMessage({
	  to: channelID,
	  message: 'Iniciem os testes!!!'
	});
	console.log(user);
	console.log(userID);
	console.log(channelID);
	for(i in args){
		console.log(args[i]);
	}
	console.log("++++ part 1 done ++++");

	load(channelID);
}