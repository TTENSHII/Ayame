require('dotenv').config();
const config = require('./config/config.json');
const fs = require('fs');
const { Client, Intents, Collection } = require('discord.js');

const ytdl = require('ytdl-core');

const { joinVoiceChannel, createAudioPlayer, createAudioResource } = require('@discordjs/voice');

const bot = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES]});

bot.on('messageCreate', message => {
    if(message.content === '!join') {
        const connection = joinVoiceChannel({
            channelId: message.member.voice.channel.id,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator
        })
        const stream = ytdl('https://www.youtube.com/watch?v=Mzk6KkyxXC8', {
            filter: "audioonly"
        });

        const player = createAudioPlayer();
        const resource = createAudioResource(stream);
        resource.volume = 0.5;
        player.play(resource);
        connection.subscribe(player);
    }
})

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
