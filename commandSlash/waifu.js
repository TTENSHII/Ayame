const { SlashCommandBuilder } = require('@discordjs/builders');
const axios = require('axios');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('waifu')
        .setDescription('print a waifu'),
    async execute(interaction) {
    axios.get('https://api.waifu.pics/sfw/waifu')
        .then(res => {
            return interaction.reply({
                content: res.data.url
            });
        })
    }
}
