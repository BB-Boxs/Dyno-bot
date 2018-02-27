const Discord = require("discord.js");

var bot = new Discord.Client();
var BOT_TOKEN = "NDE3NzI3NzE2ODAwOTg3MTU2.DXXRHQ.t7lS8RLQSiObYj_fsYl02bFOFTs";
const prefix = "?";

function generateHex() {
	return '#' + Math.floor(Math.random( )* 16777215).toString(16);
}

var fortunes = [
	"yes",
	"no",
	"maybe",
	"idk",
	"cunt",
	"fuck u",
	"nuh"
]

bot.on("ready", function() {
	console.log("ready");
});

bot.on("guildMemberAdd", function(member) {
	member.guild.channels.find("name", "welcome_goodbye").sendMessage(member.toString() + " welcome!");

	member.addRole(member.guild.roles.find("name", "Member"));

	member.guild.createRole({
		name: member.user.username,
		color: generateHex(),
		permissions: []
	}).then(function(role) {
		member.addRole(role);
	});
});

bot.on("kick", function(message, user) {
	if (message.author.permissions["kickMembers"]) {
		if (message.content.startsWith(prefix + "kick")) {
			kickMember(user);
		}
	}
});


bot.on("message", function(message) {
	if (message.author.equals(bot.user)) return;

	if (!message.content.startsWith(prefix)) return;




	var args = message.content.substring(prefix.length).split(" ");

	switch (args[0].toLowerCase()) {
		case "ping":
			message.channel.sendMessage("Pong xDDDDDDDD");
			return;
		case "hello":
			message.channel.sendMessage("noidkbenishsjkhdlshdlskj");
			return;
		case "henlo":
			message.channel.sendMessage("bluarawarrawradwradrwdrdwrarwrarw");
			return;
		case "8ball":
			if (args[1]) {
				message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
			} else {
				message.channel.sendMessage("Can't read that, sorry!");
			}
			return;
		case "info":
			message.channel.sendMessage("This is the real Dyno bot that's in development by BB-Box#4072. Add him if you need any help.");
			return;
		default:
			message.channel.sendMessage("Invalid command");
	}
});

bot.login(process.env.BOT_TOKEN);
