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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/nfmsbu.jpg" || "https://files.catbox.moe/nfmsbu.jpg" ; // SET LOGO FOR IMAGE 
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_41_11_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTQsXG4gICAgICAgIDc4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDMyLFxuICAgICAgICAxODEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMixcbiAgICAgICAgNzUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MixcbiAgICAgICAgMjEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNyxcbiAgICAgICAgODUsXG4gICAgICAgIDY4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTg3LFxuICAgICAgICA1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDU1LFxuICAgICAgICA4NixcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTM0LFxuICAgICAgICA4MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgNyxcbiAgICAgICAgMjQzLFxuICAgICAgICA0MCxcbiAgICAgICAgNixcbiAgICAgICAgMTM4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMixcbiAgICAgICAgMjMxLFxuICAgICAgICA5MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjAxLFxuICAgICAgICA1MixcbiAgICAgICAgMTE3LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODQsXG4gICAgICAgIDI3LFxuICAgICAgICA2OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjU1LFxuICAgICAgICA2OSxcbiAgICAgICAgODIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjU1LFxuICAgICAgICA2LFxuICAgICAgICA2NCxcbiAgICAgICAgNjksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDY4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDczLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDM4LFxuICAgICAgICAyNyxcbiAgICAgICAgNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1LFxuICAgICAgICA3MixcbiAgICAgICAgNDUsXG4gICAgICAgIDE1LFxuICAgICAgICAxNDksXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQzLFxuICAgICAgICA4NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzksXG4gICAgICAgIDIxMCxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTEwLFxuICAgICAgICA1NixcbiAgICAgICAgODYsXG4gICAgICAgIDMyLFxuICAgICAgICA3NCxcbiAgICAgICAgNjksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDksXG4gICAgICAgIDE0MixcbiAgICAgICAgMjE4LFxuICAgICAgICAxODksXG4gICAgICAgIDIyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA5NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAzMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MixcbiAgICAgICAgMTUxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTcwLFxuICAgICAgICA4NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDI5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjksXG4gICAgICAgIDIyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDcsXG4gICAgICAgIDk5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDU0LFxuICAgICAgICAyMixcbiAgICAgICAgOTUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDksXG4gICAgICAgIDYwLFxuICAgICAgICA4NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDcyLFxuICAgICAgICA4NixcbiAgICAgICAgMjI4LFxuICAgICAgICA5NCxcbiAgICAgICAgODcsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMjksXG4gICAgICAgIDE3LFxuICAgICAgICAxMDksXG4gICAgICAgIDE1LFxuICAgICAgICA5NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDc4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMzksXG4gICAgICAgIDE2NSxcbiAgICAgICAgODUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAzMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiYUVqREtNQlhLREhDSmRUSVI4QWJJS0ZGVzBaVERXRUFFTkJ6eWx1ZGFTND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiazhJNmdwMm9RRHlNSnJOd1RZSHNyUVwiLFxuICBcInBob25lSWRcIjogXCI1MDRjM2I2ZC01YjFiLTQ0NjctODQzZC0wNmZjNzc0NDgwZWFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjcsXG4gICAgICAxOTksXG4gICAgICAxMyxcbiAgICAgIDEyMixcbiAgICAgIDIxNCxcbiAgICAgIDc1LFxuICAgICAgNzksXG4gICAgICAxMDMsXG4gICAgICAyNDksXG4gICAgICAxMyxcbiAgICAgIDc3LFxuICAgICAgMjUwLFxuICAgICAgMTMwLFxuICAgICAgNTQsXG4gICAgICAxNCxcbiAgICAgIDI0LFxuICAgICAgMTQxLFxuICAgICAgNCxcbiAgICAgIDIxMCxcbiAgICAgIDE4MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyOCxcbiAgICAgIDEwNixcbiAgICAgIDc5LFxuICAgICAgMTIsXG4gICAgICAxNzQsXG4gICAgICAxOTQsXG4gICAgICA2MixcbiAgICAgIDQ5LFxuICAgICAgNDAsXG4gICAgICA0MSxcbiAgICAgIDIzNSxcbiAgICAgIDc3LFxuICAgICAgOSxcbiAgICAgIDE3LFxuICAgICAgMTgxLFxuICAgICAgMTYyLFxuICAgICAgMjI0LFxuICAgICAgMjI5LFxuICAgICAgOTcsXG4gICAgICAxNzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMllEUzc2RFdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIyNTAxMDAxMTM1NDM6MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjc1MjA1NDE0MjYwOTYzOjE4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lXeGd1a0dFTnVsazdvR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRmU0bStieDNWR0x3SW9RNzM5cjFlc2Z5MWpSUlpkRUlpN0JFYlArM1oxUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJMWmd4MzZPRG5HT2dxNGtvMXhYYVIrL3ZzOFNTeHJqSGw5eFIxWHlNaEZPZDNxY3FFeXdFeFpjTjQxLzFuNFZDMTRmUzMzMmhSZU9xU09KeGlzT0dEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJQQk1PaHZMUktOdURmL2lKbldQN1ZjY3piQU9wRnVreDF0ZHBIaFJySkY0VmV5dXlpK1pwNGQ1cUFMMlpEeldCUEJ1TmtZdk9GdGlWU2puN0FrMjJnZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMjUwMTAwMTEzNTQzOjE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA4NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMyNTYzNjc5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSlVOXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKVU4uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIyNlVtdTU4b2c2Q0I5RzZpWjU5anR0ZVJySXEreWVpWHdOYmFmcC9nQTVJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4MzA4NTI3NDAsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
