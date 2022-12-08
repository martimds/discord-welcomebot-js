const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('teste')
		.setDescription('Testa o bot!'),
	async execute(interaction) {
		await interaction.reply('funciona!');
	},
};