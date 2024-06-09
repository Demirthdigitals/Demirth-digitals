const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lagos,Nigeria."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nigeria";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

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
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,915xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "9159868548,915xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_02_55_06_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTk2LFxuICAgICAgICAwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDQ5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTI2LFxuICAgICAgICA2NixcbiAgICAgICAgNTEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjA1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDk3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDc1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTU2LFxuICAgICAgICA5MixcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDksXG4gICAgICAgIDQ1LFxuICAgICAgICAxNCxcbiAgICAgICAgMjEzLFxuICAgICAgICA4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTg5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDExLFxuICAgICAgICAxOTksXG4gICAgICAgIDUyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDY5LFxuICAgICAgICAxNixcbiAgICAgICAgMTQyLFxuICAgICAgICA0MCxcbiAgICAgICAgMjAxLFxuICAgICAgICA1MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxODAsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTk5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzUsXG4gICAgICAgIDUyLFxuICAgICAgICAxOTksXG4gICAgICAgIDM0LFxuICAgICAgICA4MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg0LFxuICAgICAgICA2NixcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjksXG4gICAgICAgIDE3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzksXG4gICAgICAgIDE3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDYyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTAyLFxuICAgICAgICAzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDQwLFxuICAgICAgICAzLFxuICAgICAgICAxMSxcbiAgICAgICAgMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDQyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTIyLFxuICAgICAgICA1NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIzMixcbiAgICAgICAgNDUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDM2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNixcbiAgICAgICAgMyxcbiAgICAgICAgODAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTIzLFxuICAgICAgICA1MCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDc1LFxuICAgICAgICA0NixcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTksXG4gICAgICAgIDcxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjMxLFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA4MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MyxcbiAgICAgICAgMTQwLFxuICAgICAgICA1MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDI2LFxuICAgICAgICA5OSxcbiAgICAgICAgMixcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDUzLFxuICAgICAgICA4NSxcbiAgICAgICAgODEsXG4gICAgICAgIDEyLFxuICAgICAgICA0MixcbiAgICAgICAgMzcsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDgsXG4gICAgICAgIDY2LFxuICAgICAgICAyNDksXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDgyLFxuICAgICAgICA1NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjA4LFxuICAgICAgICA3NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDQsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTAyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDUxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDgsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOTksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRWZ6ZWxFTGc2dXd4dURpVmtBOWZGTmhVdmx2UnpJQ3c0bXdtZDZBakF4ST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MTU5ODY4NTQ4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwMzMzQzNFN0Q0MzMzODExMjlDRDM2Q0I3MjYyMzU3OVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTc5MDE3MDBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiclcyek9ycFNUaGEzaUNIZWlOcUlxd1wiLFxuICBcInBob25lSWRcIjogXCI5ZmU0YWZlOC0xMmNmLTQwMzUtYmI5Ni02ZTA1OWViMmZjNjRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzksXG4gICAgICAxMTMsXG4gICAgICAyMyxcbiAgICAgIDkyLFxuICAgICAgMTU0LFxuICAgICAgOTAsXG4gICAgICAxOTksXG4gICAgICAyMzEsXG4gICAgICAyMjcsXG4gICAgICAxMTEsXG4gICAgICAyNDksXG4gICAgICAxMjEsXG4gICAgICAyMzYsXG4gICAgICA3OCxcbiAgICAgIDIyMSxcbiAgICAgIDcyLFxuICAgICAgMTQ2LFxuICAgICAgMjAsXG4gICAgICAxNTQsXG4gICAgICAxMDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQwLFxuICAgICAgMTg2LFxuICAgICAgNDEsXG4gICAgICAzNSxcbiAgICAgIDEzMCxcbiAgICAgIDE1MixcbiAgICAgIDUzLFxuICAgICAgODUsXG4gICAgICAzOCxcbiAgICAgIDgzLFxuICAgICAgMjA3LFxuICAgICAgMTYyLFxuICAgICAgODYsXG4gICAgICAxMjgsXG4gICAgICAxLFxuICAgICAgMjI5LFxuICAgICAgMjExLFxuICAgICAgMTcwLFxuICAgICAgMjMwLFxuICAgICAgMTUzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlZQR0dDRzZaXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTU5ODY4NTQ4OjY3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI4MjIzNjA0MDgxODc5MDo2N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMK284S3NHRVBxeWxMTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImhLQ1RoMUdEYllsL1VGV01XTWNRMWptK0lKOHF6cGRUNnozQ1BoWEdIV3c9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiT21CQWp4bHkwOXFQWEF5a0hyRVUya1BESHNqdU54a09iMklBdlFqYlppTnpuVmJsU1daamxsdDNhVUJUTDNRQktuSlVTeG9Pc3BoVSsxN0lmSXJTRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwieDhNWnhXcEQzeDJBVnVJTzNRdlVCelJSQ0dtUzFuSjdMRVJ6MEN3Qk0zS0ZFeWdUWTUzYkgyVnJWU0NqNXJxRUpZRTFldXI4c2JUZ2RvUGIvbG1OQ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTE1OTg2ODU0ODo2N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEwOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE3OTAxNjk0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRU5yXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFTnIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJIWnNnVzJsR21ucE9OYktUYWV6UVY2TnRLRmNWR3RWTmpaYTZSZERSZ21vPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3MDI2MzA0NTYsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNzg3NzUxMDk4M1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "MightyTech",
  ownername:process.env.OWNER_NAME|| "MightyTech",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
