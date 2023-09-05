const { Client, Message, MessageEmbed, MessageButton, MessageActionRow } = require('discord.js');

module.exports = {
    name: 'support',
    description: 'Support the Developer by donating them!',
    aliases: ['donate'],
    emoji: '💳',
    userperm: ['SEND_MESSAGES'],
    botperm: ['SEND_MESSAGES'],
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        const embed = new MessageEmbed()
            .setTitle('Support the Developer!')
            .setDescription('Support Developer By Boosting his server!')
            .addField('OLYMPUS', '[Join Here](https://discord.gg/theolympus69)')
            .setColor('BLUE')
            .setTimestamp()
            .setFooter(message.author.tag, message.author.avatarURL());

        const crownEmoji = '👑'; // Crown emoji

        const button = new MessageButton()
            .setLabel('Boost Server')
            .setStyle('LINK')
            .setURL('https://discord.gg/theolympus69')
            .setEmoji(crownEmoji);

        const row = new MessageActionRow().addComponents(button);

        message.channel.send({ embeds: [embed], components: [row] });
    },
};
