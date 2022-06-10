const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user-info')
		.setDescription('Display info about yourself.'),
	async execute(interaction) {
		return interaction.reply(
            `Your username:${interaction.user.username} ${interaction.user.discriminator}\nYour ID: ${interaction.user.id}\nUser created at: ${interaction.user.createdAt}\n${interaction.user.displayAvatarURL()}`
		);
	},
};
