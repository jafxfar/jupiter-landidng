export const navLinks = [
  { label: "Услуги", href: "/#service" },
  { label: "О нас", href: "/about" },
  { label: "Проекты", href: "/projects" },
  { label: "Блог", href: "/blogs" },
  { label: "Контакты", href: "/contact" },
] as const;

export const hero = {
  title: "Идеи",
  titleAccent: "в продукт",
  subtitle:
    "© Мы превращаем идеи людей в цифровые продукты — быстро, вдумчиво и с фокусом на запуск",
  highlightWord: "быстро",
  cta: "Связаться",
  stripLabel: "запускаем цифровые",
  categories: ["Стратегия", "UX/UI", "MVP", "Рост"],
  featuredLabel: "Избранное",
  featuredCount: "(03)",
  featuredHref: "/projects/jupiter-hr",
};

export const services = {
  tag: "Услуги",
  titleLead: "Мы",
  title: "запускаем",
  description:
    "Мы помогаем людям превращать идеи в работающие цифровые продукты — от проверки гипотезы и дизайна до разработки MVP и первых пользователей.",
  items: [
    {
      num: "/01",
      title: "Стратегия продукта",
      description:
        "Помогаем сформулировать идею, ценность, аудиторию и понятный план первого запуска.",
    },
    {
      num: "/02",
      title: "UX/UI дизайн",
      description:
        "Проектируем интерфейсы, которые объясняют продукт, ведут пользователя и выглядят уверенно.",
    },
    {
      num: "/03",
      title: "MVP-разработка",
      description:
        "Собираем быстрые сайты, сервисы и приложения, которые можно тестировать с реальными пользователями.",
    },
    {
      num: "/04",
      title: "Запуск и рост",
      description:
        "Готовим продукт к рынку: аналитика, посадочные страницы, итерации и поддержка после старта.",
    },
  ],
};

export const about = {
  tag: "О нас",
  text: "Мы — команда из 7 человек: проектируем и запускаем цифровые продукты — внутренние платформы и решения под заказ. От идеи и MVP до релиза с реальными пользователями.",
  stats: [
    { label: "Проектов в портфеле", value: 6, suffix: "" },
    { label: "Лет опыта", value: 5, suffix: "+" },
    { label: "Лет в коммерции", value: 2, suffix: "+" },
  ],
};

export const projects = [
  {
    slug: "jupiter-hr",
    title: "Jupiter HR",
    description:
      "HR без таблиц и хаоса: найм, учёт и процессы команды в одном веб- и мобильном продукте. Уже в проде — с живыми пользователями.",
    tags: ["Веб + мобильное", "Внутренний продукт"],
    statuses: [
      { label: "Запущен", note: "Активные пользователи" },
      { label: "Внутренний продукт", note: "Команда Jupiter" },
    ],
    image: "/assets/images/projects/jupiter-hr/banner.png",
  },
  {
    slug: "brandmarket",
    title: "BrandMarket",
    description:
      "B2B-платформа под заказ: веб и мобильное приложение готовы к запуску. Прозрачный процесс — от задачи клиента до релиза.",
    tags: ["Веб + мобильное", "Под заказ"],
    statuses: [
      { label: "В процессе релиза", note: "Проект готов" },
      { label: "Под заказ", note: "B2B" },
    ],
    image: "/assets/images/projects/brandmarket/cover.webp",
  },
  {
    slug: "qadam-loyalty",
    title: "Qadam Loyalty",
    description:
      "Система лояльности на стадии MVP: быстрый запуск программы вознаграждений — веб и приложение без лишнего веса.",
    tags: ["Веб + приложение", "Внутренний продукт"],
    statuses: [
      { label: "MVP", note: "Первая рабочая версия" },
      { label: "Внутренний продукт", note: "Команда Jupiter" },
    ],
    image: "/assets/images/featured.png",
  },
];

