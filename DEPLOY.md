# Putting the book online — privately

The result: `lowfodmap.pages.dev` (or whatever you name it), which asks for
**your email and a one-time code** before it will show anyone anything.
Your recipes stay in a **private** GitHub repo. Nobody else gets in.

Two accounts, both free: GitHub (you have one) and Cloudflare (you'll make one).
Budget about 20 minutes. No terminal, all buttons.

---

## Part 1 · Private GitHub repo (5 min)

1. Go to [github.com/new](https://github.com/new)
2. **Repository name:** `lowfodmap`
3. Select **Private** — this matters, and unlike GitHub Pages, Cloudflare
   is perfectly happy reading a private repo.
4. Leave every checkbox unticked → **Create repository**
5. Click **uploading an existing file**
6. Drag in everything from this folder: `index.html`, `recipes.js`, `foods.js`,
   `robots.txt`, `_headers`, `README.md`, `DEPLOY.md`, and the `images` folder
7. Scroll down → **Commit changes**

Do **not** turn on GitHub Pages. That's the thing that would make it public.

---

## Part 2 · Cloudflare Pages (7 min)

1. Sign up at [dash.cloudflare.com/sign-up](https://dash.cloudflare.com/sign-up) — free
2. In the left sidebar: **Compute (Workers & Pages)**
3. **Create** → the **Pages** tab → **Connect to Git**
4. Click **Connect GitHub** and authorise Cloudflare.
   When GitHub asks which repositories, choose **Only select repositories**
   and pick just `lowfodmap` — don't grant access to everything.
5. Select the `lowfodmap` repo → **Begin setup**
6. Build settings — this is a plain HTML site, so there's nothing to build:
   - **Framework preset:** `None`
   - **Build command:** leave completely empty
   - **Build output directory:** `/`
7. **Save and Deploy**

After a minute you'll have a live URL: `lowfodmap.pages.dev`.
**It is public at this point.** Part 3 is what closes it.

---

## Part 3 · Cloudflare Access — the password (8 min)

1. Left sidebar → **Zero Trust**
2. It asks you to pick a team name. Anything — `aleksandra` is fine.
   This becomes `aleksandra.cloudflareaccess.com`, only used for the login screen.
3. Choose the **Free** plan (up to 50 users).
   It asks for a card to complete signup. It does not charge for the free tier.
4. Left sidebar → **Access** → **Applications** → **Add an application**
5. Choose **Self-hosted**
6. Fill in:
   - **Application name:** `LFM Kitchen`
   - **Session duration:** `1 month` — how long before it asks again.
     Pick the longest you're comfortable with; you don't want to re-login
     every time you're mid-recipe.
7. Under **Public hostname**:
   - **Subdomain:** `lowfodmap`
   - **Domain:** `pages.dev`
   - If a wildcard `*` appears in the subdomain box, **delete it**
8. **Next** → add a policy:
   - **Policy name:** `Just me`
   - **Action:** `Allow`
   - **Include** → selector **Emails** → type your email address
9. **Next** → leave **One-time PIN** enabled as the login method
10. **Save**

Now open `lowfodmap.pages.dev` in a private browser window. It should ask for
an email, send you a 6-digit code, and only then show the book. That's it working.

---

## Part 4 · On your phone

1. Open the URL in **Safari** (iPhone) or **Chrome** (Android)
2. Log in with the emailed code
3. **iPhone:** Share → *Add to Home Screen*.
   **Android:** ⋮ → *Add to home screen*

Opens like an app, full screen, no browser bars.

---

## Updating it later

Edit `recipes.js` in GitHub (pencil icon → paste → **Commit changes**).
Cloudflare notices the commit and redeploys in about 30 seconds. Nothing else to do.

---

## The one real trade-off

**Password protection costs you reliable offline use.** A login check needs the
network. Once you've logged in, your phone will usually serve the page from cache
for a while, but a kitchen with no signal is not guaranteed to work the way an
open site would.

If you find that annoying in practice, the alternatives are:

- Keep it as is, and take a screenshot of the recipe before you start cooking.
- Ask me to add a service worker, which caches the whole book on your phone after
  the first visit and makes it genuinely offline-capable behind the login.
- Drop the password and use an unlisted public site instead — reliable offline,
  but findable by anyone who has the URL.

Tell me which and I'll set it up.

---

## Why not GitHub Pages?

Because it cannot do what you asked for:

| Plan | Pages from a private repo? | Is the site private? |
|---|---|---|
| GitHub Free | No | — |
| GitHub Pro ($4/mo) | Yes | **No — still public** |
| GitHub Enterprise Cloud | Yes | Yes |

Repository visibility and site visibility are separate settings on GitHub. Even
paying for Pro gets you a private *repo* with a public *website*. Only Enterprise
Cloud can put a login in front of Pages, and that isn't sold to individuals.
Cloudflare gives you the same thing for nothing.
