const { SlashCommandBuilder } = require('@discordjs/builders');
const axios = require('axios');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('smile')
        .setDescription('print a smile'),
    async execute(interaction) {
    axios.get('https://api.waifu.pics/sfw/smile')
        .then(res => {
            return interaction.reply({
                content: res.data.url
            });
        })
    }
}
