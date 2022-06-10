const { SlashCommandBuilder } = require('@discordjs/builders');
const axios = require('axios');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('highfive')
        .setDescription('print a highfive'),
    async execute(interaction) {
    axios.get('https://api.waifu.pics/sfw/highfive')
        .then(res => {
            return interaction.reply({
                content: res.data.url
            });
        })
    }
}
