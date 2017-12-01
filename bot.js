const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.on('message', msg => {
  if (msg.content.toLowerCase() === ',,sor') {
    msg.channel.sendMessage('**Sor Komutu Bakımda**');
  }
  });
  
      client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sea') {
    msg.channel.sendMessage(':regional_indicator_a: :regional_indicator_l: :regional_indicator_e: :regional_indicator_y: :regional_indicator_k: :regional_indicator_u: :regional_indicator_m:   :regional_indicator_s: :regional_indicator_e: :regional_indicator_l: :regional_indicator_a: :regional_indicator_m:');
  }
  });

    client.on('message', msg => {
  if (msg.content.toLowerCase() === 'bok') {
    msg.channel.sendMessage(':poop: ');
  }
  });

  client.on('message', msg => {
  if (msg.content.toLowerCase() === 'iyi geceler') {
    msg.reply('**İyi Geceler :wink: **');
  }
  });
  
  client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.react(':regional_indicator_a:'),
    msg.react(':regional_indicator_s:')
    msg.channel.sendMessage(':regional_indicator_a: :regional_indicator_l: :regional_indicator_e: :regional_indicator_y: :regional_indicator_k: :regional_indicator_u: :regional_indicator_m:   :regional_indicator_s: :regional_indicator_e: :regional_indicator_l: :regional_indicator_a: :regional_indicator_m:');
  }
  });
  
      client.on('message', msg => {
  if (msg.content.toLowerCase() === 'tunahan') {
    msg.channel.send('Hangi Tunahan ?')
	  .then(nmsg => nmsg.edit('**Hangi Tunahan ?**'))
	  .then(nmsg => nmsg.edit('**Dur Tahmin Edeyim**'))
	  .then(nmsg => nmsg.edit('**TunahanE. Dimi Doğrumu ?**'))
  }
  });
  
    client.on('message', msg => {
  if (msg.content.toLowerCase() === 'crawl canım') {
    msg.channel.sendMessage('Efn :D');
  }
  });
  
    client.on('message', msg => {
  if (msg.content === ',,sigara') {
    msg.channel.send(':smoking: :cloud::cloud::cloud:')
      .then(nmsg => nmsg.edit(':smoking: :cloud::cloud:'))
      .then(nmsg => nmsg.edit(':smoking: :cloud:'))
      .then(nmsg => nmsg.edit(':smoking: :cloud::cloud:'))
      .then(nmsg => nmsg.edit(':smoking: :cloud:'))
      .then(nmsg => nmsg.edit('**Sigaram bitti**'))
      .then(nmsg => nmsg.edit('**Sigara İçmeyiniz.** :no_smoking: :no_smoking: :no_smoking: :no_smoking: '));
  }
  });
  
          client.on('message', msg => {
  if (msg.content.toLowerCase() === 'oç') {
    msg.reply('Yasaklı Kelime :no_entry_sign: :no_entry_sign: :no_entry_sign:')
	msg.delete();
  }
  });
  
          client.on('message', msg => {
  if (msg.content.toLowerCase() === 'amk') {
    msg.reply('Yasaklı Kelime :no_entry_sign: :no_entry_sign: :no_entry_sign:')
	msg.delete();
  }
  });
  
          client.on('message', msg => {
  if (msg.content.toLowerCase() === 'mk') {
    msg.reply('Yasaklı Kelime :no_entry_sign: :no_entry_sign: :no_entry_sign:')
	msg.delete();
  }
  });
  
          client.on('message', msg => {
  if (msg.content.toLowerCase() === 'oç') {
    msg.reply('Yasaklı Kelime :no_entry_sign: :no_entry_sign: :no_entry_sign: ')
	msg.delete();
  }
  });
  
            client.on('message', msg => {
  if (msg.content.toLowerCase() === 'piç') {
    msg.reply('Yasaklı Kelime :no_entry_sign: :no_entry_sign: :no_entry_sign: ')
	msg.delete();
  }
  });

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(ayarlar.prefix)) return;

  let command = message.content.split(' ')[0];
  command = command.slice(ayarlar.prefix.length);

  let args = message.content.split(' ').slice(1);

  if (command === 'topla') {
    let numArray = args.map(n=> parseInt(n));
    let total = numArray.reduce( (p, c) => p+c);
    message.channel.sendMessage(total);
    message.react('✅')
  }
  if (command === 'çıkar') {
    let numArray = args.map(n=> parseInt(n));
    let total = numArray.reduce( (p, c) => p-c);
    message.channel.sendMessage(total);
    message.react('✅')
  }
  if (command === 'çarp') {
    let numArray = args.map(n=> parseInt(n));
    let total = numArray.reduce( (p, c) => p*c);
    message.channel.sendMessage(total);
    message.react('✅')
  }
  if (command === 'böl') {
    let numArray = args.map(n=> parseInt(n));
    let total = numArray.reduce( (p, c) => p/c);
    message.channel.sendMessage(total);
    message.react('✅')
  }
});

  client.on('message' , msg => {
  if (msg.content.toLowerCase() === prefix + "caps") {
  var cumleler= [ 'düzgün item seç http://prntscr.com/h0ob8s','siker vallaha http://prntscr.com/h0oaif', 'zengin oldun http://prntscr.com/h0o52a', 'yarragımıda yeseydin http://prntscr.com/h0o3ei', 'ezan okunuyor kafir. http://prntscr.com/h0o26p', 'desteklemeyen kaldımı :D http://prntscr.com/h0o0ii','20 tane lahmacun ver http://prntscr.com/h0nz1e', 'eueueue :smile: http://prntscr.com/gwm1du', 'eueueue :smile: http://prntscr.com/gwm24r', 'eueueueu :smile: http://prntscr.com/gwm2m6', 'qudur :smile: http://prntscr.com/gwm3aa', 'uçuyorum amk :smile: http://prntscr.com/gwm3sy', 'dedeye bak hele :smile: http://prntscr.com/h0nuxw' ];

var cumle = cumleler[Math.floor(Math.random() * cumleler.length)];
msg.channel.sendMessage(cumle);
  }
 });

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);
