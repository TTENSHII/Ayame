const { SlashCommandBuilder } = require('@discordjs/builders');
const axios = require('axios');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('hug')
        .setDescription('print a waifu hug'),
    async execute(interaction) {
    axios.get('https://api.waifu.pics/sfw/hug')
        .then(res => {
            return interaction.reply({
                content: res.data.url
            });
        })
    }
}
