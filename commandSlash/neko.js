const { SlashCommandBuilder } = require('@discordjs/builders');
const axios = require('axios');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('neko')
        .setDescription('print a waifu neko'),
    async execute(interaction) {
    axios.get('https://api.waifu.pics/sfw/neko')
        .then(res => {
            return interaction.reply({
                content: res.data.url
            });
        })
    }
}
