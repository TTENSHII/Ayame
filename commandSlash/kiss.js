const { SlashCommandBuilder } = require('@discordjs/builders');
const axios = require('axios');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('kiss')
        .setDescription('print a kiss picture'),
    async execute(interaction) {
    axios.get('https://api.waifu.pics/sfw/kiss')
        .then(res => {
            return interaction.reply({
                content: res.data.url
            });
        })
    }
}
