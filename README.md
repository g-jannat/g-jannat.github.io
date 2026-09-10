# Gazi Jannatul Ferdous — Standalone Local Portfolio

এটি একটি standalone local version। এখানে কোনো Manus runtime, Manus analytics, Manus link, অথবা “Made with Manus” branding নেই। VS Code-এ folder খুলে সরাসরি চালানো যাবে।

## VS Code-এ চালানোর সবচেয়ে সহজ নিয়ম

১. ZIP extract করুন।

২. VS Code খুলে **File → Open Folder** থেকে `gazi-jannatul-ferdous-portfolio-local` folder নির্বাচন করুন।

৩. VS Code-এ **Terminal → New Terminal** খুলুন।

৪. Terminal-এ চালান:

```bash
pnpm install
pnpm dev
```

যদি `pnpm` command না থাকে, আগে চালান:

```bash
corepack enable
corepack prepare pnpm@10 --activate
```

তারপর আবার:

```bash
pnpm install
pnpm dev
```

৫. Terminal-এ যে URL দেখাবে, সাধারণত সেটি হবে:

```text
http://localhost:5173/
```

Chrome-এ URLটি খুললেই portfolio দেখা যাবে।

## বন্ধ করার নিয়ম

VS Code Terminal-এ click করে `Ctrl + C` চাপুন। আবার চালাতে `pnpm dev` দিন।

## Build check

```bash
pnpm check
pnpm build
```

## Content edit করার জায়গা

Portfolio content edit করতে `client/src/pages/Home.tsx` খুলুন। Colors, font, spacing এবং responsive CSS edit করতে `client/src/index.css` খুলুন। Page title এবং metadata edit করতে `client/index.html` খুলুন।
