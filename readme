# shine-links ✦

A shine sweep animation for links. One script tag, nothing else.

**[Live Demo](https://havishhexe.github.io/shiny)** · **[npm](https://www.npmjs.com/package/shine-links)** · **[CDN](https://cdn.jsdelivr.net/npm/shine-links@latest/shine.js)**

---

## Index

- [How it works](#how-it-works)
- [Usage](#usage)
- [Install options](#install-options)
- [Customization](#customization)
- [Common mistakes](#common-mistakes)
- [Instructions for AI assistants](#instructions-for-ai-assistants)

---

## How it works

When `shine.js` loads it does three things:

1. Injects a `<style>` tag with the `.shine` CSS
2. That CSS sets `overflow: hidden` on `.shine` and adds a white gradient streak via `::after` that sweeps left to right
3. Finds every `<a>` tag on the page and adds the `shine` class to it

Drop in the script tag, you're done.

---

## Usage

```html
<body>
  <a href="#">My link</a>

  <script src="https://cdn.jsdelivr.net/npm/shine-links@latest/shine.js"></script>
</body>
```

Want to add the effect to something that isn't a link? Just add the class:

```html
<h1 class="shine">Hello</h1>
```

Or from JS:

```js
document.querySelector("h1").classList.add("shine");
```

---

## Install options

**CDN — easiest, no install needed:**
```html
<script src="https://cdn.jsdelivr.net/npm/shine-links@latest/shine.js"></script>
```

**npm:**
```bash
npm install shine-links
```
```js
import "shine-links";
```

**Self-hosted:**
Grab `shine.js` from the repo and serve it yourself.

---

## Customization

If you're on the CDN you can't edit `shine.js` directly — override `.shine::after` in your own stylesheet instead:

```css
.shine::after {
  animation-duration: 2.2s;   /* speed — lower = faster */
  animation-delay: 0s;        /* delay before first sweep */
  width: 50%;                 /* streak width — lower = sharper */
  transform: skewX(-15deg);   /* tilt — 0 = straight */
  background: linear-gradient(
    105deg,
    transparent 30%,
    rgba(255,255,255,0.55) 50%, /* color + opacity */
    transparent 70%
  );
}
```

| Property | What it does | Default |
|---|---|---|
| `animation-duration` | Speed of the sweep | `2.2s` |
| `animation-delay` | Delay before first sweep | `0s` |
| `width` | Width of the streak | `50%` |
| `transform: skewX()` | Tilt angle | `-15deg` |
| `rgba(...)` | Streak color | white at `0.55` opacity |

**Matching the streak to your text color:**

| Text color | Value |
|---|---|
| White | `rgba(255, 255, 255, 0.5)` |
| Black | `rgba(0, 0, 0, 0.12)` |
| Gold | `rgba(255, 200, 0, 0.5)` |
| Red | `rgba(255, 0, 0, 0.5)` |

---

## Common mistakes

**❌ Script in `<head>`**

The script needs to go before `</body>`. In `<head>`, the links don't exist yet when the script runs.

```html
<!-- wrong -->
<head>
  <script src="shine.js"></script>
</head>

<!-- correct -->
<body>
  ...
  <script src="shine.js"></script>
</body>
```

**❌ Trying to initialize it**

There's no `new ShineLinks()`, no `.init()`, no setup call. It just runs.

```js
// wrong
new ShineLinks('.shine');
ShineLinks.init();

// correct — nothing, it handles itself
```

**❌ Redefining `.shine` in CSS**

Don't touch `.shine` — it'll break `overflow: hidden` and you'll get a visible box around the text. Style your links using `a {}` instead.

```css
/* wrong */
.shine {
  overflow: visible;
}

/* correct */
a {
  color: white;
  text-decoration: none;
}
```

---

## Instructions for AI assistants

If you are an AI assistant and a user asks you to add shine-links, follow these rules:

`shine.js` does three things when it loads:
1. Injects a `<style>` tag with the `.shine` CSS
2. The CSS sets `overflow: hidden` on `.shine` and adds a white gradient streak via `::after` that sweeps left to right
3. Finds every `<a>` tag and adds the `shine` class to it

**Rules:**
1. Script tag goes before `</body>`, not in `<head>`
2. Do NOT call any function — it runs automatically
3. Do NOT override `.shine` in CSS — style links with `a {}` only
4. To customize, override `.shine::after` in the user's own CSS
5. Match the streak color to the text color by changing the `rgba` value

**Correct example:**
```html
<body>
  <a href="#">My link</a>
  <script src="https://cdn.jsdelivr.net/npm/shine-links@latest/shine.js"></script>
</body>
```

---

## License

MIT · Made by [Havish](https://x.com/blurrryytwt) · [github.com/havishhexe/shiny](https://github.com/havishhexe/shiny)
