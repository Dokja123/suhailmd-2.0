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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/immedv.png" || "https://files.catbox.moe/immedv.png" ; // SET LOGO FOR IMAGE 
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
global.userImages= process.env.USER_IMAGES || "https://files.catbox.moe/5ufmuh.mp4" // "image" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_43_12_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDIyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDg0LFxuICAgICAgICA4NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDk4LFxuICAgICAgICAxMixcbiAgICAgICAgODEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNixcbiAgICAgICAgODYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQyLFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgODAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAzMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTM3LFxuICAgICAgICA2OSxcbiAgICAgICAgODQsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDU2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjE5LFxuICAgICAgICA5NSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDM4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTUyLFxuICAgICAgICA2LFxuICAgICAgICAzMyxcbiAgICAgICAgMjMwLFxuICAgICAgICA4NCxcbiAgICAgICAgODgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgODgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODgsXG4gICAgICAgIDU5LFxuICAgICAgICAyOCxcbiAgICAgICAgNyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTksXG4gICAgICAgIDIzNixcbiAgICAgICAgMjIsXG4gICAgICAgIDY0LFxuICAgICAgICA5LFxuICAgICAgICA3OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDksXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjUyLFxuICAgICAgICA5NyxcbiAgICAgICAgMCxcbiAgICAgICAgMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjM1LFxuICAgICAgICA3OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgODEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTI4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNixcbiAgICAgICAgMTM5LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDU4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDY4LFxuICAgICAgICAyMixcbiAgICAgICAgNzEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDczLFxuICAgICAgICA5NixcbiAgICAgICAgMjE4LFxuICAgICAgICA3NixcbiAgICAgICAgNjAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4LFxuICAgICAgICAxMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDc2LFxuICAgICAgICA4OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDYsXG4gICAgICAgIDExMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIyLFxuICAgICAgICA4OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDU1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgODMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTA2LFxuICAgICAgICA3MyxcbiAgICAgICAgMzksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA5MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA4NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTYwLFxuICAgICAgICA5OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTgwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA0MixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDExLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTA2LFxuICAgICAgICAzNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTA2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTcxLFxuICAgICAgICA1MCxcbiAgICAgICAgMjMwLFxuICAgICAgICA3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjE5LFxuICAgICAgICA0MSxcbiAgICAgICAgNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ2Ti8zRkFTbDN3dURSRDVRcWhvYW9zUVI1b01HYXlSVGQvR1ZlVjM4bXZ3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJmMDJmalZuVFJyVzNCQUJ6YVVVVVRnXCIsXG4gIFwicGhvbmVJZFwiOiBcImM5ZWJkNDA5LTk5YmEtNDBkMC04MTJiLTA4NzUzNTAwZmUyZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODcsXG4gICAgICA0OCxcbiAgICAgIDIxLFxuICAgICAgMjI5LFxuICAgICAgMjI3LFxuICAgICAgMTg1LFxuICAgICAgMTQzLFxuICAgICAgMTM1LFxuICAgICAgNDYsXG4gICAgICAzNixcbiAgICAgIDE3OCxcbiAgICAgIDEyOSxcbiAgICAgIDc0LFxuICAgICAgMjMsXG4gICAgICAxOTUsXG4gICAgICAzMyxcbiAgICAgIDIzMixcbiAgICAgIDYwLFxuICAgICAgMjEwLFxuICAgICAgMTk0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExOCxcbiAgICAgIDIyNCxcbiAgICAgIDExOCxcbiAgICAgIDEyMyxcbiAgICAgIDE3LFxuICAgICAgMjYsXG4gICAgICAxMzQsXG4gICAgICAzLFxuICAgICAgMzYsXG4gICAgICAyMzksXG4gICAgICAxNCxcbiAgICAgIDE3OCxcbiAgICAgIDE1LFxuICAgICAgNzksXG4gICAgICAyMjcsXG4gICAgICA0NCxcbiAgICAgIDUwLFxuICAgICAgMTk4LFxuICAgICAgMjE0LFxuICAgICAgMTc1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjFXQzFROEw0XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMjUwMTAwMTEzNTQzOjg4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI3NTIwNTQxNDI2MDk2Mzo4OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMR3hndWtHRUxxRXFyc0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkZlNG0rYngzVkdMd0lvUTczOXIxZXNmeTFqUlJaZEVJaTdCRWJQKzNaMVE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZ3AvT1ZYVTdpNHU5SU1nN0Zxb29wajBxQzd5T1RCRTV0b0t1VWh0STh1VkF6T1cvSmw5ZGJFYTArTlRDeEJ1c1plY3Y2OVdndEE1Y090SlpJcmNJQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaW1CQzJSdGZ4VGJwSzJMckpDM2w3ZUJtM2RxTFMxMXpLK3hCWWFIUDNtcTJWZ2g4TUdocUlCK2xjNGVlMHNEeWlRcVVkT3RKdlBFdFZIYVRPTk5OQWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjI1MDEwMDExMzU0Mzo4OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgODRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTAzMzQwNyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1HNVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTUc1Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiNVdWYXZNSVM1dGdnVWR5QitmVHFWa1RoRjJWbFdBSE94a3NCeXg0L0d5WT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODMwODUyNzgxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzM0ODE4Mjc2NDk5XCJ9Igp9"  // PUT your SESSION_ID 


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
