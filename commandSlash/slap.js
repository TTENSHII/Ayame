const { SlashCommandBuilder } = require('@discordjs/builders');
const axios = require('axios');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('slap')
        .setDescription('print a slap'),
    async execute(interaction) {
    axios.get('https://api.waifu.pics/sfw/slap')
        .then(res => {
            return interaction.reply({
                content: res.data.url
            });
        })
    }
}
