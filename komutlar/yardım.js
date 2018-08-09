const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**Eğlence ve Kullanıcı Komutları:**", `HA!banned = Dene ve Gör! \nHA!avatarım = Avatarınınızı Gösterir. \nHA!herkesebendençay = Herkese Çay Alırsınız. \nHA!koş = Koşarsınız.\nHA!çayiç = Çay İçersiniz. \nHA!çekiç = İstediğiniz Kişiye Çekiç Atarsınız. \nHA!çayaşekerat = Çaya Şeker Atarsınız. \nHA!yumruh-at = Yumruk Atarsınız. \nHA!yaz = Bota İstediğiniz Şeyi Yazdırırsınız. \nHA!sunucuresmi = BOT Sunucunun Resmini Atar. \nHA!sunucubilgi = BOT Sunucu Hakkında Bilgi Verir. \nHA!kullanıcıbilgim = Sizin Hakkınızda Bilgi Verir. `)
  .addField("**Yetkilisi Komutlar**", `HA!ban = İstediğiniz Kişiyi Sunucudan Banlar. \nHA!kick  = İstediğiniz Kişiyi Sunucudan Atar. \nHA!unban = İstediğiniz Kişinin Yasağını Açar. \nHA!sustur = İstediğiniz Kişiyi Susturur. \nHA!oylama = Oylama Açar. \nHA!duyuru = Güzel Bir Duyuru Görünümü Sağlar.`)
  .addField("**Ana Komutlar**", "HA!yardım = BOT Komutlarını Atar. \nHA!bilgi = BOT Kendisi Hakkında Bilgi Verir. \nHA!ping = BOT Gecikme Süresini Söyler. \nHA!davet = BOT Davet Linkini Atar. \nHA!istatistik = BOT İstatistiklerini Atar.")
  .addField("**Yapımcı**", " **OR |💻OyuncuReisHD#0421** ")
  .setFooter('**--------------------------**')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
