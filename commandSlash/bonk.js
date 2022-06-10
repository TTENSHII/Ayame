const { SlashCommandBuilder } = require('@discordjs/builders');
const axios = require('axios');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('bonk')
        .setDescription('print a bonk'),
    async execute(interaction) {
    axios.get('https://api.waifu.pics/sfw/bonk')
        .then(res => {
            return interaction.reply({
                content: res.data.url
            });
        })
    }
}
