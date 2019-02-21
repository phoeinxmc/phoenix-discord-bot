const commando = require("discord.js-commando");
const discord = require("discord.js");
const bot = new commando.Client();
const client = new discord.Client();
const TOKEN = "NTQwMjI0MTc3ODY5OTQ2OTEw.DzSbSg.AiJ5lxZR5BivHiNCPZoxc9lBOIg"


bot.registry.registerGroup("simple", "Simple");
bot.registry.registerGroup("music", "Music");
bot.registry.registerGroup("team","Team")
bot.registry.registerGroup("dorthions","Dorthions")
bot.registry.registerGroup("admin","Admin")
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

global.currentTeamMembers = [];

bot.on("guildMemberAdd", function(member)
{
    member.send("Welcome to the server");
    let memberRole = member.guild.roles.find("name", "member");
    member.addRole(memberRole);
    
});

bot.on("message", function(message){

    if(message.content == "hej")
    {
        message.channel.sendMessage("hej " + message.author + " hvordan har du det?");
    }
});

bot.on("ready",function(){
    console.log("===========");
    console.log("====bot====");
    console.log("====Is=====");
    console.log("===Ready===");
    console.log("===========");
})

bot.login(TOKEN);
