const { SlashCommandBuilder } = require('@discordjs/builders');
const axios = require('axios');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('wave')
        .setDescription('print a wave'),
    async execute(interaction) {
    axios.get('https://api.waifu.pics/sfw/wave')
        .then(res => {
            return interaction.reply({
                content: res.data.url
            });
        })
    }
}
