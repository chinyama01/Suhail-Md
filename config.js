const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "27642501314";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_12_06_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDk0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDMzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDkwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDY1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjEsXG4gICAgICAgIDIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQxLFxuICAgICAgICA1MSxcbiAgICAgICAgMTIyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjEzLFxuICAgICAgICA5NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDExMixcbiAgICAgICAgNjcsXG4gICAgICAgIDM2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDEsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTczLFxuICAgICAgICA5OSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjUzLFxuICAgICAgICA0NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTksXG4gICAgICAgIDUzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDY3LFxuICAgICAgICA1NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDg0LFxuICAgICAgICAzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTU3LFxuICAgICAgICA5OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDY5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY5LFxuICAgICAgICAyOCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjIwLFxuICAgICAgICA4MixcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzksXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyLFxuICAgICAgICAxMixcbiAgICAgICAgNjQsXG4gICAgICAgIDg4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDksXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxODAsXG4gICAgICAgIDc2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTk1LFxuICAgICAgICAzNixcbiAgICAgICAgMTAyLFxuICAgICAgICAzMixcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzLFxuICAgICAgICAzNixcbiAgICAgICAgODYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTc5LFxuICAgICAgICA2MyxcbiAgICAgICAgMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE0LFxuICAgICAgICA0NixcbiAgICAgICAgMTAsXG4gICAgICAgIDM1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDk0LFxuICAgICAgICA2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDkxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxODIsXG4gICAgICAgIDIzLFxuICAgICAgICAyMDksXG4gICAgICAgIDkzLFxuICAgICAgICA2NyxcbiAgICAgICAgODUsXG4gICAgICAgIDIwLFxuICAgICAgICAzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxLFxuICAgICAgICA3OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDU1LFxuICAgICAgICA3MixcbiAgICAgICAgMjYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTA5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTUsXG4gICAgICAgIDUxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNixcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDUsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTg0LFxuICAgICAgICAzMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDkyLFxuICAgICAgICAxODIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNSxcbiAgICAgICAgMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDExOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDc0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJVVUt5WFplSUpqUTN2T0M4TXN2WTdYMkdHSFNWL2R6RWpadnNhMW5VMFQ4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI3NjQyNTAxMzE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4MTQ4QzZFOUYxRjlDMzA0N0M1OUE0OEI0OTBBM0I3OFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTg4NzgzMzhcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNzY0MjUwMTMxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOTEyNzdFRTZCQzgxREM1RkZDQzZBMDQ4NjdGQjI0RjJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE4ODc4MzM5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjMxTEdRRWJQUTllYWdEQ2pieE1rS2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiOGUzYjA4MDMtMDU1NC00OTkwLTk1YWUtYWYxOTc3ZjBmMjUyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwMSxcbiAgICAgIDIzOSxcbiAgICAgIDE4OSxcbiAgICAgIDE3NSxcbiAgICAgIDc4LFxuICAgICAgMzMsXG4gICAgICA0MSxcbiAgICAgIDE3NyxcbiAgICAgIDEzMixcbiAgICAgIDIzMyxcbiAgICAgIDE3NSxcbiAgICAgIDQwLFxuICAgICAgMTE2LFxuICAgICAgNzEsXG4gICAgICAxMjUsXG4gICAgICAyNDksXG4gICAgICAzNixcbiAgICAgIDEyMCxcbiAgICAgIDE2MyxcbiAgICAgIDI4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM4LFxuICAgICAgMTU2LFxuICAgICAgODgsXG4gICAgICA4LFxuICAgICAgMTEzLFxuICAgICAgMTIzLFxuICAgICAgMTk2LFxuICAgICAgMjI1LFxuICAgICAgMTUxLFxuICAgICAgMzUsXG4gICAgICAyMjIsXG4gICAgICAxMzcsXG4gICAgICAxNTUsXG4gICAgICAxNDIsXG4gICAgICAxMjksXG4gICAgICAxODIsXG4gICAgICAyNTUsXG4gICAgICA0OCxcbiAgICAgIDExMixcbiAgICAgIDI0NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJMRUpWRzVSRlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjc2NDI1MDEzMTQ6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlNoYW1iZmxpeFwiLFxuICAgIFwibGlkXCI6IFwiMjQyOTcwOTk3ODgzMDI6OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMVCt1dmtCRVBpQTBMTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlNkdi9YbVlCbWIzTnFhbU84Z2Y4YmQ0cXpnWnpuTWUyVnB1NkhKTlBnd1U9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWDJBRWNTSlc1WmZJeEMwRU9qaUZud1N0UmV0Y1pUNlJUb2paNGcycm45RlN1QnQzZFdYS3Noc2p6VnBSakxXc0xwT0YzM1gxNTBpMkpuUVVWWE5qRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUmxUZ0F4ZDlDY2R0YUlUbFdYa20yVlo2TDJxR2wveFdHNVE2Tm1zSXEvSitlVmI4WDJ3ZW9Kekc1ZW1VOGJ2V0d0K3d4VXdwbW44VzJPRW9wMjl4QlE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjc2NDI1MDEzMTQ6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTg4NzgzMzMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQMnRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVAydC5qc29uIjogIntcImtleURhdGFcIjpcIkVWVy9haktxdUNpWUIvU1ZUdXZhT09uMloxYTErbSsrUnptbkg1OWY5cFE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTIzMTU3MzAwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTg4NzgzMzk0NThcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "#",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