export const process = {
  tag: "Процесс",
  titleLead: "Путь от",
  title: "идеи до продукта",
  description:
    "Мы работаем как продуктовая команда: быстро проясняем задачу, собираем понятный план и доводим решение до запуска без лишнего хаоса.",
  steps: [
    {
      num: "/01",
      title: "Разбор идеи",
      description:
        "Понимаем вашу задумку, аудиторию и проблему, которую должен решить будущий продукт.",
    },
    {
      num: "/02",
      title: "Прототип",
      description:
        "Собираем структуру, сценарии и интерфейс, чтобы быстро увидеть продукт до разработки.",
    },
    {
      num: "/03",
      title: "MVP",
      description:
        "Разрабатываем рабочую первую версию с ключевыми функциями и понятной архитектурой.",
    },
    {
      num: "/04",
      title: "Запуск",
      description:
        "Помогаем выйти к первым пользователям, собрать обратную связь и наметить следующие итерации.",
    },
  ],
};

/** Kept empty — sections removed from homepage until real data arrives. */
export const awards: { org: string; title: string; project: string }[] = [];

export const team: {
  tag: string;
  name: string;
  role: string;
  image: string;
}[] = [
  {
    tag: "Аналитик",
    name: "Дадобоев Шерзод",
    role: "Аналитик-менеджер",
    image: "/assets/images/team-1.png",
  },
  {
    tag: "Backend",
    name: "Шерматов Азамат",
    role: "Backend-разработчик",
    image: "/assets/images/team-2.png",
  },
  {
    tag: "Mobile",
    name: "Насриддинов Фуркатчон",
    role: "Мобильный разработчик",
    image: "/assets/images/team-3.png",
  },
  {
    tag: "Frontend",
    name: "Джамшеди Джаъфар",
    role: "Frontend-разработчик",
    image: "/assets/images/team-4.jpg",
  },
  {
    tag: "Маркетинг",
    name: "Шамсиев Дадочон",
    role: "Маркетолог",
    image: "/assets/images/team-5.png",
  },
  {
    tag: "Дизайн",
    name: "Валиев Хусрав",
    role: "Дизайнер",
    image: "/assets/images/team-1.png",
  },
  {
    tag: "Backend",
    name: "Шерматов Аминчон",
    role: "Backend-разработчик",
    image: "/assets/images/team-2.png",
  },
];

export const pricing = {
  tag: "Тарифы",
  titleLead: "Тарифы",
  title: "под ваш этап продукта",
  description:
    "Есть идея, прототип или растущий продукт? Подберём формат работы под ваш этап — от быстрого MVP до полноценной цифровой платформы.",
  plans: [
    {
      num: "1",
      name: "Идея",
      subtitle: "Для проверки концепции и первого прототипа",
      price: "$2,500+",
      period: "/ проект",
      popular: false,
      features: [
        "Разбор идеи и целевой аудитории",
        "Прототип ключевых экранов",
        "План MVP и приоритеты функций",
        "Быстрая проверка гипотезы",
      ],
      timeline: "Срок 1–2 недели",
    },
    {
      num: "2",
      name: "MVP",
      subtitle: "Для запуска первой рабочей версии продукта",
      price: "$6,500+",
      period: "/ проект",
      popular: true,
      features: [
        "UX/UI дизайн и разработка под ключ",
        "Адаптивный фронтенд и CMS",
        "Интеграции и базовая аналитика",
        "Подготовка к запуску и поддержка",
      ],
      timeline: "Срок 3–6 недель",
    },
    {
      num: "3",
      name: "Продукт",
      subtitle: "Для сложных сервисов и долгосрочного роста",
      price: "По запросу",
      period: "/ проект",
      popular: false,
      features: [
        "Полная продуктовая команда",
        "Веб-платформы и приложения",
        "Серверная часть, API и сложные интеграции",
        "Итерации по данным и обратной связи",
      ],
      timeline: "Срок по плану продукта",
    },
  ],
  quotes: [
    {
      text: "«Jupiter HR закрыл рутину по кадрам: команда быстро собрала понятный продукт, и мы уже работаем в нём каждый день.»",
      name: "HR-лид",
      role: "Пользователь Jupiter HR",
      avatar: "/assets/images/avatar-1.png",
    },
    {
      text: "«Zierat CRM сделали под наши процессы — без лишнего. Запуск прошёл спокойно, менеджеры сразу начали вести клиентов в системе.»",
      name: "Заказчик",
      role: "Zierat CRM",
      avatar: "/assets/images/avatar-2.png",
    },
  ],
};

