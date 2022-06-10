const { SlashCommandBuilder } = require('@discordjs/builders');
const axios = require('axios');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('cringe')
        .setDescription('print a cringe pic'),
    async execute(interaction) {
    axios.get('https://api.waifu.pics/sfw/cringe')
        .then(res => {
            return interaction.reply({
                content: res.data.url
            });
        })
    }
}
