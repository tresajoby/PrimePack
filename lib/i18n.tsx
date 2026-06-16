"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Locale = "en" | "lv" | "ru";

// ─── All translations ─────────────────────────────────────────────────────────
const translations = {
  en: {
    nav: {
      home: "Home", products: "Products", services: "Services",
      about: "About", contact: "Contact", cta: "Request a Quote",
    },
    hero: {
      badge: "Latvia's Trusted B2B Packaging Supplier",
      line1: "Reliable Packaging",
      accent: "Solutions",
      line3: "for Every Business",
      subtitle: "High-quality packaging materials, custom products, and flexible supply for businesses across Latvia and Europe.",
      cta1: "Request a Quote", cta2: "View Products",
      features: ["Wide Range", "Custom Packaging", "Fast Response", "Reliable Supply"],
    },
    trust: [
      { title: "Premium Quality", desc: "EU-certified materials" },
      { title: "Custom Packaging", desc: "Built to your specs" },
      { title: "Fast Response", desc: "Same-day quotes" },
      { title: "Competitive Pricing", desc: "Best market rates" },
      { title: "Reliable Supply", desc: "On-time, every time" },
    ],
    aboutPreview: {
      label: "About PrimePack",
      badge: "Based in Riga", badgeSub: "Latvia · Serving Europe",
      heading: "A Trusted Packaging Partner in the Baltic Region",
      p1: "PrimePack is a Latvian packaging solutions provider dedicated to helping businesses protect, transport, and present their products efficiently. We serve manufacturers, food producers, logistics companies, retailers, and e-commerce brands.",
      p2: "Our mission: reliable packaging products, consistent supply, competitive pricing, and excellent customer service.",
      features: ["Wide product range", "Custom sizes & materials", "Competitive pricing", "Reliable supply chain", "Fast customer support", "Sustainable options"],
      cta: "Learn More About Us",
    },
    products: {
      label: "Our Products", heading: "Comprehensive Packaging Range",
      subtitle: "From standard materials to specialist custom solutions — we supply what your business needs.",
      viewCatalog: "View Full Catalog",
      items: [
        { title: "Paper Bags", desc: "Eco-friendly and durable paper bags for retail and food industry." },
        { title: "Plastic Bags", desc: "High-strength polyethylene bags for industrial and commercial use." },
        { title: "Stand-Up Pouches", desc: "Resealable pouches ideal for food, supplements, and retail products." },
        { title: "Packaging Films", desc: "Stretch, shrink, and barrier films for wrapping and protection." },
        { title: "Food Packaging", desc: "Safe, certified materials for food production environments." },
        { title: "Industrial Packaging", desc: "Heavy-duty solutions for manufacturing and logistics operations." },
        { title: "Custom Packaging", desc: "Bespoke designs and specifications built to your requirements." },
        { title: "Protective Packaging", desc: "Bubble wrap, foam inserts, and cushioning for safe transit." },
      ],
    },
    why: {
      label: "Why PrimePack", heading: "Built for Business. Focused on Results.", aboutUs: "About Us",
      items: [
        { num: "01", title: "Reliable Supply Chain", desc: "We maintain consistent stock levels and partnerships with trusted European manufacturers to ensure uninterrupted supply." },
        { num: "02", title: "Custom Solutions", desc: "From dimensions and materials to print and branding — we develop packaging solutions built precisely for your requirements." },
        { num: "03", title: "Premium Quality", desc: "All our products comply with EU quality and safety standards, backed by technical certifications and rigorous QC." },
        { num: "04", title: "Long-Term Partnership", desc: "We focus on building long-term business relationships, offering flexible pricing, dedicated account support, and loyalty terms." },
      ],
    },
    industries: {
      label: "Industries We Serve", heading: "Packaging Solutions Across Every Sector",
      items: [
        { icon: "🍽️", title: "Food & Beverage", desc: "Food-safe certified packaging for production and retail." },
        { icon: "🛒", title: "Retail", desc: "Branded bags, pouches, and display-ready packaging." },
        { icon: "📦", title: "E-commerce", desc: "Lightweight, protective shipping materials at scale." },
        { icon: "⚙️", title: "Manufacturing", desc: "Industrial-grade bulk packaging for factory environments." },
        { icon: "🚚", title: "Logistics", desc: "Stretch films, palletizing materials, and transit solutions." },
        { icon: "🏪", title: "Wholesale", desc: "Flexible bulk ordering with competitive wholesale pricing." },
      ],
    },
    cta: {
      badge: "Get Started Today",
      heading: "Need Packaging Solutions",
      accent: "For Your Business?",
      subtitle: "Our team is ready to help you find the right packaging products and custom solutions tailored to your exact requirements.",
      cta1: "Request a Quote", cta2: "Call +371 29 429 945",
    },
    footer: {
      tagline: "Quality Packaging. Reliable Supply.",
      hoursTitle: "Business Hours",
      weekdays: "Monday – Friday", weekdayHours: "09:00 – 18:00",
      weekend: "Saturday – Sunday", weekendStatus: "Closed",
      stayUpdated: "Stay Updated",
      emailPlaceholder: "Your email address", subscribe: "Subscribe",
      quickLinks: "Quick Links", productsTitle: "Products",
      copyright: "All rights reserved.",
    },
  },

  lv: {
    nav: {
      home: "Sākums", products: "Produkti", services: "Pakalpojumi",
      about: "Par mums", contact: "Kontakti", cta: "Pieprasīt piedāvājumu",
    },
    hero: {
      badge: "Latvijas uzticamais B2B iepakojuma piegādātājs",
      line1: "Uzticami iepakojuma",
      accent: "risinājumi",
      line3: "katram uzņēmumam",
      subtitle: "Augstas kvalitātes iepakojuma materiāli, individuāli produkti un elastīga piegāde uzņēmumiem Latvijā un visā Eiropā.",
      cta1: "Pieprasīt piedāvājumu", cta2: "Skatīt produktus",
      features: ["Plašs klāsts", "Individuāls iepakojums", "Ātra atbilde", "Uzticama piegāde"],
    },
    trust: [
      { title: "Augsta kvalitāte", desc: "ES sertificēti materiāli" },
      { title: "Individuāls iepakojums", desc: "Veidots pēc Jūsu prasībām" },
      { title: "Ātra atbilde", desc: "Piedāvājums tajā pašā dienā" },
      { title: "Konkurētspējīgas cenas", desc: "Labākās tirgus cenas" },
      { title: "Uzticama piegāde", desc: "Laikā, katru reizi" },
    ],
    aboutPreview: {
      label: "Par PrimePack",
      badge: "Atrodas Rīgā", badgeSub: "Latvija · Apkalpo Eiropu",
      heading: "Uzticams iepakojuma partneris Baltijā",
      p1: "PrimePack ir Latvijas iepakojuma risinājumu uzņēmums, kas palīdz uzņēmumiem aizsargāt, transportēt un prezentēt savus produktus efektīvi. Mēs apkalpojam ražotājus, pārtikas produktu ražotājus, loģistikas uzņēmumus, mazumtirgotājus un e-komercijas zīmolus.",
      p2: "Mūsu misija: uzticami iepakojuma produkti, stabila piegāde, konkurētspējīgas cenas un izcils klientu serviss.",
      features: ["Plašs produktu klāsts", "Individuāli izmēri un materiāli", "Konkurētspējīgas cenas", "Uzticama piegādes ķēde", "Ātra klientu apkalpošana", "Videi draudzīgas iespējas"],
      cta: "Uzzināt vairāk par mums",
    },
    products: {
      label: "Mūsu produkti", heading: "Plašs iepakojuma klāsts",
      subtitle: "No standarta materiāliem līdz speciāliem risinājumiem — mēs piegādājam to, ko Jūsu biznesam nepieciešams.",
      viewCatalog: "Skatīt pilno katalogu",
      items: [
        { title: "Papīra maisi", desc: "Videi draudzīgi papīra maisi mazumtirdzniecībai un pārtikas nozarei." },
        { title: "Plastmasas maisi", desc: "Augstas stiprības polietilēna maisi rūpnieciskai un komerciālai lietošanai." },
        { title: "Stāvmaisi", desc: "Aizvērami maisiņi pārtikai, uztura bagātinātājiem un mazumtirdzniecībai." },
        { title: "Iepakojuma plēves", desc: "Stiepjamas, sarūkošas un barjeras plēves iepakošanai un aizsardzībai." },
        { title: "Pārtikas iepakojums", desc: "Droši, sertificēti materiāli pārtikas ražošanas vidēm." },
        { title: "Rūpnieciskais iepakojums", desc: "Smago darbu risinājumi ražošanai un loģistikai." },
        { title: "Individuālais iepakojums", desc: "Īpaši izstrādāts pēc Jūsu specifikācijām un prasībām." },
        { title: "Aizsargājošais iepakojums", desc: "Burbuļplēve, putu materiāli un amortizatori drošai transportēšanai." },
      ],
    },
    why: {
      label: "Kāpēc PrimePack", heading: "Veidots biznesam. Fokusēts uz rezultātiem.", aboutUs: "Par mums",
      items: [
        { num: "01", title: "Uzticama piegādes ķēde", desc: "Mēs uzturam stabilus krājumu līmeņus un sadarbojamies ar uzticamiem Eiropas ražotājiem, lai nodrošinātu nepārtrauktu piegādi." },
        { num: "02", title: "Individuāli risinājumi", desc: "No izmēriem un materiāliem līdz drukāšanai un zīmolam — mēs izstrādājam iepakojuma risinājumus tieši Jūsu vajadzībām." },
        { num: "03", title: "Augsta kvalitāte", desc: "Visi mūsu produkti atbilst ES kvalitātes standartiem, ko apliecina tehniskās sertifikācijas un rūpīga QC." },
        { num: "04", title: "Ilgtermiņa partnerība", desc: "Mēs koncentrējamies uz ilgtermiņa biznesa attiecībām, piedāvājot elastīgas cenas un dedikētu klientu atbalstu." },
      ],
    },
    industries: {
      label: "Nozares, kurās strādājam", heading: "Iepakojuma risinājumi visās nozarēs",
      items: [
        { icon: "🍽️", title: "Pārtika un dzērieni", desc: "Pārtikas drošai sertificēts iepakojums ražošanai un mazumtirdzniecībai." },
        { icon: "🛒", title: "Mazumtirdzniecība", desc: "Zīmoloti maisi, maisiņi un iepakojums displeja prezentācijai." },
        { icon: "📦", title: "E-komercija", desc: "Vieglie, aizsargājošie sūtīšanas materiāli lielos apjomos." },
        { icon: "⚙️", title: "Ražošana", desc: "Rūpnieciska svara lielapjoma iepakojums rūpnīcas vidēm." },
        { icon: "🚚", title: "Loģistika", desc: "Stiepjamas plēves, paletizācijas materiāli un tranzīta risinājumi." },
        { icon: "🏪", title: "Vairumtirdzniecība", desc: "Elastīgi lielapjoma pasūtījumi ar konkurētspējīgām cenām." },
      ],
    },
    cta: {
      badge: "Sāciet jau šodien",
      heading: "Nepieciešami iepakojuma risinājumi",
      accent: "Jūsu biznesam?",
      subtitle: "Mūsu komanda ir gatava palīdzēt Jums atrast piemērotus iepakojuma produktus un individuālus risinājumus.",
      cta1: "Pieprasīt piedāvājumu", cta2: "Zvanīt +371 29 429 945",
    },
    footer: {
      tagline: "Kvalitātes iepakojums. Uzticama piegāde.",
      hoursTitle: "Darba laiks",
      weekdays: "Pirmdiena – Piektdiena", weekdayHours: "09:00 – 18:00",
      weekend: "Sestdiena – Svētdiena", weekendStatus: "Slēgts",
      stayUpdated: "Palieciet informēti",
      emailPlaceholder: "Jūsu e-pasta adrese", subscribe: "Abonēt",
      quickLinks: "Ātrās saites", productsTitle: "Produkti",
      copyright: "Visas tiesības aizsargātas.",
    },
  },

  ru: {
    nav: {
      home: "Главная", products: "Продукты", services: "Услуги",
      about: "О нас", contact: "Контакты", cta: "Запросить предложение",
    },
    hero: {
      badge: "Надёжный B2B-поставщик упаковки в Латвии",
      line1: "Надёжные упаковочные",
      accent: "решения",
      line3: "для каждого бизнеса",
      subtitle: "Высококачественные упаковочные материалы, индивидуальные продукты и гибкие поставки для бизнеса по всей Латвии и Европе.",
      cta1: "Запросить предложение", cta2: "Смотреть продукты",
      features: ["Широкий ассортимент", "Индивидуальная упаковка", "Быстрый ответ", "Надёжные поставки"],
    },
    trust: [
      { title: "Высокое качество", desc: "Сертифицированные материалы ЕС" },
      { title: "Индивидуальная упаковка", desc: "Под ваши требования" },
      { title: "Быстрый ответ", desc: "Предложение в тот же день" },
      { title: "Конкурентные цены", desc: "Лучшие рыночные ставки" },
      { title: "Надёжные поставки", desc: "Вовремя, каждый раз" },
    ],
    aboutPreview: {
      label: "О PrimePack",
      badge: "Расположен в Риге", badgeSub: "Латвия · Обслуживаем Европу",
      heading: "Надёжный партнёр по упаковке в Балтийском регионе",
      p1: "PrimePack — латвийский поставщик упаковочных решений, помогающий предприятиям эффективно защищать, транспортировать и представлять свою продукцию. Мы обслуживаем производителей, пищевые предприятия, логистические компании, розничных торговцев и e-commerce бренды.",
      p2: "Наша миссия: надёжные упаковочные продукты, стабильные поставки, конкурентные цены и отличный сервис.",
      features: ["Широкий ассортимент", "Индивидуальные размеры и материалы", "Конкурентные цены", "Надёжная цепочка поставок", "Быстрая поддержка клиентов", "Экологичные варианты"],
      cta: "Узнать больше о нас",
    },
    products: {
      label: "Наши продукты", heading: "Полный ассортимент упаковки",
      subtitle: "От стандартных материалов до специальных решений — мы поставляем то, что нужно вашему бизнесу.",
      viewCatalog: "Смотреть весь каталог",
      items: [
        { title: "Бумажные пакеты", desc: "Экологичные бумажные пакеты для розницы и пищевой промышленности." },
        { title: "Полиэтиленовые пакеты", desc: "Высокопрочные полиэтиленовые пакеты для промышленного и коммерческого использования." },
        { title: "Стоячие пакеты", desc: "Закрываемые пакеты для продуктов питания, добавок и розничных товаров." },
        { title: "Упаковочные плёнки", desc: "Стрейч, термоусадочные и барьерные плёнки для упаковки и защиты." },
        { title: "Пищевая упаковка", desc: "Безопасные, сертифицированные материалы для пищевых производств." },
        { title: "Промышленная упаковка", desc: "Тяжёлые решения для производственных и логистических операций." },
        { title: "Индивидуальная упаковка", desc: "Уникальные решения, созданные по вашим требованиям." },
        { title: "Защитная упаковка", desc: "Пузырчатая плёнка, вспененные вставки и амортизаторы для безопасной доставки." },
      ],
    },
    why: {
      label: "Почему PrimePack", heading: "Создано для бизнеса. Ориентировано на результат.", aboutUs: "О нас",
      items: [
        { num: "01", title: "Надёжная цепочка поставок", desc: "Мы поддерживаем стабильный уровень запасов и сотрудничаем с проверенными европейскими производителями для бесперебойных поставок." },
        { num: "02", title: "Индивидуальные решения", desc: "От размеров и материалов до печати и брендинга — мы разрабатываем решения точно под ваши требования." },
        { num: "03", title: "Высокое качество", desc: "Все наши продукты соответствуют стандартам качества ЕС, подтверждённым техническими сертификатами и строгим контролем." },
        { num: "04", title: "Долгосрочное партнёрство", desc: "Мы нацелены на долгосрочные деловые отношения, предлагая гибкие цены и выделенную поддержку клиентов." },
      ],
    },
    industries: {
      label: "Отрасли, которые мы обслуживаем", heading: "Упаковочные решения для каждой отрасли",
      items: [
        { icon: "🍽️", title: "Продукты питания и напитки", desc: "Сертифицированная пищевая упаковка для производства и розницы." },
        { icon: "🛒", title: "Розничная торговля", desc: "Брендированные пакеты, пауч-пакеты и упаковка для дисплеев." },
        { icon: "📦", title: "Электронная торговля", desc: "Лёгкие защитные материалы для доставки в больших объёмах." },
        { icon: "⚙️", title: "Производство", desc: "Промышленная тяжёлая тарная упаковка для заводских условий." },
        { icon: "🚚", title: "Логистика", desc: "Стрейч-плёнки, паллетирующие материалы и транзитные решения." },
        { icon: "🏪", title: "Оптовая торговля", desc: "Гибкие оптовые заказы по конкурентным ценам." },
      ],
    },
    cta: {
      badge: "Начните сегодня",
      heading: "Нужны упаковочные решения",
      accent: "для вашего бизнеса?",
      subtitle: "Наша команда готова помочь вам найти подходящие упаковочные продукты и индивидуальные решения.",
      cta1: "Запросить предложение", cta2: "Позвонить +371 29 429 945",
    },
    footer: {
      tagline: "Качественная упаковка. Надёжные поставки.",
      hoursTitle: "Часы работы",
      weekdays: "Понедельник – Пятница", weekdayHours: "09:00 – 18:00",
      weekend: "Суббота – Воскресенье", weekendStatus: "Закрыто",
      stayUpdated: "Оставайтесь в курсе",
      emailPlaceholder: "Ваш email", subscribe: "Подписаться",
      quickLinks: "Быстрые ссылки", productsTitle: "Продукты",
      copyright: "Все права защищены.",
    },
  },
};

export type T = typeof translations["en"];

// ─── Context ──────────────────────────────────────────────────────────────────
const LanguageContext = createContext<{
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: T;
}>({ locale: "en", setLocale: () => {}, t: translations.en });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const saved = localStorage.getItem("pp_locale") as Locale;
    if (saved && ["en", "lv", "ru"].includes(saved)) setLocaleState(saved);
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    localStorage.setItem("pp_locale", l);
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: translations[locale] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useT = () => useContext(LanguageContext);
