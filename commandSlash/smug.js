const { SlashCommandBuilder } = require('@discordjs/builders');
const axios = require('axios');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('smug')
        .setDescription('print a waifu smug'),
    async execute(interaction) {
    axios.get('https://api.waifu.pics/sfw/smug')
        .then(res => {
            return interaction.reply({
                content: res.data.url
            });
        })
    }
}
