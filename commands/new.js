const { tlang, getAdmin, prefix, Config, sck, fetchJson, runtime,cmd } = require('../lib')
const { MessageType, Mimetype } = require("@adiwajshing/baileys");
let { dBinary, eBinary } = require("../lib/binary");
const { Sticker, createSticker, StickerTypes } = require("wa-sticker-formatter");
const fs = require('fs')
const axios = require('axios')
 //---------------------------------------------------------------------------

 const PastebinAPI = require("pastebin-js");
pastebin = new PastebinAPI("c4SZHta-e2T0B0hR9DeeGgGZGSZ-A7tO");
cmd({
    pattern: "صفحة",
    filename: __filename,
},
async(Void, citel) => {
    if(!citel.quoted) return citel.reply('رد على رسالة، يعني ارسل نصك ورد عليها بالامر')
    let data = await pastebin.createPaste(citel.quoted.text, "jeje <3")
    let pasteKey = data.split('/').slice(-1)[0] // extract paste key from the returned data
    let rawLink = `https://pastebin.com/raw/${pasteKey}` // generate raw link
    citel.reply('تم ادخل الرابط\n'+rawLink)
}
);

 cmd({
    pattern: "بنتر",
    filename: __filename,
},
async(Void, citel, text) => {
    if (!text) return reply("اكتب عن وش تبحث بالانجليزي.") && Void.sendMessage(citel.chat, {
        react: {
            text: '❌',
            key: citel.key
        }
    })
    try {
        anu = await pinterest(text)
        result = anu[Math.floor(Math.random() * anu.length)]
        let buttonMessage = {
            image: {
                url: result
            },
            caption: ` `,
            footer: tlang().footer,
            headerType: 4,
            contextInfo: {
                externalAdReply: {
                    title: `تمم`,
                    body: `${Config.ownername}`,
                    thumbnail: log0,
                    mediaType: 2,
                    mediaUrl: ``,
                    sourceUrl: ``
                }
            }
        }
        return Void.sendMessage(citel.chat, buttonMessage, {
            quoted: citel
        })
    } catch (e) {
        console.log(e)
    }
})



cmd({
 pattern: "قطط",
 filename: __filename,
},
async (Void, citel) => {
 try {
   const response = await axios.get("https://api.thecatapi.com/v1/images/search");
   const imageUrl = response.data[0].url;
   await Void.sendMessage(citel.chat, {image: { url: imageUrl }});
 } catch (error) {
   console.error(error);
   await citel.reply("خطأ");
 }
});

cmd({
 pattern: "حيوانات",
 fromMe: true,
},
async (Void, citel) => {
 try {
   const response = await axios.get("https://api.unsplash.com/photos/random", {
     params: {
       query: "animals",
       client_id: "xAxA4SsnCLw9WA7pnxiR3D8LbgMUSQ8N8UEx2wtYsg4",
     },
   });
   const imageUrl = response.data.urls.regular;
   await Void.sendMessage(citel.chat, {image: { url: imageUrl }});
 } catch (error) {
   console.error(error);
   await message.client.sendMessage(message.jid, "خطأ", MessageType.text);
 }
});

cmd({
 pattern: "بوكيمون",
 filename: __filename,
},
async (Void, citel) => {
 try {
   const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=1118");
   const randomPokemonIndex = Math.floor(Math.random() * response.data.results.length);
   const randomPokemonUrl = response.data.results[randomPokemonIndex].url;
   const pokemonResponse = await axios.get(randomPokemonUrl);
   const pokemonName = pokemonResponse.data.name;
   const pokemonImageUrl = pokemonResponse.data.sprites.other["official-artwork"].front_default;
   const pokemonStats = pokemonResponse.data.stats;
   const pokemonLevel = Math.floor(Math.random() * 100) + 1;
   const pokemonPower = pokemonStats.reduce((total, stat) => total + stat.base_stat, 0);
   await Void.sendMessage(citel.chat, {
     image: { url: pokemonImageUrl },
     caption: `الاسم: ${pokemonName}!\n\nالمستوى: ${pokemonLevel}\nالقوة: ${pokemonPower}`
   });
 } catch (error) {
   console.error(error);
   await citel.reply("خطأ");
 }
});


