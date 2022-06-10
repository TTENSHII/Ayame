const { SlashCommandBuilder } = require('@discordjs/builders');
const axios = require('axios');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('nsfw')
        .setDescription('print a waifu neko'),
    async execute(interaction) {
    axios.get('https://api.waifu.pics/nsfw/neko')
        .then(res => {
            return interaction.reply({
                content: res.data.url
            });
        })
    }
}
