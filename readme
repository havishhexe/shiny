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

`shine.js` does 3 things when it loads:

1. Injects a `<style>` tag with the `.shine` CSS into the page
2. The CSS puts `overflow: hidden` on `.shine` and adds a white gradient streak via `::after` that animates left to right
3. Automatically finds every `<a>` tag and adds the `shine` class to it

The user literally just needs the script tag — nothing else.

---

## Usage

```html
<body>
  <a href="#">My link</a>

  <script src="https://cdn.jsdelivr.net/npm/shine-links@latest/shine.js"></script>
</body>
```

To apply to any non-link element, just add the class:

```html
<h1 class="shine">Hello</h1>
```

Or via JS:

```js
document.querySelector("h1").classList.add("shine");
```

---

## Install options

**CDN — recommended, no install:**
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

**Download directly from GitHub:**
Grab `shine.js` from this repo and host it yourself.

---

## Customization

If you're using the CDN you can't edit `shine.js` directly — override `.shine::after` in your own CSS instead:

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
| `rgba(...)` | Streak color | white `0.55` opacity |

**Match streak color to your text color:**

| Text color | Value |
|---|---|
| White | `rgba(255, 255, 255, 0.5)` |
| Black | `rgba(0, 0, 0, 0.12)` |
| Gold | `rgba(255, 200, 0, 0.5)` |
| Red | `rgba(255, 0, 0, 0.5)` |

---

## Common mistakes

**❌ Script in `<head>`**

The script must go before `</body>`, not in `<head>`. If it's in `<head>` the elements don't exist yet when the script runs.

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

**❌ Calling a function**

There's no `new ShineLinks()`, no `.init()`, no API to call. It runs automatically.

```js
// wrong
new ShineLinks('.shine');
ShineLinks.init();

// correct — nothing, it just works
```

**❌ Overriding `.shine` in CSS**

Don't redefine `.shine` — it breaks `overflow: hidden` and causes a visible box around the text. Style your links using `a {}` instead.

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

`shine.js` does 3 things when it loads:
1. Injects a `<style>` tag with the `.shine` CSS into the page
2. The CSS puts `overflow: hidden` on `.shine` and adds a white gradient streak via `::after` that animates left to right
3. Automatically finds every `<a>` tag and adds the `shine` class to it

**Rules:**
1. Script tag goes before `</body>`, not in `<head>`
2. Do NOT call any function — it runs automatically
3. Do NOT override `.shine` in CSS — style links with `a {}` only
4. To customize, override `.shine::after` in the user's own CSS
5. Streak color should match the text color — change the `rgba` value accordingly

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
