# THE 100TH HUNGER GAMES — CRISIS PORTAL
## Deployment & Operations Guide

---

## STEP 1: DEPLOY TO NETLIFY

1. Compress the entire `panem-crisis` folder into a **ZIP file**
   - On Mac: right-click → Compress
   - On Windows: right-click → Send to → Compressed (zipped) folder

2. Go to **netlify.com** → your site dashboard

3. Drag and drop the ZIP file onto the Netlify deploy area

4. Your site is live! Copy the URL (e.g. `https://amazing-name-123.netlify.app`)

5. Optionally rename your site: Site Settings → Site Details → Change site name

---

## STEP 2: FIREBASE SECURITY RULES

In Firebase Console → Realtime Database → Rules, paste this:

```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

(For a production event, tighten these after testing. For a one-day MUN session, open rules are fine.)

---

## STEP 3: INITIALIZE THE DATABASE

1. Go to `your-site.netlify.app/admin/dashboard.html`
2. Enter the Gamemaker password: **gamemaker100**
3. Click the **"Init DB"** button — this loads all 24 tributes and delegate starting credits
4. **Only do this once!**

---

## STEP 4: SHARE WITH DELEGATES

Send each delegate their login info:

| Delegate | Elite | Password |
|---|---|---|
| Delegate 1 | Aurelius Voss | voss2025 |
| Delegate 2 | Octavia Sterling | sterling2025 |
| Delegate 3 | Cassian Vire | vire2025 |
| Delegate 4 | Valentina Crest | crest2025 |
| Delegate 5 | Lucius Draven | draven2025 |
| Delegate 6 | Aurelia Fawn | fawn2025 |
| Delegate 7 | Magnus Halberd | halberd2025 |
| Delegate 8 | Celestia Wren | wren2025 |
| Delegate 9 | Tiberius Vale | vale2025 |
| Delegate 10 | Seraphina Lux | lux2025 |
| Delegate 11 | Atticus Crane | crane2025 |
| Delegate 12 | Vesper Montclair | montclair2025 |
| Delegate 13 | Caius Evermont | evermont2025 |
| Delegate 14 | Ophelia Sloane | sloane2025 |
| Delegate 15 | Dorian Golding | golding2025 |
| Delegate 16 | Lavinia Rosehart | rosehart2025 |
| Delegate 17 | Maximus Argent | argent2025 |
| Delegate 18 | Isolde Vesper | isolde2025 |
| Delegate 19 | Corvin Blackthorne | blackthorne2025 |
| Delegate 20 | Portia Bellamy | bellamy2025 |
| Delegate 21 | Hadrian Ashcroft | ashcroft2025 |
| Delegate 22 | Callista Marrow | marrow2025 |
| Delegate 23 | Orion Lockwood | lockwood2025 |
| Delegate 24 | Cornelia Plume | plume2025 |

---

## STARTING CREDITS

| Elite | Starting Credits |
|---|---|
| Atticus Crane | 500 ₡ |
| Dorian Golding | 450 ₡ |
| Aurelius Voss | 400 ₡ |
| Magnus Halberd | 400 ₡ |
| Corvin Blackthorne | 400 ₡ |
| Octavia Sterling | 350 ₡ |
| Lucius Draven | 350 ₡ |
| Vesper Montclair | 350 ₡ |
| Ophelia Sloane | 350 ₡ |
| Hadrian Ashcroft | 350 ₡ |
| Callista Marrow | 350 ₡ |
| Cassian Vire | 300 ₡ |
| Tiberius Vale | 300 ₡ |
| Caius Evermont | 300 ₡ |
| Maximus Argent | 300 ₡ |
| Isolde Vesper | 300 ₡ |
| Orion Lockwood | 300 ₡ |
| Seraphina Lux | 250 ₡ |
| Portia Bellamy | 250 ₡ |
| Cornelia Plume | 250 ₡ |
| Valentina Crest | 200 ₡ |
| Celestia Wren | 200 ₡ |
| Lavinia Rosehart | 200 ₡ |
| Aurelia Fawn | 150 ₡ |

---

## ACCESS URLS

| Page | URL |
|---|---|
| Delegate Login | `your-site.netlify.app/` |
| Delegate Portal | `your-site.netlify.app/delegate.html` |
| Crisis Staff Dashboard | `your-site.netlify.app/admin/dashboard.html` |
| Public Spectator Feed | `your-site.netlify.app/public/spectator.html` |

---

## CRISIS STAFF PASSWORDS

- **Gamemaker Dashboard:** `gamemaker100`
- **Chair View:** `chair100`

---

## DURING THE COMMITTEE SESSION

### Crisis Staff workflow:
1. Open `admin/dashboard.html` on your device
2. Click **Init DB** at the very start
3. Push feed updates every 10-15 minutes from the "Push Feed Update" panel
4. Use **Mark Fallen** to kill tributes (auto-fires cannon, updates stats, pushes feed)
5. Use **Advance Day** at end of each in-game day
6. Monitor the **Crisis Note Inbox** for delegate directives — mark resolved when handled
7. Reply to notes using the "Send Official Message" panel
8. Open/Close arena votes from the Vote Builder

### Sponsor item costs (₡):
- Food: 15 | Water: 10 | Medicine: 25 | Antidote: 35
- Knife: 30 | Bow: 50 | Sword: 55 | Trident: 75 | Axe: 45
- Armor: 60 | Intel: 20 | Camouflage: 25 | Rope: 15 | Fire Kit: 12
- Sleeping Bag: 20 | Quell Advantage: 100

### Adjusting credits:
- Use the Delegate Credits panel in the dashboard
- Add or subtract credits from any delegate at any time
- Delegates receive an automatic message when their balance changes

---

## TROUBLESHOOTING

**"Permission denied" errors:** Go to Firebase → Realtime Database → Rules → set `.read` and `.write` to `true`

**Delegates not seeing updates:** Check Firebase Console → Realtime Database to confirm data is being written

**Need to reset everything:** Go to Firebase → Realtime Database → delete all data → click Init DB again

---

*Glory to the Capitol. May the odds be ever in your favor.*
