const { SlashCommandBuilder } = require('@discordjs/builders');
const axios = require('axios');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('pat')
        .setDescription('print a waifu pat'),
    async execute(interaction) {
    axios.get('https://api.waifu.pics/sfw/pat')
        .then(res => {
            return interaction.reply({
                content: res.data.url
            });
        })
    }
}
