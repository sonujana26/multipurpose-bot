const { CommandInteraction, Client, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'story',
    description: 'Story of Olympus Bot',
    userperm: ['SEND_MESSAGES'],
    botperm: ['SEND_MESSAGES'],
    /**
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        try {
            const prefix = process.env.PREFIX; // Get the custom prefix from the environment variable

            const embed = new MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Olympus Bot Story')
                .setDescription(
                    'Hello I am Sonu Jana, the creator of this bot. The project was initially based to understand properly discord.js and working on slash featurs. I have explored many projects on git and got a idea to create this one. I have also added numerous additional features such as meme, welcome, ping, github, covid, etc. It has come to my attention that some individuals have accused me of simply stealing this code. I want to clarify that I have diligently rectified any errors, extensively updated the entire codebase (which took me days to accomplish), and made several significant improvements. Therefore, I kindly request that you refrain from making unfounded assumptions.'

                )
                .addField('Join Our Discord', '[Discord](https://discord.gg/theolympus69)', true)
                .addField('Follow me on GitHub', '[GitHub](https://github.com/sonujana26)', true)
                .setFooter(`Thank you for using the story command!`);
            // Process the interaction response in a single location
            const processInteractionResponse = () => {
                interaction.reply({ embeds: [embed] })
                    .catch(error => {
                        console.error('Failed to send interaction response:', error);
                    });
            };

            // Add your other event listeners or middleware for interactions
            // ...

            // Call the function to send the interaction response
            processInteractionResponse();
        } catch (error) {
            console.error(error);
        }
    },
};
