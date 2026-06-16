import type { Locale } from "./i18n";

export const legalT: Record<Locale, {
  lastUpdated: string;
  lastUpdatedGdpr: string;
  terms: {
    h1: string;
    s: { t: string; b?: string }[];
  };
  privacy: {
    h1: string;
    s1t: string; s1b: string;
    s2t: string; s2b: string; s2list: string[];
    s3t: string; s3b: string; s3list: string[];
    s4t: string; s4b: string;
    s5t: string; s5b: string;
    s6t: string; s6b: string;
    s7t: string; s7b: string; s7list: string[]; s7trailing: string;
    s8t: string; s8b: string;
    s9t: string; s9b: string;
  };
  cookies: {
    h1: string;
    s1t: string; s1b: string;
    s2t: string; s2b: string;
    s3t: string;
    s3e1t: string; s3e1b: string;
    s3e2t: string; s3e2b: string;
    s3e3t: string; s3e3b: string;
    s4t: string; s4b: string; s4list: string[];
    s5t: string; s5b: string;
    s6t: string; s6b: string;
  };
  returns: {
    h1: string;
    s1t: string; s1b: string;
    s2t: string; s2b: string; s2list: string[];
    s3t: string; s3b: string;
    s4t: string; s4b: string;
    s5t: string; s5b: string;
    s6t: string; s6b: string; s6list: string[];
    s7t: string; s7b: string;
    ctaText: string; ctaLink: string; ctaSuffix: string;
  };
}> = {
  en: {
    lastUpdated: "Last updated: June 2025",
    lastUpdatedGdpr: "Last updated: June 2025 · GDPR Compliant",
    terms: {
      h1: "Terms & Conditions",
      s: [
        { t: "1. Introduction", b: "Welcome to PrimePack. By accessing and using this website, you agree to comply with and be bound by these Terms and Conditions. Please read them carefully before using our website or services." },
        { t: "2. Company Information" },
        { t: "3. Products and Services", b: "All product descriptions, specifications, dimensions, and availability information are provided for informational purposes and may be updated without notice. Product images are illustrative only and may not exactly represent the delivered product." },
        { t: "4. Pricing", b: "Prices displayed on the website are indicative and may change without prior notice. All formal quotations remain valid only for the period specified within the quotation document. Prices exclude applicable taxes and delivery charges unless stated otherwise." },
        { t: "5. Orders", b: "Submission of an enquiry or order request does not constitute a binding order. Orders are confirmed only upon written acceptance by PrimePack. PrimePack reserves the right to accept or reject any order at its sole discretion." },
        { t: "6. Payment", b: "Payment terms will be agreed upon separately with each customer unless otherwise stated in a quotation or contract. PrimePack reserves the right to require payment in advance for new customers or large orders." },
        { t: "7. Delivery", b: "Delivery times provided are estimates only. PrimePack shall not be liable for delays caused by suppliers, carriers, customs authorities, or events beyond our reasonable control, including force majeure events." },
        { t: "8. Returns and Claims", b: "Customers should inspect all goods upon receipt. Any defects, damages, or discrepancies must be reported to PrimePack in writing within 7 business days of delivery. PrimePack will not accept claims raised after this period." },
        { t: "9. Limitation of Liability", b: "PrimePack's total liability to any customer in connection with any order shall be limited to the value of the products supplied under that order. We shall not be liable for indirect or consequential losses." },
        { t: "10. Intellectual Property", b: "All website content, logos, graphics, text, and materials are the property of PrimePack unless otherwise stated and may not be reproduced without written permission." },
        { t: "11. Governing Law", b: "These Terms and Conditions are governed by the laws of the Republic of Latvia. Any disputes shall be subject to the exclusive jurisdiction of Latvian courts." },
        { t: "12. Contact", b: "For any questions regarding these Terms, please contact us at: PrimePack.lv@gmail.com · +371 29 429 945" },
      ],
    },
    privacy: {
      h1: "Privacy Policy",
      s1t: "Who We Are", s1b: "PrimePack respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.",
      s2t: "Data We Collect", s2b: "We may collect the following personal data when you contact us or use our website:",
      s2list: ["Full name", "Company name", "Email address", "Phone number", "Billing and delivery information", "Website usage data (via cookies)"],
      s3t: "How We Use Your Data", s3b: "We use your personal data for the following purposes:",
      s3list: ["To respond to enquiries and quotation requests", "To process and fulfil orders", "To provide customer support", "To improve website performance and user experience", "To meet our legal and regulatory obligations"],
      s4t: "Legal Basis for Processing", s4b: "We process your personal data on the following legal bases under GDPR: contract performance, legitimate interests, legal obligation, and — where applicable — your explicit consent.",
      s5t: "Data Retention", s5b: "We retain personal data only for as long as necessary for business and legal purposes. Transaction records may be retained for up to 7 years in accordance with Latvian accounting and tax law.",
      s6t: "Data Sharing", s6b: "We do not sell your personal data. We may share data with trusted third-party service providers (e.g. email, logistics, payment processing) only to the extent necessary to fulfil our services. All third parties are required to handle your data securely and in compliance with applicable laws.",
      s7t: "Your Rights Under GDPR", s7b: "As a data subject, you have the following rights:",
      s7list: ["Right to access your personal data", "Right to correct inaccurate data", "Right to erasure (\"right to be forgotten\")", "Right to restrict processing", "Right to data portability", "Right to object to processing"],
      s7trailing: "To exercise any of these rights, please contact us at PrimePack.lv@gmail.com.",
      s8t: "Data Security", s8b: "We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, loss, or alteration.",
      s9t: "Contact", s9b: "PrimePack · Salaspils iela 6 K 4 ap.61, Riga LV-1057, Latvia · Email: PrimePack.lv@gmail.com · Phone: +371 29 429 945",
    },
    cookies: {
      h1: "Cookie Policy",
      s1t: "What Are Cookies?", s1b: "Cookies are small text files stored on your device when you visit a website. They help websites function correctly, remember your preferences, and provide information about how visitors use the site.",
      s2t: "How We Use Cookies", s2b: "PrimePack uses cookies to improve your browsing experience, analyse website traffic, and remember user preferences. We do not use cookies to collect personally identifiable information without your consent.",
      s3t: "Types of Cookies We Use",
      s3e1t: "Essential Cookies", s3e1b: "Required for the website to function correctly. These cannot be disabled without affecting site functionality.",
      s3e2t: "Analytics Cookies", s3e2b: "Help us understand how visitors interact with the website. Data is aggregated and anonymous. We may use tools such as Google Analytics.",
      s3e3t: "Preference Cookies", s3e3b: "Remember your settings and preferences for a better browsing experience on return visits.",
      s4t: "Managing Cookies", s4b: "You can manage or disable cookies through your browser settings at any time. Please note that disabling certain cookies may affect the functionality of the website. Most modern browsers allow you to:",
      s4list: ["View cookies currently stored", "Block cookies from specific websites", "Delete all cookies when you close the browser", "Set preferences for specific website cookies"],
      s5t: "Third-Party Cookies", s5b: "Some pages on our website may include content from third-party services (such as Google Maps or analytics platforms) that may set their own cookies. These are governed by the respective third party's cookie policies.",
      s6t: "Contact", s6b: "For any questions about our use of cookies, contact us at: PrimePack.lv@gmail.com · +371 29 429 945",
    },
    returns: {
      h1: "Returns & Refund Policy",
      s1t: "Inspection Upon Delivery", s1b: "All customers are required to inspect products upon delivery. Goods should be checked against the order confirmation for quantity, specification, and condition before accepting the delivery.",
      s2t: "Reporting Defects or Discrepancies", s2b: "If products are found to be defective, damaged during transit, or incorrectly supplied, customers must notify PrimePack in writing within 7 business days of the delivery date. Claims raised after this period may not be accepted. To report a claim, please contact us at PrimePack.lv@gmail.com with the following information:",
      s2list: ["Order reference number", "Description of the defect or discrepancy", "Photographic evidence where applicable", "Quantity affected"],
      s3t: "Custom and Specially Manufactured Products", s3b: "Custom-made or specially manufactured products — including products produced to customer-specific sizes, materials, or with customer branding — are generally not eligible for return unless they are found to be defective or fail to meet the agreed specification.",
      s4t: "Returns Process", s4b: "Approved returns must be arranged in advance with PrimePack. Products must be returned in their original condition and packaging where possible. Return shipping arrangements and costs will be agreed on a case-by-case basis depending on the nature of the claim.",
      s5t: "Refunds", s5b: "Approved refunds will be processed using the original payment method where applicable. Refund processing times may vary depending on the payment method. PrimePack reserves the right to offer replacement goods in lieu of a monetary refund.",
      s6t: "Exclusions", s6b: "Returns and refunds will not be accepted for:",
      s6list: ["Products damaged after delivery due to improper storage or handling", "Products returned without prior written agreement from PrimePack", "Claims raised outside of the 7 business day notification window"],
      s7t: "Contact", s7b: "For returns enquiries, please contact our team: Email: PrimePack.lv@gmail.com · Phone: +371 29 429 945",
      ctaText: "Have a question about an order or return?",
      ctaLink: "Contact our team",
      ctaSuffix: "and we'll help resolve it as quickly as possible.",
    },
  },

  lv: {
    lastUpdated: "Pēdējo reizi atjaunināts: 2025. gada jūnijs",
    lastUpdatedGdpr: "Pēdējo reizi atjaunināts: 2025. gada jūnijs · Atbilst VDAR",
    terms: {
      h1: "Noteikumi un nosacījumi",
      s: [
        { t: "1. Ievads", b: "Laipni lūdzam PrimePack. Piekļūstot šai vietnei un izmantojot to, Jūs piekrītat ievērot šos Noteikumus un nosacījumus. Lūdzu, rūpīgi izlasiet tos pirms vietnes vai pakalpojumu izmantošanas." },
        { t: "2. Uzņēmuma informācija" },
        { t: "3. Produkti un pakalpojumi", b: "Visi produktu apraksti, specifikācijas, izmēri un pieejamības informācija ir sniegti informatīviem nolūkiem un var tikt atjaunināti bez brīdinājuma. Produktu attēli ir ilustratīvi un var precīzi neatspoguļot piegādāto produktu." },
        { t: "4. Cenas", b: "Vietnē norādītās cenas ir indikatīvas un var mainīties bez iepriekšēja paziņojuma. Visi formālie piedāvājumi ir spēkā tikai piedāvājuma dokumentā norādītajā periodā. Cenas neietver piemērojamos nodokļus un piegādes izmaksas, ja nav norādīts citādi." },
        { t: "5. Pasūtījumi", b: "Pieprasījuma vai pasūtījuma iesniegšana nav saistošs pasūtījums. Pasūtījumi tiek apstiprināti tikai ar PrimePack rakstisku akceptu. PrimePack patur tiesības pieņemt vai noraidīt jebkuru pasūtījumu pēc saviem ieskatiem." },
        { t: "6. Maksājums", b: "Maksājuma nosacījumi tiks saskaņoti atsevišķi ar katru klientu, ja vien nav norādīts citādi piedāvājumā vai līgumā. PrimePack patur tiesības pieprasīt avansa maksājumu jauniem klientiem vai lieliem pasūtījumiem." },
        { t: "7. Piegāde", b: "Norādītie piegādes termiņi ir tikai tuvināti. PrimePack nav atbildīgs par kavējumiem, ko izraisījuši piegādātāji, pārvadātāji, muitas iestādes vai notikumi ārpus mūsu saprātīgas kontroles, tostarp nepārvaramas varas notikumi." },
        { t: "8. Atgriešana un pretenzijas", b: "Klientiem jāpārbauda visas preces pēc saņemšanas. Par jebkādiem defektiem, bojājumiem vai neatbilstībām jāpaziņo PrimePack rakstiski 7 darba dienu laikā no piegādes. PrimePack nepieņems pretenzijas, kas iesniegtas pēc šī termiņa." },
        { t: "9. Atbildības ierobežojums", b: "PrimePack kopējā atbildība pret jebkuru klientu saistībā ar jebkuru pasūtījumu ir ierobežota ar piegādāto produktu vērtību attiecīgajā pasūtījumā. Mēs neesam atbildīgi par netiešiem vai izrietošiem zaudējumiem." },
        { t: "10. Intelektuālais īpašums", b: "Viss vietnes saturs, logotipi, grafika, teksts un materiāli ir PrimePack īpašums, ja nav norādīts citādi, un tos nedrīkst reproducēt bez rakstiskas atļaujas." },
        { t: "11. Piemērojamie tiesību akti", b: "Šie Noteikumi un nosacījumi ir pakļauti Latvijas Republikas tiesību aktiem. Jebkuri strīdi tiks izskatīti Latvijas tiesu ekskluzīvā jurisdikcijā." },
        { t: "12. Kontakti", b: "Ja Jums ir jautājumi par šiem Noteikumiem, lūdzu, sazinieties ar mums: PrimePack.lv@gmail.com · +371 29 429 945" },
      ],
    },
    privacy: {
      h1: "Privātuma politika",
      s1t: "Kas mēs esam", s1b: "PrimePack respektē Jūsu privātumu un ir apņēmies aizsargāt Jūsu personas datus. Šī Privātuma politika izskaidro, kā mēs apkopojam, izmantojam un aizsargājam Jūsu informāciju, kad Jūs apmeklējat mūsu vietni vai izmantojat mūsu pakalpojumus.",
      s2t: "Kādus datus mēs vācam", s2b: "Mēs varam vākt šādus personas datus, kad Jūs sazināties ar mums vai izmantojat mūsu vietni:",
      s2list: ["Pilns vārds", "Uzņēmuma nosaukums", "E-pasta adrese", "Tālruņa numurs", "Norēķinu un piegādes informācija", "Vietnes lietošanas dati (ar sīkdatņu starpniecību)"],
      s3t: "Kā mēs izmantojam Jūsu datus", s3b: "Mēs izmantojam Jūsu personas datus šādiem mērķiem:",
      s3list: ["Lai atbildētu uz jautājumiem un piedāvājumu pieprasījumiem", "Lai apstrādātu un izpildītu pasūtījumus", "Lai sniegtu klientu atbalstu", "Lai uzlabotu vietnes veiktspēju un lietotāja pieredzi", "Lai izpildītu mūsu juridiskās un regulatīvās saistības"],
      s4t: "Juridiskais pamats apstrādei", s4b: "Mēs apstrādājam Jūsu personas datus saskaņā ar šādiem VDAR juridiskajiem pamatiem: līguma izpilde, leģitīmās intereses, juridiskais pienākums un — attiecīgos gadījumos — Jūsu skaidrā piekrišana.",
      s5t: "Datu glabāšana", s5b: "Mēs glabājam personas datus tikai tik ilgi, cik nepieciešams biznesa un juridiskiem mērķiem. Darījumu uzskaite var tikt glabāta līdz 7 gadiem saskaņā ar Latvijas grāmatvedības un nodokļu tiesību aktiem.",
      s6t: "Datu kopīgošana", s6b: "Mēs nepārdodam Jūsu personas datus. Mēs varam kopīgot datus ar uzticamiem trešo pušu pakalpojumu sniedzējiem (piem., e-pasts, loģistika, maksājumu apstrāde) tikai tādā mērā, cik nepieciešams mūsu pakalpojumu sniegšanai. Visām trešajām pusēm ir jāapstrādā Jūsu dati droši un saskaņā ar piemērojamajiem tiesību aktiem.",
      s7t: "Jūsu tiesības saskaņā ar VDAR", s7b: "Kā datu subjektam Jums ir šādas tiesības:",
      s7list: ["Tiesības piekļūt saviem personas datiem", "Tiesības labot neprecīzus datus", "Tiesības uz dzēšanu (\"tiesības tikt aizmirstam\")", "Tiesības ierobežot apstrādi", "Tiesības uz datu pārnesamību", "Tiesības iebilst pret apstrādi"],
      s7trailing: "Lai izmantotu kādas no šīm tiesībām, lūdzu, sazinieties ar mums: PrimePack.lv@gmail.com.",
      s8t: "Datu drošība", s8b: "Mēs ieviešam atbilstošus tehniskos un organizatoriskos pasākumus, lai aizsargātu Jūsu personas datus pret nesankcionētu piekļuvi, zaudēšanu vai izmaiņām.",
      s9t: "Kontakti", s9b: "PrimePack · Salaspils iela 6 K 4 ap.61, Rīga LV-1057, Latvija · E-pasts: PrimePack.lv@gmail.com · Tālrunis: +371 29 429 945",
    },
    cookies: {
      h1: "Sīkdatņu politika",
      s1t: "Kas ir sīkdatnes?", s1b: "Sīkdatnes ir mazi teksta faili, kas tiek saglabāti Jūsu ierīcē, kad Jūs apmeklējat vietni. Tās palīdz vietnēm pareizi darboties, atcerēties Jūsu preferences un sniedz informāciju par to, kā apmeklētāji izmanto vietni.",
      s2t: "Kā mēs izmantojam sīkdatnes", s2b: "PrimePack izmanto sīkdatnes, lai uzlabotu pārlūkošanas pieredzi, analizētu vietnes trafiku un atcerētos lietotāju preferences. Mēs neizmantojam sīkdatnes, lai vāktu personiski identificējamu informāciju bez Jūsu piekrišanas.",
      s3t: "Sīkdatņu veidi",
      s3e1t: "Nepieciešamās sīkdatnes", s3e1b: "Nepieciešamas, lai vietne darbotos pareizi. Tās nevar atspējot, neietekmējot vietnes funkcionalitāti.",
      s3e2t: "Analītikas sīkdatnes", s3e2b: "Palīdz mums saprast, kā apmeklētāji mijiedarbojas ar vietni. Dati ir apkopoti un anonimizēti. Mēs varam izmantot tādus rīkus kā Google Analytics.",
      s3e3t: "Preferences sīkdatnes", s3e3b: "Atceras Jūsu iestatījumus un preferences labākai pārlūkošanas pieredzei atkārtotu apmeklējumu laikā.",
      s4t: "Sīkdatņu pārvaldīšana", s4b: "Jūs varat pārvaldīt vai atspējot sīkdatnes jebkurā laikā pārlūkprogrammas iestatījumos. Ņemiet vērā, ka dažu sīkdatņu atspējošana var ietekmēt vietnes funkcionalitāti. Lielākā daļa mūsdienu pārlūkprogrammu ļauj Jums:",
      s4list: ["Skatīt pašlaik saglabātās sīkdatnes", "Bloķēt sīkdatnes no konkrētām vietnēm", "Dzēst visas sīkdatnes, aizverot pārlūkprogrammu", "Iestatīt preferences konkrētu vietņu sīkdatnēm"],
      s5t: "Trešo pušu sīkdatnes", s5b: "Dažas mūsu vietnes lapas var ietvert saturu no trešo pušu pakalpojumiem (piemēram, Google Maps vai analītikas platformas), kas var iestatīt savas sīkdatnes. Tās regulē attiecīgās trešās puses sīkdatņu politika.",
      s6t: "Kontakti", s6b: "Ja Jums ir jautājumi par mūsu sīkdatņu izmantošanu, sazinieties ar mums: PrimePack.lv@gmail.com · +371 29 429 945",
    },
    returns: {
      h1: "Atgriešanas un naudas atmaksas politika",
      s1t: "Pārbaude pēc piegādes", s1b: "Visiem klientiem jāpārbauda preces pēc piegādes. Precēm jātiek pārbaudītām atbilstoši pasūtījuma apstiprinājumam pēc daudzuma, specifikācijas un stāvokļa pirms piegādes pieņemšanas.",
      s2t: "Defektu vai neatbilstību paziņošana", s2b: "Ja preces tiek konstatētas kā defektīvas, bojātas transportēšanas laikā vai nepareizi piegādātas, klientiem jāpaziņo PrimePack rakstiski 7 darba dienu laikā no piegādes datuma. Pēc šī termiņa iesniegtas pretenzijas var netikt pieņemtas. Lai ziņotu par pretenziju, lūdzu, sazinieties ar mums uz PrimePack.lv@gmail.com ar šādu informāciju:",
      s2list: ["Pasūtījuma atsauces numurs", "Defekta vai neatbilstības apraksts", "Fotoattēlu pierādījumi, ja piemērojams", "Ietekmētais daudzums"],
      s3t: "Individuālie un speciāli ražotie produkti", s3b: "Individuāli izgatavoti vai speciāli ražoti produkti — tostarp produkti, kas ražoti pēc klienta specifikācijām vai ar klienta zīmolvedību — parasti nav atgriežami, ja vien tie nav defektīvi vai neatbilst saskaņotajai specifikācijai.",
      s4t: "Atgriešanas process", s4b: "Apstiprinātā atgriešana jāsaskaņo iepriekš ar PrimePack. Preces jāatgriež to sākotnējā stāvoklī un iepakojumā, kur iespējams. Atgriešanas nosūtīšanas kārtība un izmaksas tiks saskaņotas katram gadījumam individuāli.",
      s5t: "Naudas atmaksa", s5b: "Apstiprinātā naudas atmaksa tiks apstrādāta, izmantojot sākotnējo maksājuma metodi, ja piemērojams. PrimePack patur tiesības piedāvāt preces aizstāšanu naudas atmaksas vietā.",
      s6t: "Izņēmumi", s6b: "Atgriešana un naudas atmaksa netiks pieņemta par:",
      s6list: ["Precēm, kas bojātas pēc piegādes nepareizas uzglabāšanas vai apstrādes dēļ", "Precēm, kas atgrieztas bez iepriekšējas rakstiskas PrimePack vienošanās", "Pretenzijām, kas iesniegtas ārpus 7 darba dienu paziņošanas perioda"],
      s7t: "Kontakti", s7b: "Jautājumiem par atgriešanu, lūdzu, sazinieties ar mūsu komandu: E-pasts: PrimePack.lv@gmail.com · Tālrunis: +371 29 429 945",
      ctaText: "Vai Jums ir jautājums par pasūtījumu vai atgriešanu?",
      ctaLink: "Sazinieties ar mūsu komandu",
      ctaSuffix: "un mēs palīdzēsim to atrisināt pēc iespējas ātrāk.",
    },
  },

  ru: {
    lastUpdated: "Последнее обновление: июнь 2025",
    lastUpdatedGdpr: "Последнее обновление: июнь 2025 · Соответствует GDPR",
    terms: {
      h1: "Условия использования",
      s: [
        { t: "1. Введение", b: "Добро пожаловать в PrimePack. Получая доступ к этому сайту и используя его, вы соглашаетесь соблюдать настоящие Условия использования. Пожалуйста, внимательно прочитайте их перед использованием нашего сайта или услуг." },
        { t: "2. Информация о компании" },
        { t: "3. Продукты и услуги", b: "Все описания продуктов, технические характеристики, размеры и информация о наличии предоставляются в информационных целях и могут обновляться без уведомления. Изображения продуктов носят иллюстративный характер." },
        { t: "4. Цены", b: "Цены на сайте носят ориентировочный характер и могут изменяться без предварительного уведомления. Все официальные предложения действительны только в течение периода, указанного в документе с предложением. Цены не включают налоги и расходы на доставку, если не указано иное." },
        { t: "5. Заказы", b: "Подача запроса или заявки не является обязательным заказом. Заказы подтверждаются только после письменного принятия со стороны PrimePack. PrimePack оставляет за собой право принять или отклонить любой заказ по собственному усмотрению." },
        { t: "6. Оплата", b: "Условия оплаты согласовываются отдельно с каждым клиентом, если иное не указано в предложении или договоре. PrimePack оставляет за собой право требовать предоплату от новых клиентов или для крупных заказов." },
        { t: "7. Доставка", b: "Указанные сроки доставки являются приблизительными. PrimePack не несёт ответственности за задержки, вызванные поставщиками, перевозчиками, таможенными органами или форс-мажорными обстоятельствами." },
        { t: "8. Возврат и претензии", b: "Клиенты обязаны проверить все товары при получении. О дефектах, повреждениях или несоответствиях необходимо уведомить PrimePack в письменной форме в течение 7 рабочих дней с момента доставки. PrimePack не будет принимать претензии по истечении этого срока." },
        { t: "9. Ограничение ответственности", b: "Совокупная ответственность PrimePack перед любым клиентом в связи с любым заказом ограничена стоимостью поставленных продуктов. Мы не несём ответственности за косвенные или случайные убытки." },
        { t: "10. Интеллектуальная собственность", b: "Весь контент сайта, логотипы, графика, тексты и материалы являются собственностью PrimePack и не могут воспроизводиться без письменного разрешения." },
        { t: "11. Применимое право", b: "Настоящие Условия регулируются законодательством Латвийской Республики. Любые споры подлежат исключительной юрисдикции латвийских судов." },
        { t: "12. Контакты", b: "По любым вопросам, касающимся настоящих Условий: PrimePack.lv@gmail.com · +371 29 429 945" },
      ],
    },
    privacy: {
      h1: "Политика конфиденциальности",
      s1t: "Кто мы", s1b: "PrimePack уважает вашу конфиденциальность и стремится защитить ваши персональные данные. Настоящая Политика конфиденциальности объясняет, как мы собираем, используем и защищаем вашу информацию при посещении нашего сайта или использовании наших услуг.",
      s2t: "Данные, которые мы собираем", s2b: "Мы можем собирать следующие персональные данные, когда вы связываетесь с нами или используете наш сайт:",
      s2list: ["Полное имя", "Название компании", "Адрес электронной почты", "Номер телефона", "Платёжная информация и информация о доставке", "Данные об использовании сайта (через cookies)"],
      s3t: "Как мы используем ваши данные", s3b: "Мы используем ваши персональные данные для следующих целей:",
      s3list: ["Для ответа на запросы и заявки на предложения", "Для обработки и выполнения заказов", "Для предоставления поддержки клиентам", "Для улучшения работы сайта и пользовательского опыта", "Для выполнения юридических и регуляторных обязательств"],
      s4t: "Правовая основа обработки", s4b: "Мы обрабатываем ваши персональные данные на следующих правовых основаниях в соответствии с GDPR: исполнение договора, законные интересы, юридическое обязательство и — там, где применимо — ваше явное согласие.",
      s5t: "Хранение данных", s5b: "Мы храним персональные данные только в течение времени, необходимого для деловых и юридических целей. Записи о транзакциях могут храниться до 7 лет в соответствии с латвийским законодательством.",
      s6t: "Передача данных", s6b: "Мы не продаём ваши персональные данные. Мы можем передавать данные надёжным сторонним поставщикам услуг (электронная почта, логистика, обработка платежей) только в мере, необходимой для предоставления наших услуг.",
      s7t: "Ваши права в соответствии с GDPR", s7b: "Как субъект данных, вы имеете следующие права:",
      s7list: ["Право на доступ к своим персональным данным", "Право на исправление неточных данных", "Право на удаление («право на забвение»)", "Право на ограничение обработки", "Право на переносимость данных", "Право на возражение против обработки"],
      s7trailing: "Чтобы воспользоваться любым из этих прав, свяжитесь с нами: PrimePack.lv@gmail.com.",
      s8t: "Безопасность данных", s8b: "Мы применяем надлежащие технические и организационные меры для защиты ваших персональных данных от несанкционированного доступа, потери или изменения.",
      s9t: "Контакты", s9b: "PrimePack · Salaspils iela 6 K 4 ap.61, Рига LV-1057, Латвия · Email: PrimePack.lv@gmail.com · Телефон: +371 29 429 945",
    },
    cookies: {
      h1: "Политика cookies",
      s1t: "Что такое cookies?", s1b: "Cookies — это небольшие текстовые файлы, хранящиеся на вашем устройстве при посещении сайта. Они помогают сайтам корректно работать, запоминать ваши предпочтения и предоставляют информацию о том, как посетители используют сайт.",
      s2t: "Как мы используем cookies", s2b: "PrimePack использует cookies для улучшения вашего опыта просмотра, анализа трафика сайта и запоминания пользовательских предпочтений. Мы не используем cookies для сбора персонально идентифицируемой информации без вашего согласия.",
      s3t: "Типы используемых cookies",
      s3e1t: "Необходимые cookies", s3e1b: "Необходимы для корректной работы сайта. Их нельзя отключить без влияния на функциональность.",
      s3e2t: "Аналитические cookies", s3e2b: "Помогают нам понять, как посетители взаимодействуют с сайтом. Данные агрегированы и анонимны. Мы можем использовать такие инструменты, как Google Analytics.",
      s3e3t: "Cookies предпочтений", s3e3b: "Запоминают ваши настройки и предпочтения для лучшего просмотра при повторных посещениях.",
      s4t: "Управление cookies", s4b: "Вы можете управлять cookies или отключить их в настройках браузера в любое время. Обратите внимание, что отключение некоторых cookies может повлиять на функциональность сайта. Большинство современных браузеров позволяют вам:",
      s4list: ["Просматривать текущие сохранённые cookies", "Блокировать cookies с определённых сайтов", "Удалять все cookies при закрытии браузера", "Устанавливать предпочтения для cookies конкретных сайтов"],
      s5t: "Сторонние cookies", s5b: "Некоторые страницы нашего сайта могут содержать контент сторонних служб (например, Google Maps или аналитических платформ), которые могут устанавливать собственные cookies. Они регулируются политикой cookies соответствующей третьей стороны.",
      s6t: "Контакты", s6b: "По любым вопросам об использовании нами cookies: PrimePack.lv@gmail.com · +371 29 429 945",
    },
    returns: {
      h1: "Политика возврата и возврата средств",
      s1t: "Проверка при доставке", s1b: "Все клиенты обязаны проверить товары при доставке. Товары должны быть проверены по количеству, спецификации и состоянию перед принятием доставки.",
      s2t: "Сообщение о дефектах или несоответствиях", s2b: "Если товары признаны дефектными, повреждёнными при транспортировке или неверно поставленными, клиенты обязаны уведомить PrimePack в письменной форме в течение 7 рабочих дней с даты доставки. Для подачи претензии свяжитесь с нами по адресу PrimePack.lv@gmail.com со следующей информацией:",
      s2list: ["Номер ссылки на заказ", "Описание дефекта или несоответствия", "Фотографические доказательства, если применимо", "Затронутое количество"],
      s3t: "Индивидуальные и специально изготовленные продукты", s3b: "Продукты, изготовленные по индивидуальному заказу — включая продукты с брендингом клиента — как правило, не подлежат возврату, если только они не признаны дефектными или не соответствуют согласованной спецификации.",
      s4t: "Процесс возврата", s4b: "Одобренный возврат должен быть организован заранее с PrimePack. Товары должны быть возвращены в оригинальном состоянии и упаковке. Условия возврата и расходы согласовываются индивидуально.",
      s5t: "Возврат средств", s5b: "Одобренный возврат средств будет обработан с использованием оригинального метода оплаты. PrimePack оставляет за собой право предложить замену товара вместо денежного возврата.",
      s6t: "Исключения", s6b: "Возврат и возврат средств не принимается за:",
      s6list: ["Товары, повреждённые после доставки вследствие ненадлежащего хранения или обращения", "Товары, возвращённые без предварительного письменного согласия PrimePack", "Претензии, поданные по истечении 7-рабочедневного окна уведомления"],
      s7t: "Контакты", s7b: "По вопросам возврата: Email: PrimePack.lv@gmail.com · Телефон: +371 29 429 945",
      ctaText: "Есть вопрос о заказе или возврате?",
      ctaLink: "Свяжитесь с нашей командой",
      ctaSuffix: "и мы поможем решить его как можно быстрее.",
    },
  },
};
