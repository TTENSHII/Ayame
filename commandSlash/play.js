const { SlashCommandBuilder } = require('@discordjs/builders');
const { joinVoiceChannel, createAudioPlayer, createAudioResource } = require('@discordjs/voice');
const ffmpeg = require('ffmpeg');
const ytdl = require('ytdl-core');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('play')
        .setDescription('play a music')
        .addStringOption(option => option.setName('url').setDescription('url of the music')),
    async execute(interaction) {

        const connection = joinVoiceChannel({
            channelId: interaction.member.voice.channel.id,
            guildId: interaction.guild.id,
            adapterCreator: interaction.guild.voiceAdapterCreator
        })

        const url = interaction.options.getString('url');
        if (!url) {
            return interaction.reply({
                content: 'You need to input a url.',
                ephemeral: true
            });
        }

        const stream = ytdl(url, {
            filter: 'audioonly'
        });

        const player = createAudioPlayer();
        const resource = createAudioResource(stream);
        resource.volume = 0.5;
        player.play(resource);
        connection.subscribe(player);

        player.on('error', err => {
            console.error(err);
            connection.disconnect();
        });
            
        player.on('finish', () => {
            connection.disconnect();
        });

        return interaction.reply({
            content: 'Playing music'
        });
    }
}
