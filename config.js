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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_20_12_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTksXG4gICAgICAgIDAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI2LFxuICAgICAgICAxODYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgODcsXG4gICAgICAgIDEwLFxuICAgICAgICAzMixcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTUxLFxuICAgICAgICA1NixcbiAgICAgICAgNzksXG4gICAgICAgIDEyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDY2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAzOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDg4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTIyLFxuICAgICAgICAxLFxuICAgICAgICA0NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDUwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTE3LFxuICAgICAgICAzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQ1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDcyLFxuICAgICAgICA4NCxcbiAgICAgICAgOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDk4LFxuICAgICAgICAzMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTE2LFxuICAgICAgICA3NixcbiAgICAgICAgNzksXG4gICAgICAgIDE2MixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMzUsXG4gICAgICAgIDkyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTQwLFxuICAgICAgICAwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDk4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxODEsXG4gICAgICAgIDAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgNjEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE5LFxuICAgICAgICAxODUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjExLFxuICAgICAgICAzMSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDQ4LFxuICAgICAgICAzNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDY1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjM4LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjUsXG4gICAgICAgIDg5LFxuICAgICAgICAxODksXG4gICAgICAgIDMwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTMsXG4gICAgICAgIDk3LFxuICAgICAgICA1NCxcbiAgICAgICAgNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDU1LFxuICAgICAgICA5MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDU1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIxLFxuICAgICAgICAyMCxcbiAgICAgICAgNTksXG4gICAgICAgIDIyOCxcbiAgICAgICAgODIsXG4gICAgICAgIDE5NixcbiAgICAgICAgNjYsXG4gICAgICAgIDExMixcbiAgICAgICAgNjMsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMTZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAzNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDQwLFxuICAgICAgICA4MixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI3LFxuICAgICAgICAzOCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDM3LFxuICAgICAgICAzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDgyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDY3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjAzLFxuICAgICAgICA4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4NixcbiAgICAgICAgODYsXG4gICAgICAgIDgxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEsXG4gICAgICAgIDY3LFxuICAgICAgICAzMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDc2LFxuICAgICAgICAyMixcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODksXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTM1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMzFSRnovRkUzeGxFS0NDWUpIWjdMNStkMGYrZFVvM0xMbC8yWFNXTHFaUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZ1RCSWY1bjdTOGlyNFJ1WEtNOXUyUVwiLFxuICBcInBob25lSWRcIjogXCIyZjI4NWY0Yi1hMmJmLTQ5OTUtYjFkOC0yNjA1Y2IxN2RhNGNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzYsXG4gICAgICAyMDEsXG4gICAgICA1MSxcbiAgICAgIDEyMCxcbiAgICAgIDcsXG4gICAgICAyMzgsXG4gICAgICA1MyxcbiAgICAgIDIwMixcbiAgICAgIDYyLFxuICAgICAgMTg4LFxuICAgICAgMTg5LFxuICAgICAgMTU0LFxuICAgICAgMTk0LFxuICAgICAgNDIsXG4gICAgICAxMDAsXG4gICAgICA3OCxcbiAgICAgIDEyNSxcbiAgICAgIDk0LFxuICAgICAgMTAsXG4gICAgICAxMzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ2LFxuICAgICAgNzMsXG4gICAgICAxOCxcbiAgICAgIDQ2LFxuICAgICAgNDYsXG4gICAgICAxNDUsXG4gICAgICAzLFxuICAgICAgNzUsXG4gICAgICAyMTgsXG4gICAgICAyMDgsXG4gICAgICAyMjEsXG4gICAgICAxNTksXG4gICAgICAxMjEsXG4gICAgICA5MyxcbiAgICAgIDczLFxuICAgICAgMTEsXG4gICAgICAxNzUsXG4gICAgICAyMjUsXG4gICAgICAyMjQsXG4gICAgICAxNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJDUk01RlRGMlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjI1MDEwMDExMzU0Mzo3NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNzUyMDU0MTQyNjA5NjM6NzVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS1d4Z3VrR0VPMm80cm9HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJGZTRtK2J4M1ZHTHdJb1E3MzlyMWVzZnkxalJSWmRFSWk3QkViUCszWjFRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInlsY2Q4TlpvdXNwdjBwY3RPOVJMSGFkcitKRXpBbDhUWjJjMkxibnRoRnF5UWQ1L2xzaWpFeHdOVFl6bHc5akJLZy9DOXR1cGVld3V2bEs0RWM5YUFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImV0aWFSV213TjVOZ090STRRa2w4UFV6VU1zY2crTnI1WG01ajZ1TldmQkpWVUpBZnozNUdibkdQZ1l1QVBEUEZvRUFuLzVmaWh1WTRUZEs5VlR5RGhRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIyNTAxMDAxMTM1NDM6NzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgODQsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDg0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzM4NTg0MzBcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
