const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('test')
        .setDescription('test command'),
    async execute(interaction) {
        await interaction.reply('hello');
    }
}
