const { SlashCommandBuilder } = require('@discordjs/builders');
const {joinVoiceChannel, getVoiceConnection } = require('@discordjs/voice');
const ytdl = require('ytdl-core');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('play')
        .setDescription('play a youtube music'),
    async execute(interaction) {
        connection = joinVoiceChannel({
            channelId: interaction.channel.id,
            guildId: interaction.channel.guild.id,
            adapterCreator: interaction.channel.guild.voiceAdapterCreator,
        });
        connection = getVoiceConnection(interaction.channel.guild.id);
    }
}
