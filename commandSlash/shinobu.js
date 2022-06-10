const { SlashCommandBuilder } = require('@discordjs/builders');
const axios = require('axios');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('cry')
        .setDescription('print a cry'),
    async execute(interaction) {
    axios.get('https://api.waifu.pics/sfw/cry')
        .then(res => {
            return interaction.reply({
                content: res.data.url
            });
        })
    }
}