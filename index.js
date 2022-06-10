require('dotenv').config();
const config = require('./config/config.json');
const fs = require('fs');
const { Client, Intents, Collection } = require('discord.js');

const bot = new Client({intents: [Intents.FLAGS.GUILDS]});
bot.commands = new Collection();

const handleCommand = require('./helpers/handleCommand');
const commandFiles = fs.readdirSync('./commandSlash').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commandSlash/${file}`);
	bot.commands.set(command.data.name, command);
}

bot.on('interactionCreate', interaction => {
	if (interaction.isCommand())
		handleCommand(bot, interaction);
});

bot.once('ready', () => {
	bot.user.setPresence({
        activities: [{
            name: config.activityName,
            type: config.activityType
        }],
        status: config.status
    })
	console.log(`Ready as ${bot.user.username}`);
});

bot.login(process.env.TOKEN);
