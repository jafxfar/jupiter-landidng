export type BlogPost = {
  slug: string;
  title: string;
  dek: string;
  date: string;
  cover: string;
  heroImage: string;
  bannerImage: string;
  sections: {
    title?: string;
    paragraphs: string[];
    bullets?: string[];
  }[];
};

export const blogs: BlogPost[] = [
  {
    slug: "ui-trends",
    title: "Тренды UI в дизайне",
    dek: "Что формирует интерфейсы в этом году — и что остаётся важным вне моды.",
    date: "Июнь 2025",
    cover: "/assets/images/pages/blog-ui-trends.png",
    heroImage: "/assets/images/pages/blog-ui-hero.png",
    bannerImage: "/assets/images/pages/blog-ui-banner.png",
    sections: [
      {
        title: "Дизайн чище — но не пустой",
        paragraphs: [
          "Современный UI идёт к ясности: меньше декора, сильнее иерархия, типографика несёт больше бренда.",
          "Побеждают не те, кто гонится за каждым эстетическим приёмом, а те, кто убирает трение и сохраняет узнаваемый голос.",
        ],
      },
      {
        title: "Микровзаимодействия, которые окупаются",
        paragraphs: [
          "Анимация больше не украшение. Она подтверждает действия, учит паттернам и делает плотные продукты легче.",
        ],
        bullets: [
          "Обратная связь на каждое важное действие",
          "Переходы, которые сохраняют пространственную память",
          "Сдержанность — анимируем смысл, а не «хром»",
        ],
      },
      {
        title: "Персонально, предсказуемо и по-человечески",
        paragraphs: [
          "Интерфейсы подстраиваются под контекст, не становясь навязчивыми. Хорошая персонализация — полезный дефолт, а не слежка.",
          "Лучшие продукты остаются человечными: ясный текст, честные пустые состояния и пути, которые уважают внимание.",
        ],
      },
    ],
  },
  {
    slug: "designing-trends",
    title: "Как работать с трендами",
    dek: "Как использовать тренды как инструмент — а не как замену продуктовому мышлению.",
    date: "Март 2025",
    cover: "/assets/images/pages/blog-designing.png",
    heroImage: "/assets/images/pages/blog-designing.png",
    bannerImage: "/assets/images/pages/blog-ui-banner.png",
    sections: [
      {
        paragraphs: [
          "Тренды — полезный сигнал. Они показывают, где сходятся мастерство и технологии: стекло, сетки, выразительная типографика.",
          "Но запускать тренд без задачи пользователя — это декор. Начинайте с результата для человека, затем берите то, что усиливает этот результат.",
        ],
      },
      {
        title: "Практический фильтр",
        paragraphs: ["Перед тем как взять визуальный тренд, спросите:"],
        bullets: [
          "Улучшает ли он понимание?",
          "Масштабируется ли он по всему продукту?",
          "Будет ли он уместен через год?",
        ],
      },
    ],
  },
  {
    slug: "sketch-to-screen",
    title: "От эскиза до экрана",
    dek: "Спокойный путь от сырых идей до интерфейсов, готовых к продакшену.",
    date: "Апрель 2024",
    cover: "/assets/images/pages/blog-sketch.png",
    heroImage: "/assets/images/pages/blog-sketch.png",
    bannerImage: "/assets/images/pages/cta-bg.png",
    sections: [
      {
        paragraphs: [
          "Сильные продукты редко прыгают от видения сразу к отполированному UI. Между ними — структурированное исследование: эскизы, потоки и прототипы, которые дёшево ошибаются.",
          "Мы держим цепочку короткой: фреймы для истории, компоненты для единообразия и ранние фронтенд-проверки рисков.",
        ],
      },
    ],
  },
  {
    slug: "minimal-is-not-empty",
    title: "Минимализм — это не пустота",
    dek: "Минимальный дизайн — дисциплина акцента, а не нехватка идей.",
    date: "Май 2025",
    cover: "/assets/images/pages/blog-minimal.png",
    heroImage: "/assets/images/pages/blog-minimal.png",
    bannerImage: "/assets/images/pages/blog-ui-banner.png",
    sections: [
      {
        paragraphs: [
          "Пустое пространство — это решение. Оно защищает фокус, выстраивает иерархию и даёт интерактивным элементам воздух.",
          "Когда минимализм «не работает», обычно пропущена стратегия контента — а не «мало теней».",
        ],
      },
    ],
  },
  {
    slug: "the-art-of-visual",
    title: "Искусство визуала",
    dek: "Визуальное мастерство как преимущество продукта — композиция, контраст и эмоциональная ясность.",
    date: "Июнь 2024",
    cover: "/assets/images/pages/blog-visual.png",
    heroImage: "/assets/images/pages/blog-visual.png",
    bannerImage: "/assets/images/pages/mission.png",
    sections: [
      {
        paragraphs: [
          "Визуальный дизайн по-прежнему решает, доверят ли продукту в первые секунды.",
          "Арт-дирекшн, фото и движение должны поддерживать одну историю — а не соревноваться за внимание.",
        ],
      },
    ],
  },
];

export function getBlog(slug: string) {
  return blogs.find((b) => b.slug === slug);
}
