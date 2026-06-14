/* ============================================================
   POWER INTERNATIONAL HOLDING
   Mr. President Lounge - Meeting Assistant
   CONFIGURATION FILE
   ------------------------------------------------------------
   Edit the values below to change deployment settings.
   No changes to index.html are required.
   ============================================================ */

const PIH_CONFIG = {

  /* QR Code target URL.
     Leave EMPTY ("") to auto-detect the current page URL
     (works for localhost, LAN IP, and production automatically).
     Or set a fixed URL, e.g.:
       "http://192.168.1.100:8080"
       "https://meeting.powerholding.com/pibboardroom"          */
  baseUrl: "",

  /* Room identity */
  roomName: "Mr. President Lounge",
  companyName: "Power International Holding",

  /* Teams Room mailbox added as meeting participant */
  roomMailbox: "pibboardroom@powerholding-intl.com",

  /* IT Service Desk contact */
  itEmail: "it.servicedesk@powerholding.com",

  /* MAXHUB Connect download page (Windows & macOS) */
  maxhubDownloadUrl: "https://connect.maxhub.com/downloads",

  /* Optional logo image path (e.g. "assets/pih-logo.png").
     Leave EMPTY ("") to use the built-in text wordmark.        */
  logoImage: ""
};
