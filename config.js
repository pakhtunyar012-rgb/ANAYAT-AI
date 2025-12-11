const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ANAYAT-AI~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0k0WFl0NjRkbXo1b2tMeEJDNWZDdzFpT255Q3B2UDRpU0IvbzdGQW5Gdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibkFDSkk0NklBN0JXMk03UlpwZWc5aC9KbGlWVzZVbEIyUmEvcEpwbUF3az0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlTy94dHBCaWFqblphQjFSb3MxZ0JZUXRzVlgrWDVpcUFpbXJNQXEwMVdjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkRTZOc2pid01TMHJUV1AxSWNuZkh5RkNYeVR6ZldydGw4dXk2YmZGaUdrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllOWHdqWGlKZWNNb3VIMXg1L09aK1NiL3A2QnBvNS9tMXQrSE53S2VqVW89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iml3R2JLT0M5Wk9uVk93alpGb252azRML3JSNlgxd2x6N2VWOUJ4NWxUeW89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0tPWEgwL3RrVll6Q2t2bVk3SmRXc3dkWTVkKzVhdW45TWRzdHA4Vy9XOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRE4xSlI5cjZYSytldTJpUGthWDllTEtkUlloRi96QWJGMmNhZFFrWmVWVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilp3bm44WVNESWJ3bndxYUI0T01HZFNRbWFmaDZYZENJYU0wekNpYS92RWJnU1VyN3BpalBCdjQxTEJqdHNicVpHaU8zQ3lHalNleXVHdGVZRHBBSmdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE1LCJhZHZTZWNyZXRLZXkiOiJ6eS9MRmZPM0ZoVStua3luOXhCY05LNk50dnpCL0lCZ1poR3A2a3YvMHA4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzMwNzA1MTk4OEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQ0YxMjY4QjlEMUVGQTc0NUMwRTdGM0FFOEU4Q0M3NiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzY1NDU5MDIwfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJfOExyeEVkOVFkQ0o3SEFCRHFOUndnIiwicGhvbmVJZCI6IjkzYjk5MDNmLWY1NzctNGYwZC04MjVkLTJlOTU0NmQxMDEyYiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4MnpJbTd1enRRLzgzdDdRT0s1RlFZcXJTT0E9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUmdSNGRaYzZuRW1EdzJOOGcvNTJFWU51bFZNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjdWTkFEVlNEIiwibWUiOnsiaWQiOiI5MjMzMDcwNTE5ODg6M0BzLndoYXRzYXBwLm5ldCIsImxpZCI6IjEzMDgwODA0NDA5NzU1MDozQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSjZZL2QwQkVMcUk2OGtHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiMlpvc2pRUGpBOEpEeDNKZmZWVTFQZ0EySm56Y1k5dnhHTnU1eWNtc1NRRT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiS056TzR0LzA2dzM5ZkhBOHdPL2laNnB1NlNhSFFUUU40QTBTRmZNNnlRM1lNeGtld0pMZi9POVorRWt1eUlvSDhmd2pZY0lRTTlSaTV5Y3dQZm1TQlE9PSIsImRldmljZVNpZ25hdHVyZSI6IlVyRml6QzBuN0FDLzlPY2pDQWlHdXNlUGJaK0hwQkhkNVdvMUhVd1lHWjB5Tm1FU2o2emNjOElteW83d0tSTjFpWmNYZ0hTUUtHaEUzckQ2aXdvV2hBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMzA3MDUxOTg4OjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZG1hTEkwRDR3UENROGR5WDMxVk5UNEFOaVo4M0dQYjhSamJ1Y25KckVrQiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSUFnZ0YifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzY1NDU5MDE1LCJsYXN0UHJvcEhhc2giOiIzUjlaMzkifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY ANAYAT-AI 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/adhn5v.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "SHANII-AI",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "ANAYAT-AI",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923304873323",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*SHANII-ai*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Anayat-ai ❣️*",
// add bot owner name    
ALIVE_VID: process.env.ALIVE_VID || "https://files.catbox.moe/2myos8.mp4",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923452401207",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
