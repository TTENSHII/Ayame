const { SlashCommandBuilder } = require('@discordjs/builders');
const axios = require('axios');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('dance')
        .setDescription('print a dance'),
    async execute(interaction) {
    axios.get('https://api.waifu.pics/sfw/dance')
        .then(res => {
            return interaction.reply({
                content: res.data.url
            });
        })
    }
}
