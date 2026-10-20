# Agenciy (Artemis clone)

Клон главной [artemis.framer.media](https://artemis.framer.media) на Next.js + TypeScript + Tailwind CSS + Framer Motion.

## Запуск

```bash
npm install
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000).

## Структура

- `app/page.tsx` — главная (все секции)
- `components/sections/` — Hero, Services, About, Projects, Process, Awards, Team, Pricing, Testimonials, FAQ, Contact
- `components/layout/` — Header (overlay menu), Footer
- `components/motion/` — RevealText, Appear, Marquee
- `data/content.ts` — тексты и данные
- `public/assets/` — видео, логотипы, изображения

Страницы `/about`, `/projects`, `/blogs`, `/contact` — заглушки для этапа 2.
