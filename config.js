const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2250100113543";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_15_11_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDk5LFxuICAgICAgICA5MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDYwLFxuICAgICAgICA1NixcbiAgICAgICAgNTYsXG4gICAgICAgIDQwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTY4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTE2LFxuICAgICAgICA3MixcbiAgICAgICAgMTk0LFxuICAgICAgICAxNixcbiAgICAgICAgMzQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTU5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMzAsXG4gICAgICAgIDc3LFxuICAgICAgICAzMixcbiAgICAgICAgMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTUsXG4gICAgICAgIDQyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMTEyLFxuICAgICAgICA3MixcbiAgICAgICAgMTE4LFxuICAgICAgICA2NyxcbiAgICAgICAgNjksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTksXG4gICAgICAgIDc2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDk4LFxuICAgICAgICA2NSxcbiAgICAgICAgMjA3LFxuICAgICAgICA0OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMixcbiAgICAgICAgMjQsXG4gICAgICAgIDg5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDksXG4gICAgICAgIDEwMyxcbiAgICAgICAgOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDExOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3OCxcbiAgICAgICAgNyxcbiAgICAgICAgMTk4LFxuICAgICAgICA4MCxcbiAgICAgICAgNCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMCxcbiAgICAgICAgMjQxLFxuICAgICAgICA0NixcbiAgICAgICAgMjUwLFxuICAgICAgICA2MixcbiAgICAgICAgOTIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxODYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDY0LFxuICAgICAgICA0MyxcbiAgICAgICAgODIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTY5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTU2LFxuICAgICAgICA0OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDI3LFxuICAgICAgICA5OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDYxLFxuICAgICAgICA0MixcbiAgICAgICAgODMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDc5LFxuICAgICAgICAxODAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTY3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjM4LFxuICAgICAgICA4NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTI0LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDU3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDM0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDUwLFxuICAgICAgICAyNixcbiAgICAgICAgODYsXG4gICAgICAgIDcwLFxuICAgICAgICAyNixcbiAgICAgICAgNjEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA3MixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA4M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTA1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDkzLFxuICAgICAgICAyMTksXG4gICAgICAgIDExMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDY3LFxuICAgICAgICA1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDcyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI3LFxuICAgICAgICA4OCxcbiAgICAgICAgODQsXG4gICAgICAgIDg5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDM2LFxuICAgICAgICAxODAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTc2LFxuICAgICAgICAyMSxcbiAgICAgICAgMjUwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjI0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgODMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwNixcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjM3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjZ5NUxpenhoQXVPY2V5T2ovUFY3NkF5YmgzSE9jaU12dm5BOFZ3aUNibkk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjI1MDEwMDExMzU0M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRTRBQThCMjFFQ0FCQzlFMjYzMjJGRDFCOEY2NDM4ODZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMxNjYyMTI5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjI1MDEwMDExMzU0M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNEM2NEZBRDMyRkQyNTkyRDk2QjRDRjUwRjU4N0FERTJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMxNjYyMTMyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjA2NmhHT0dfUmN5WEE2WkhGYngtTEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMzdhYmViMjEtMTcxYi00NmFiLTljY2YtMTZiYjc5NWNlM2E1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5OCxcbiAgICAgIDIzNixcbiAgICAgIDIxNSxcbiAgICAgIDg3LFxuICAgICAgOTUsXG4gICAgICAyMDksXG4gICAgICA1NyxcbiAgICAgIDUsXG4gICAgICAxOTUsXG4gICAgICAyNTAsXG4gICAgICA2LFxuICAgICAgOTcsXG4gICAgICAxNzMsXG4gICAgICAxODgsXG4gICAgICAxNDgsXG4gICAgICAxMTUsXG4gICAgICA3NSxcbiAgICAgIDEyNCxcbiAgICAgIDIxNyxcbiAgICAgIDE4MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODEsXG4gICAgICA0OCxcbiAgICAgIDk5LFxuICAgICAgOTksXG4gICAgICAxNjgsXG4gICAgICAzMixcbiAgICAgIDY1LFxuICAgICAgMjUsXG4gICAgICAyMzIsXG4gICAgICA3MCxcbiAgICAgIDc3LFxuICAgICAgMTY5LFxuICAgICAgNjQsXG4gICAgICAxNzIsXG4gICAgICA0NCxcbiAgICAgIDE3NyxcbiAgICAgIDIzNixcbiAgICAgIDE4MSxcbiAgICAgIDgwLFxuICAgICAgMjE3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlM4Q0xKUDUzXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMjUwMTAwMTEzNTQzOjc5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI3NTIwNTQxNDI2MDk2Mzo3OUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJEaXdhdGVcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQbXdndWtHRUttaTNMa0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkZlNG0rYngzVkdMd0lvUTczOXIxZXNmeTFqUlJaZEVJaTdCRWJQKzNaMVE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSjdJei9KN00xU1B3NTc2U1NmaENDSjkrK2tmVHppUjRhbHdKRFdGR2Znbk5kQjQyd1Nkc0Jmb3BRQjlmcjZuQ3dqaU9IR3B1U2VieTRtYlJ1L2NqQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiS0Z5dkZic0c3eVlSMGFVZkFuY2x1d1h1NHAwN2ZvTkgwaWxxYkFndEt5UTJqUXRkNTU4cWJxL1ZDMXBOblNGTGRHS21vRDhXZXRyK0NqSEpEdHNtRFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjI1MDEwMDExMzU0Mzo3OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgODRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMTY2MjEyNSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUFvaVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQW9pLmpzb24iOiAie1wia2V5RGF0YVwiOlwiNGF5MC9OYkV0S1d4NVdyUW9DSmNSM2Z1Njh4Q0ZPSkVzbVFSYVFLbFFKbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODMwODUyNzI4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Diwate",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
