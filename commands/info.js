const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {

    let botembed = new Discord.RichEmbed()
    .setColor(botconfig.orange)
    .setTitle(message.guild.name)
    .addField("Created On", message.guild.createdAt)
    .setThumbnail(message.guild.iconURL)
    .addField("Members", message.guild.memberCount)
    .addField("Region", message.guild.region)
    .addField("Credits", "created by HeisenBERG#6584");

    message.delete().catch(O_o => {});
    message.channel.send(botembed);
 }

module.exports.help = {
  name: "info"
}
