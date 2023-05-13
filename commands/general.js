/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Secktor-Md 
 * @author : Suhail Tech Info <https://youtube.com/SuhailTechInfo>
 * @description : Secktor,A Multi-functional whatsapp bot Created By Suhail.
 * @version 0.0.6
 **/

const { tlang, botpic,cmd, prefix, runtime,Config } = require('../lib')
const axios = require('axios')
const speed = require('performance-now')
//---------------------------------------------------------------------------
cmd({
        pattern: "chat",
        desc: "chat with an AI",
        category: "general",
        use: '<Hii,Secktor>',
        filename: __filename,
    },
    async(Void, citel,text) => {
        let zx = text.length;
        if (zx < 8) {
            let {data} = await axios.get(`http://api.brainshop.ai/get?bid=167991&key=aozpOoNOy3dfLgmB&uid=[${citel.sender.split("@")[0]}]&msg=[${text}]`);
            return citel.reply(data.cnt);  
        }
        if (!text) return citel.reply(`Hey there! ${citel.pushName}. How are you doing these days?`);
        const { Configuration, OpenAIApi } = require("openai");
        const configuration = new Configuration({
            apiKey: Config.OPENAI_API_KEY || "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",
        });
        const openai = new OpenAIApi(configuration);
        const completion = await openai.createCompletion({
            model: "text-davinci-002",
            prompt: text,
            temperature: 0.5,
            max_tokens: 80,
            top_p: 1.0,
            frequency_penalty: 0.5,
            presence_penalty: 0.0,
            stop: ['"""'],
        });
        citel.reply(completion.data.choices[0].text);
    }
)
//---------------------------------------------------------------------------
cmd({
        pattern: "repo",
        alias: ["git", "sc", "script"],
        desc: "Sends info about repo.",
        category: "general",
        filename: __filename,
    },
    async(Void, citel) => {
        let { data } = await axios.get('https://api.github.com/repos/SamPandey001/Secktor-Md')
        let cap = `Hey ${citel.pushName}\n
*⭐ Total Stars:* ${data.stargazers_count} stars
*🍽️ Forks:* ${data.forks_count} forks
*🍁 Repo:* secktorbot.tech/repo
*Group:* secktorbot.tech/support
*Deploy Your Own:*-
 SecktorBot.tech/youtube`
        let buttonMessaged = {
            image: { url: await botpic() },
            caption: cap,
            footer: tlang().footer,
            headerType: 4,
            contextInfo: {
                externalAdReply: {
                    title: "Secktor-Repo",
                    body: "Easy to Use",
                    thumbnail: log0,
                    mediaType: 4,
                    mediaUrl: '',
                    sourceUrl: ``,
                },
            },
        };
        return await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
        });

    }
)
//---------------------------------------------------------------------------
cmd({
        pattern: "بوت",
        alias: ["about"],
        desc: "To check bot status",
        category: "general",
        filename: __filename,
    },
    async(Void, citel) => {
        const uptime = process.uptime();
        timestampe = speed();
        latensie = speed() - timestampe;
        let ter = `*⺀اوامر بوت زيرو رو⺀*
❀╎.بروفايل
*┇↜⟬ يجيبلك تفاصيلك ⟭*
❀╎.رانك
*┇↜⟬ تشوف مستواك ⟭*
❀╎.منشن
*┇↜⟬ لعمل منشن جماعي ⟭*
❀╎.مخفي
*┇↜⟬ لعمل منشن مخفي ⟭*
❀╎.ترقيه
*┇↜⟬ لترقية عضو عادي ⟭*
❀╎.تنزيل
*┇↜⟬ لتنزيل من منصب مشرف ⟭*
❀╎.حذف
*┇↜⟬ يحذف البوت الرسائل ⟭*
❀╎.قروب
*┇↜⟬ لاعدادات القروب ⟭*
❀╎.خالقروب
*┇↜⟬ لتغيير خلفية القروب ⟭*
❀╎.ملصق
*┇↜⟬ لعمل ملصق ⟭*
❀╎.ملصقي
*┇↜⟬ لصناعة ملصق بحقوقك ⟭*
❀╎.انذار
*┇↜⟬ يوزع انذارات ⟭*
❀╎.انذارات
*┇↜⟬ لمعرفة عدد انذاراتك ⟭*
❀╎.حذف_انذار
*┇↜⟬ لحذف احد الانذارات ⟭*
❀╎.مساعده
*┇↜⟬ يرسلك الدعم بالخاص ⟭*
❀╎.دمج
*┇↜⟬ لدمج اثنين ايموجي ⟭*
❀╎.الوقت
*┇↜⟬ لمعرفة وقت البوت ⟭*
❀╎.الروابط
*┇↜⟬ لطرد اللي يرسلو روابط ⟭*
❀╎.اختصار
*┇↜⟬ يختصر رابطك ⟭*
✯───｢الدعم｣────✯
｢  https://chat.whatsapp.com/LAASmxox5c75HILkYXe2AX  ｣
✯──｢منوعات｣───✯
❀╎.تطقيم
*┇↜⟬ يجلبلك تطقيمات ⟭*
❀╎.القروبات
*┇↜⟬ يجيب القروبات للمالك ⟭*
❀╎.الترحيب
*┇↜⟬ لتشغيل الترحيب ⟭*
❀╎.التوديع
*┇↜⟬ اتشغيل التوديع ⟭*
❀╎
*┇↜⟬ للعب اكس او ⟭*
✯──｢التسليه｣───✯
❀╎.نرد
*┇↜⟬ رمي النرد ⟭*
❀╎.بوكيمون
*┇↜⟬ صور وحوش البوكيمون ⟭*
❀╎.حيوانات
*┇↜⟬ صور حيوانات ⟭*
❀╎.قطط
*┇↜⟬ صور قطط ⟭*
❀╎.احزر
*┇↜⟬ تحزر شخصيات انمي ⟭*
❀╎.خلفية
*┇↜⟬ يعطيك خلفيات عشوائيه ⟭*
❀╎.اكس
*┇↜⟬ للعب اكس او ⟭*
❀╎.شبيهي
*┇↜⟬ يجيبلك شبيهك ⟭*
❀╎.س
*┇↜⟬ يعطيك سؤال ⟭*
❀╎.ح
*┇↜⟬ سؤال وجاوب بصراحه ⟭*
❀╎.هل
*┇↜⟬ تسأل البوت ⟭*
❀╎.كت
*┇↜⟬ للفعاليات⟭*
✯──｢البنك｣───✯
❀╎.ضف
*┇↜⟬ اضافة اموال للاعضاء ⟭*
❀╎.جرد
*┇↜⟬ اخذ مال من الاعضاء ⟭*
❀╎.اموالي
*┇↜⟬ معرفة مقدار مالك ⟭*
*⺀───النهايه───⺀*
`;
        let buttonMessaged = {
            image: {
                url: await botpic(),
            },
            caption: ter,
            footer: tlang().footer,
            headerType: 4,
            contextInfo: {
                externalAdReply: {
                    title: tlang().title,
                    body: `Bot-Status`,
                    thumbnail: log0,
                    mediaType: 2,
                    mediaUrl: ``,
                    sourceUrl: ``,
                },
            },
        };
        return await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
        });

    }
)
