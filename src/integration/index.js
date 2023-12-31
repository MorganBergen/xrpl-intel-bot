// index.js
require('dotenv').config();
const { Client, Intents } = require('discord.js');
const { spawn } = require('child_process');

const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

// When the bot is ready
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

// When a message is received
client.on('messageCreate', async (msg) => {
    // Ignore messages from bots
    if (msg.author.bot) {
        return;
    }

    // Check if the message is a command for the Python script (e.g., '!ask')
    if (msg.content.startsWith('!ask')) {
        // Extract the question from the message content
        const question = msg.content.slice(5).trim();

        // Create a Python child process and pass the question as a command-line argument
        const pythonProcess = spawn('python3', ['llm-app-integrated/chat.py', question]);

        let response = '';

        // Capture the output of the Python script
        pythonProcess.stdout.on('data', (data) => {
            response += data.toString();
        });

        // Wait for the Python script to finish
        pythonProcess.on('close', (code) => {
            if (code === 0) {
                // If the Python script ran successfully, send the response back to the Discord channel
                msg.reply(response);
            } else {
                console.error(`Python script exited with code ${code}`);
            }
        });
    }
});

// Log in to Discord with the bot token
client.login(process.env.DISCORD_TOKEN);

