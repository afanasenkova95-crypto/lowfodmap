# Low FODMAP Kitchen

A personal recipe book, built as a website. Works on your phone, works offline
once loaded, and lives in GitHub so every change you make is published automatically.

## What's in this folder

| File | What it is | Do you edit it? |
|---|---|---|
| `index.html` | The book itself — layout, styling, search, everything | No |
| `recipes.js` | Every recipe | **Yes** — this is where recipes go |
| `foods.js` | The safe / avoid product lists | Occasionally |
| `images/` | Recipe photos (optional) | Yes, drop photos here |

The point of splitting them up: adding recipe #150 can never break the book,
because you're only ever touching a list.

---

## Putting it online — privately

See **DEPLOY.md** for the full click-by-click: a private GitHub repo, hosted by
Cloudflare Pages, with Cloudflare Access putting an email login in front of it.
About 20 minutes, both accounts free.

Short version of why not GitHub Pages: on a free account Pages requires a
**public** repo, and even on paid plans the published site stays publicly
reachable. Only GitHub Enterprise Cloud can put a login in front of a Pages
site. Cloudflare does it for free.

<details>
<summary>Old instructions — public GitHub Pages (only if you decide you don't need the password)</summary>

### Putting it online — 10 minutes, no terminal

### 1. Create the repository
- Go to [github.com/new](https://github.com/new)
- **Repository name:** `lowfodmap` (this becomes part of your web address)
- Choose **Public** — GitHub Pages is free for public repos
- Leave every checkbox unticked
- Click **Create repository**

### 2. Upload the files
- On the next page click **uploading an existing file**
- Drag in `index.html`, `recipes.js`, `foods.js`, `README.md` and the `images` folder
- Scroll down, click **Commit changes**

### 3. Turn on GitHub Pages
- Click **Settings** (top of the repo) → **Pages** (left sidebar)
- Under *Source*, choose **Deploy from a branch**
- Branch: **main**, folder: **/ (root)** → click **Save**
- Wait about a minute, then refresh. A green box appears with your link.

Your book is now live at:

```
https://YOUR-USERNAME.github.io/lowfodmap/
```

### 4. Put it on your home screen
- Open that link in **Safari** (iPhone) or **Chrome** (Android)
- **iPhone:** Share button → *Add to Home Screen*
- **Android:** ⋮ menu → *Add to Home screen*

It now opens like an app, full screen, no browser bars.

</details>

---

## Adding recipes later

**The easy way:** send me the screenshots. I'll return an updated `recipes.js`.
Then in GitHub: open `recipes.js` → pencil icon ✏️ → select all → paste the new
version → **Commit changes**. The site updates in about 30 seconds.

**Doing it yourself:** open `recipes.js`, copy one whole `{ ... }` block,
paste it below the last one, change the text. Keep the comma between blocks.

Every recipe needs a unique `id` and a `category` that exactly matches one of
the names in the `CATEGORIES` list at the top of the file.

### Adding a category
Add a line to `CATEGORIES` at the top of `recipes.js`:

```js
{ name: "Soups", icon: "🍲", blurb: "Warm and gentle" },
```

That's it — it appears on the home screen straight away.

### Adding photos
Drop the image into the `images/` folder, then in the recipe write:

```js
image: "images/my-photo.jpg",
```

Keep photos under about 500 KB each so the book stays fast on mobile data.

---

## House rules every recipe follows

1. **Low FODMAP first** — garlic becomes garlic-infused oil, onion becomes green
   spring-onion tops or asafoetida, honey becomes maple syrup or stevia.
2. **Low fat second** — bake, steam or poach rather than fry; 1 tsp of oil per
   serving as the ceiling; lean cuts, skin off, visible fat trimmed; skimmed
   lactose-free dairy.
3. **Sugar becomes stevia** — everywhere, including in baking where it works.
4. **Calories and macros on every dish** — per serving and per 100 g.
5. **Personal exceptions honoured** — cottage cheese and long-cook wheat pasta
   are not eliminated. They're listed at the top of the Foods page.
6. **Photo-only recipes go in unchanged** — if a photographed recipe already
   suits the diet, it's filed under its category exactly as it came.

Every adapted recipe carries a **What was changed** note, so you can see the
call I made and overrule it.

## Fonts and offline use

The book pulls three typefaces from Google Fonts. They cache after the first load,
so the book still looks right offline once you've opened it — and if they ever fail
to load, it falls back to your device's own fonts and stays perfectly readable.

## A note on the food lists

Portion size is the whole point of low FODMAP. Most foods aren't simply safe or
unsafe — they're safe *up to an amount*. The lists in `foods.js` were compiled in
August 2026 from Monash University guidance, but Monash revises its thresholds as
new testing comes in, so the Monash FODMAP app stays the definitive source.

This book is a personal reference, not medical advice. Reintroduction and
long-term tolerance should be worked out with a dietitian.
