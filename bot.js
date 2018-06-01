const prefix = "m!";
const discord = require ('discord.js');

var client = new discord.Client(); 

const token = process.env.TOKEN;

client.on("guildMemberAdd", function(member) {
    member.guild.channels.find("name", "general").sendMessage("Welcome! " + member.toString() + " to our wonderful discord server! Please make sure to read the #rules!");
    
    member.addRole(member.guild.roles.find("name", "Member"));
});

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
        let embeda = new Discord.RichEmbed()
        .setTitle("This is an Embed")
        .setDescription("It's cool!")
        .setColor(0x0000ff);
        
        return message.channel.send(embeda); 
        
    }
    
});

// THIS  MUST  BE  THIS  WAY
client.login (token);