export const testimonials = {
  tag: "Отзывы",
  titleLead: "Истории",
  title: "запусков",
  items: [
    {
      text: "«Раньше кадры жили в таблицах. С Jupiter HR найм и учёт в одном месте — веб и телефон, команда реально пользуется каждый день.»",
      name: "HR-лид",
      role: "Пользователь Jupiter HR",
      avatar: "/assets/images/avatar-3.png",
    },
    {
      text: "«Заказывали CRM под наш формат продаж. Получили рабочий веб без лишних модулей — сейчас система в проде с активными пользователями.»",
      name: "Руководитель отдела",
      role: "Заказчик Zierat CRM",
      avatar: "/assets/images/avatar-4.png",
    },
    {
      text: "«С BrandMarket шли как с заказным B2B: прозрачные этапы, готовы к релизу веб и мобильное. Чувствуется продуктовый подход, а не просто «сдать сайт».»",
      name: "Продакт со стороны клиента",
      role: "BrandMarket",
      avatar: "/assets/images/avatar-1.png",
    },
    {
      text: "«Внутренние продукты Jupiter ведут от идеи до пользователей — видно по HR и лояльности: сначала MVP, потом живой фидбек и итерации.»",
      name: "Участник команды",
      role: "Внутренний продукт",
      avatar: "/assets/images/avatar-2.png",
    },
  ],
};

export const faq = [
  {
    question: "Сколько обычно длится проект?",
    answer:
      "Срок зависит от масштаба, но большинство брендинговых и веб-проектов занимают 2–4 недели. Сложные приложения и платформы могут потребовать больше времени.",
  },
  {
    question: "Вы поддерживаете проект после запуска?",
    answer:
      "Да, мы поддерживаем проект после запуска: следим за стабильностью, обновлениями и помогаем быстро решать вопросы.",
  },
  {
    question: "Можно заказать только дизайн или только разработку?",
    answer:
      "Да, мы можем подключиться только к дизайну или только к разработке — вы получите сфокусированную экспертизу именно там, где она нужна.",
  },
  {
    question: "Вы можете работать с нашей внутренней командой?",
    answer:
      "Конечно. Мы встраиваемся в существующие процессы, синхронизируемся по целям и работаем рядом с вашей командой.",
  },
  {
    question: "Вы работаете со стартапами или только с крупными компаниями?",
    answer:
      "Мы работаем и со стартапами, и с устоявшимися компаниями — подбираем решение под ваш этап роста.",
  },
];

export const contact = {
  titleLead: "Обсудим",
  title: "вашу следующую большую идею",
  formTitle: "Заполните форму ниже",
  address: "Ташкент, Узбекистан",
  email: "hello@jupiter.uz",
  phone: "+998 (90) 000-00-00",
};

export const clientLogos = [
  "/assets/logos/client-1.svg",
  "/assets/logos/client-2.svg",
  "/assets/logos/client-3.svg",
  "/assets/logos/client-4.svg",
  "/assets/logos/client-5.svg",
];

export const socials = [
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Dribbble", href: "https://dribbble.com" },
  { label: "Behance", href: "https://behance.net" },
];

export const footerSocials = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "X(Twitter)", href: "https://x.com" },
  { label: "Behance", href: "https://behance.net" },
  { label: "Dribbble", href: "https://dribbble.com" },
];
