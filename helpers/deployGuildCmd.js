require('dotenv').config();
const fs = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

const commands = [];
const commandFiles = fs.readdirSync('./commandSlash').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`../commandSlash/${file}`);
    console.log(`Loaded command : ${command.data.name}`);
    commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log('Deployment of guild commands...');
        await rest.put(Routes.applicationGuildCommands(process.env.CLIENTID, process.env.GUILDID), { body: commands });
        console.log('Successfully deployed guild commands.');
    } catch (error) {
        console.error(error);
    }
})();
