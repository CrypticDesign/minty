const prefix = "m!";
const discord = require ('discord.js');

var client = new discord.Client(); 

const token = "NDQ4NjkxNDIwODEyMDE3Njkx.DeZ0Tw.4m2ZWMI4ZBFvxRyfwy7FXZQ3zNk";

client.on('ready', () => {
    console.log('I am ready mate!');
    
});

client.on('message', message => {
    
    if (message.author.bot) return;
    
    msg = message.content.toLowerCase();
    
    if (msg.startsWith (prefix + 'ping')) {
        message.channel.send('Pong! ' + client.ping + "ms");
    }
    
    if (msg.startsWith (prefix + 'fortune')) {
        fortuneMessage = message.content.slice (9);
        number = 2;
        var random = Math.floor (Math.random() * (number - 1 + 1)) + 1; 
        switch (random) {
            case 1: message.channel.send('The fortune teller has found out your answer is **yes!**!'); break;
            case 2: message.channel.send('The fortune teller has found out your answer is **no**!'); break;
        }
    }
    
    if (msg.startsWith (prefix + 'help')) {
        message.author.send('**List of Commands** \n**w!help** - Gives you a List of Commands \n**w!ping** - Pong! \n**fortune [question]** - Find out the answer to your questions! (BETA)');
        
    }
    
    if (msg.startsWith (prefix + 'embed')) {
        var embed = new Discord.RichEmbed()
            .setDescription("Hello! This is an embed!");
        message.channel.sendEmbed(embed);
    }
    
});

// THIS  MUST  BE  THIS  WAY
client.login (token);
