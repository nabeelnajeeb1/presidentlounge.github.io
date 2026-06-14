# Mr. President Lounge – Meeting Assistant
**Power International Holding**

A self-contained, mobile-first web page that serves as the digital meeting assistant for the Mr. President Lounge. Built with HTML5, CSS3, JavaScript and Bootstrap 5.

## Files

| File | Purpose |
|---|---|
| `index.html` | The complete web application (design, content, logic) |
| `config.js` | All editable settings — URL, room name, mailbox, emails, logo |
| `README.md` | This guide |

## Run locally (Windows PC)

**Option A — Python (built into most systems):**
```
cd "E:\Lounge QRCode\President Lounge"
python -m http.server 8080
```

**Option B — Node.js:**
```
npx http-server "E:\Lounge QRCode\President Lounge" -p 8080
```

Then open: `http://localhost:8080`

## Test from mobile phones

1. Find your PC's LAN IP: open Command Prompt → `ipconfig` → note the IPv4 address (e.g. `192.168.1.100`).
2. On your phone (same Wi-Fi network), open: `http://192.168.1.100:8080`
3. The QR code on the page **auto-detects the URL it is served from**, so when the page is opened via the LAN IP, the QR code automatically points to that IP. Print or display that QR code for testing.
4. If Windows Firewall blocks access, allow inbound TCP port 8080 (or temporarily allow Python/Node through the firewall).

## Configuration (`config.js`)

| Setting | Default | Notes |
|---|---|---|
| `baseUrl` | `""` (auto-detect) | Leave empty for automatic QR URL. Set a fixed URL to override, e.g. `https://meeting.powerholding.com/pibboardroom` |
| `roomMailbox` | `pibboardroom@powerholding-intl.com` | Teams Room mailbox shown in Card 1 (tap-to-copy) |
| `itEmail` | `it.servicedesk@powerholding.com` | Help section + footer |
| `maxhubDownloadUrl` | `https://connect.maxhub.com/downloads` | Both download buttons |
| `logoImage` | `""` (text wordmark) | Set to e.g. `assets/pih-logo.png` to use the official logo |

## Migrate to production

1. Copy `index.html` and `config.js` to the corporate web server / SharePoint / intranet portal.
2. (Optional) Set `baseUrl` in `config.js` to the final URL — or leave empty; auto-detect works in production too.
3. (Optional) Add the official PIH logo file and set `logoImage`.
4. Regenerate/print the QR code shown on the page for the room placard.

No changes to `index.html` are needed.

## Notes

- Requires internet access for CDN assets (Bootstrap 5, Bootstrap Icons, fonts, QR library). For a fully offline intranet, download those files locally and update the `<link>`/`<script>` tags.
- OS detection automatically highlights the Windows or macOS download button.
- Fully responsive: phones, tablets, desktops. Touch-friendly buttons throughout.
