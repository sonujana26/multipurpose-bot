const { Client, Message, MessageEmbed } = require('discord.js');
const pretty = require('pretty-ms');

module.exports = {
    name: 'uptime',
    description: "Returns information about Olympus's Uptime",
    emoji: '🕘',
    userperm: ['SEND_MESSAGES'],
    botperm: ['SEND_MESSAGES'],
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        const botMember = await message.guild.members.fetch(client.user.id);
        const embed = new MessageEmbed()
            .setTitle(`🕘 Uptime`)
            .setDescription(`\`\`\`yml\nStatus : Online\nUptime : ${pretty(client.uptime)}\n\`\`\``)
            .setColor(botMember.displayHexColor);

        message.channel.send({ embeds: [embed] });
    },
};

