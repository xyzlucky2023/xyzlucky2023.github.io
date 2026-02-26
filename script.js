const appRatingEl = document.getElementById("app-rating");
const appRatingCountEl = document.getElementById("app-rating-count");
const appVersionEl = document.getElementById("app-version");
const appVersionNoteEl = document.getElementById("app-version-note");
const langSelectEl = document.getElementById("lang-select");
const themeToggleEl = document.getElementById("theme-toggle");

const phoneShotEl = document.getElementById("phone-shot");
const phoneDotsEl = document.getElementById("shot-dots");
const prevBtn = document.getElementById("shot-prev");
const nextBtn = document.getElementById("shot-next");

const shots = [
  "./assets/images/screenshot-1.png",
  "./assets/images/screenshot-2.png",
  "./assets/images/screenshot-3.png",
  "./assets/images/screenshot-4.png",
  "./assets/images/screenshot-5.png"
];

const translations = {
  EN: {
    nav_features: "Features",
    nav_scenes: "Use Cases",
    nav_faq: "FAQ",
    nav_download: "Download",
    brand_name: "Random Picker",
    app_id: "App Store ID: 6444668239",
    hero_title: "Random Picker for Giveaways",
    hero_eyebrow: "Pick a winner in 3 seconds",
    hero_lead: "This is the app you shared: <strong>Random Picker for Giveaways</strong> (App ID: 6444668239). One app for giveaways, random choices, and group games.",
    hero_open: "Open App Store",
    hero_features: "View Features",
    meta_category_value: "Utilities",
    meta_category_label: "Category",
    phone_chip: "APP PREVIEW",
    phone_title: "Official Screens",
    features_title: "Core Features",
    feature1_title: "Lucky Wheel",
    feature1_desc: "Create entries and spin instantly for giveaways, grouping, and decisions.",
    feature2_title: "Finger Picker",
    feature2_desc: "Multiple players touch the screen and one finger gets selected at random.",
    feature3_title: "Draw Lots",
    feature3_desc: "Paperless lot drawing for classes, attendance, and task assignment.",
    feature4_title: "Random Toolkit",
    feature4_desc: "Random numbers, random events, coin flip, and dice in one toolkit.",
    scenes_title: "Use Cases",
    scene1_t: "Giveaways",
    scene1_d: "Pick winners quickly and reduce manual bias.",
    scene2_t: "Classroom",
    scene2_d: "Random roll call and grouping to increase participation.",
    scene3_t: "Friends",
    scene3_d: "Truth-or-dare, who pays, and where to eat.",
    scene4_t: "Teams",
    scene4_d: "Randomize small task assignments to move faster.",
    download_title: "Download Now",
    download_sub: "Platform: iPhone / iPad (Designed for iPad)",
    download_cta: "Download on the App Store",
    faq_title: "FAQ",
    faq1_q: "Which app is this website for?",
    faq1_a: "This page corresponds to <code>Random Picker for Giveaways</code> (ID: 6444668239) on App Store.",
    faq2_q: "How is data accuracy handled?",
    faq2_a: "Rating and version data are fetched from official App Store metadata.",
    faq3_q: "Where can I find privacy policy?",
    faq3_a: "Privacy Policy: <a href=\"https://xyzlucky2023.github.io/Privacy/index.html\">https://xyzlucky2023.github.io/Privacy/index.html</a>",
    footer: "© 2026 Random Picker for Giveaways. Official website.",
    rating_count: "{store} rating ({count} ratings)",
    version_note: "From App Store official metadata (version date {date})",
    theme_dark: "Dark",
    theme_light: "Light"
  },
  ZH: {
    nav_features: "功能",
    nav_scenes: "场景",
    nav_faq: "FAQ",
    nav_download: "下载",
    brand_name: "幸运者",
    app_id: "App Store ID: 6444668239",
    hero_title: "幸运者",
    hero_eyebrow: "3 秒选出幸运者",
    hero_lead: "这就是你分享的 App：<strong>幸运者</strong>（App ID: 6444668239）。一个 App 覆盖抽奖、随机决策和多人游戏。",
    hero_open: "打开 App Store",
    hero_features: "查看功能",
    meta_category_value: "工具",
    meta_category_label: "分类",
    phone_chip: "应用预览",
    phone_title: "官方截图",
    features_title: "核心功能",
    feature1_title: "幸运大转盘",
    feature1_desc: "创建候选项并快速转盘，适合抽奖、分组和决策。",
    feature2_title: "手指轮盘",
    feature2_desc: "多人同时触屏，系统随机选中一位。",
    feature3_title: "抽签",
    feature3_desc: "无纸化抽签，适合课堂点名与任务分配。",
    feature4_title: "随机工具",
    feature4_desc: "随机数字、随机事件、抛硬币、掷骰子一站整合。",
    scenes_title: "使用场景",
    scene1_t: "社媒抽奖",
    scene1_d: "快速选出中奖者，减少人工偏差。",
    scene2_t: "课堂教学",
    scene2_d: "随机点名和分组，提升参与度。",
    scene3_t: "朋友聚会",
    scene3_d: "真心话大冒险、谁买单、去哪吃，一键决定。",
    scene4_t: "团队协作",
    scene4_d: "随机分配小任务，提高推进效率。",
    download_title: "立即下载",
    download_sub: "平台：iPhone / iPad（Designed for iPad）",
    download_cta: "前往 App Store 下载",
    faq_title: "常见问题",
    faq1_q: "这个网站对应哪个 App？",
    faq1_a: "本页面对应 App Store 的 <code>幸运者</code>（ID: 6444668239）。",
    faq2_q: "数据准确性如何处理？",
    faq2_a: "评分和版本信息来自 App Store 官方元数据。",
    faq3_q: "在哪里查看隐私政策？",
    faq3_a: "<a href=\"https://xyzlucky2023.github.io/Privacy/index.html\">隐私政策</a>",
    footer: "© 2026 幸运者 官方网站。",
    rating_count: "{store}评分（{count} 条）",
    version_note: "来自 App Store 官方数据（版本日期 {date}）",
    theme_dark: "暗黑",
    theme_light: "浅色"
  },
  AR: {
    nav_features: "المزايا",
    nav_scenes: "الاستخدامات",
    nav_faq: "الأسئلة",
    nav_download: "تنزيل",
    app_id: "معرّف App Store: 6444668239",
    hero_eyebrow: "اختر فائزًا خلال 3 ثوانٍ",
    hero_lead: "هذا هو التطبيق الذي شاركته: <strong>Random Picker for Giveaways</strong> (المعرّف: 6444668239). تطبيق واحد للسحوبات والاختيارات العشوائية وألعاب المجموعات.",
    hero_open: "فتح App Store",
    hero_features: "عرض المزايا",
    meta_category_value: "أدوات",
    meta_category_label: "الفئة",
    phone_chip: "معاينة التطبيق",
    phone_title: "لقطات رسمية",
    features_title: "المزايا الأساسية",
    feature1_desc: "أنشئ العناصر وابدأ العجلة فورًا للسحوبات والتقسيم واتخاذ القرار.",
    feature2_desc: "يلمس عدة لاعبين الشاشة ويتم اختيار إصبع واحد عشوائيًا.",
    feature3_desc: "سحب قرعة بدون ورق للفصول الدراسية وتوزيع المهام.",
    feature4_desc: "أرقام عشوائية وأحداث عشوائية ورمي عملة ونرد في مكان واحد.",
    scenes_title: "سيناريوهات الاستخدام",
    scene1_t: "السحوبات",
    scene1_d: "اختر الفائزين بسرعة وقلل التحيز اليدوي.",
    scene2_t: "الصف الدراسي",
    scene2_d: "مناداة وتوزيع عشوائيان لزيادة التفاعل.",
    scene3_t: "الأصدقاء",
    scene3_d: "الحقيقة أم الجرأة، من يدفع، وأين نأكل.",
    scene4_t: "الفرق",
    scene4_d: "وزّع المهام الصغيرة عشوائيًا لتسريع التنفيذ.",
    download_title: "نزّل الآن",
    download_sub: "المنصة: iPhone / iPad (مصمم لـ iPad)",
    download_cta: "تنزيل من App Store",
    faq_title: "الأسئلة الشائعة",
    faq1_q: "لأي تطبيق هذا الموقع؟",
    faq1_a: "تخص هذه الصفحة تطبيق <code>Random Picker for Giveaways</code> (ID: 6444668239) على App Store.",
    faq2_q: "كيف يتم التعامل مع دقة البيانات؟",
    faq2_a: "يتم جلب بيانات التقييم والإصدار من بيانات App Store الرسمية.",
    faq3_q: "أين أجد سياسة الخصوصية؟",
    faq3_a: "يرجى مراجعة روابط الشروط والخصوصية في قسم المطور على App Store.",
    footer: "© 2026 Random Picker for Giveaways. الموقع الرسمي.",
    rating_count: "تقييم متجر US ({count})",
    version_note: "بيانات رسمية من App Store (تاريخ الإصدار {date})",
    theme_dark: "داكن",
    theme_light: "فاتح"
  },
  FR: {
    nav_features: "Fonctions",
    nav_scenes: "Usages",
    nav_faq: "FAQ",
    nav_download: "Télécharger",
    app_id: "ID App Store : 6444668239",
    hero_eyebrow: "Choisissez un gagnant en 3 secondes",
    hero_lead: "Voici l'application que vous avez partagée : <strong>Random Picker for Giveaways</strong> (ID : 6444668239). Une seule app pour tirages, choix aléatoires et jeux de groupe.",
    hero_open: "Ouvrir App Store",
    hero_features: "Voir les fonctions",
    meta_category_value: "Utilitaires",
    meta_category_label: "Catégorie",
    phone_chip: "APERÇU APP",
    phone_title: "Captures officielles",
    features_title: "Fonctions clés",
    feature1_desc: "Créez des entrées et lancez la roue instantanément.",
    feature2_desc: "Plusieurs joueurs touchent l'écran, un doigt est choisi au hasard.",
    feature3_desc: "Tirage au sort sans papier pour classe et répartition des tâches.",
    feature4_desc: "Nombres aléatoires, événements, pile ou face et dés.",
    scenes_title: "Cas d'usage",
    scene1_t: "Giveaways",
    scene1_d: "Choisissez rapidement les gagnants avec moins de biais manuel.",
    scene2_t: "Classe",
    scene2_d: "Appel et groupes aléatoires pour plus de participation.",
    scene3_t: "Amis",
    scene3_d: "Action ou vérité, qui paie, où manger.",
    scene4_t: "Équipes",
    scene4_d: "Répartissez aléatoirement les petites tâches.",
    download_title: "Télécharger",
    download_sub: "Plateforme : iPhone / iPad (conçu pour iPad)",
    download_cta: "Télécharger sur App Store",
    faq_title: "FAQ",
    faq1_q: "Cette page concerne quelle application ?",
    faq1_a: "Cette page correspond à <code>Random Picker for Giveaways</code> (ID : 6444668239) sur App Store.",
    faq2_q: "Comment la précision des données est-elle gérée ?",
    faq2_a: "La note et la version proviennent des métadonnées officielles App Store.",
    faq3_q: "Où trouver la politique de confidentialité ?",
    faq3_a: "Consultez les liens Conditions et Confidentialité dans la section développeur App Store.",
    footer: "© 2026 Random Picker for Giveaways. Site officiel.",
    rating_count: "Note US ({count} avis)",
    version_note: "Données officielles App Store (version du {date})",
    theme_dark: "Sombre",
    theme_light: "Clair"
  },
  DE: {
    nav_features: "Funktionen",
    nav_scenes: "Einsatz",
    nav_faq: "FAQ",
    nav_download: "Download",
    app_id: "App Store ID: 6444668239",
    hero_eyebrow: "Wähle einen Gewinner in 3 Sekunden",
    hero_lead: "Das ist die App, die du geteilt hast: <strong>Random Picker for Giveaways</strong> (ID: 6444668239). Eine App für Verlosungen, Zufallsentscheidungen und Gruppenspiele.",
    hero_open: "App Store öffnen",
    hero_features: "Funktionen ansehen",
    meta_category_value: "Dienstprogramme",
    meta_category_label: "Kategorie",
    phone_chip: "APP-VORSCHAU",
    phone_title: "Offizielle Screens",
    features_title: "Kernfunktionen",
    feature1_desc: "Einträge erstellen und Rad sofort drehen.",
    feature2_desc: "Mehrere Personen berühren den Bildschirm, ein Finger wird zufällig gewählt.",
    feature3_desc: "Papierloses Losziehen für Unterricht und Aufgaben.",
    feature4_desc: "Zufallszahlen, Ereignisse, Münzwurf und Würfel in einem Tool.",
    scenes_title: "Anwendungsfälle",
    scene1_t: "Verlosungen",
    scene1_d: "Gewinner schnell wählen und manuelle Verzerrung reduzieren.",
    scene2_t: "Klassenraum",
    scene2_d: "Zufälliger Aufruf und Gruppenbildung für mehr Beteiligung.",
    scene3_t: "Freunde",
    scene3_d: "Wahrheit oder Pflicht, wer zahlt, wo essen.",
    scene4_t: "Teams",
    scene4_d: "Kleine Aufgaben zufällig verteilen.",
    download_title: "Jetzt laden",
    download_sub: "Plattform: iPhone / iPad (Designed for iPad)",
    download_cta: "Im App Store laden",
    faq_title: "FAQ",
    faq1_q: "Für welche App ist diese Website?",
    faq1_a: "Diese Seite gehört zu <code>Random Picker for Giveaways</code> (ID: 6444668239) im App Store.",
    faq2_q: "Wie wird Datengenauigkeit behandelt?",
    faq2_a: "Bewertung und Version stammen aus offiziellen App-Store-Metadaten.",
    faq3_q: "Wo finde ich die Datenschutzerklärung?",
    faq3_a: "Bitte die Links zu AGB und Datenschutz im Entwicklerbereich des App Store prüfen.",
    footer: "© 2026 Random Picker for Giveaways. Offizielle Website.",
    rating_count: "US-Bewertung ({count} Bewertungen)",
    version_note: "Offizielle App-Store-Daten (Versionsdatum {date})",
    theme_dark: "Dunkel",
    theme_light: "Hell"
  },
  ID: {
    nav_features: "Fitur",
    nav_scenes: "Skenario",
    nav_faq: "FAQ",
    nav_download: "Unduh",
    app_id: "ID App Store: 6444668239",
    hero_eyebrow: "Pilih pemenang dalam 3 detik",
    hero_lead: "Ini aplikasi yang Anda bagikan: <strong>Random Picker for Giveaways</strong> (ID: 6444668239). Satu aplikasi untuk giveaway, pilihan acak, dan permainan grup.",
    hero_open: "Buka App Store",
    hero_features: "Lihat Fitur",
    meta_category_value: "Utilitas",
    meta_category_label: "Kategori",
    phone_chip: "PRATINJAU APP",
    phone_title: "Tangkapan resmi",
    features_title: "Fitur Utama",
    feature1_desc: "Buat entri dan putar roda secara instan.",
    feature2_desc: "Beberapa pemain menyentuh layar, satu jari dipilih acak.",
    feature3_desc: "Undian tanpa kertas untuk kelas dan pembagian tugas.",
    feature4_desc: "Angka acak, event acak, lempar koin, dan dadu.",
    scenes_title: "Kasus Penggunaan",
    scene1_t: "Giveaway",
    scene1_d: "Pilih pemenang lebih cepat dan kurangi bias manual.",
    scene2_t: "Kelas",
    scene2_d: "Panggilan acak dan pembagian kelompok.",
    scene3_t: "Teman",
    scene3_d: "Truth or dare, siapa bayar, dan pilih tempat makan.",
    scene4_t: "Tim",
    scene4_d: "Acak pembagian tugas kecil agar lebih cepat.",
    download_title: "Unduh Sekarang",
    download_sub: "Platform: iPhone / iPad (Designed for iPad)",
    download_cta: "Unduh di App Store",
    faq_title: "FAQ",
    faq1_q: "Website ini untuk aplikasi apa?",
    faq1_a: "Halaman ini untuk <code>Random Picker for Giveaways</code> (ID: 6444668239) di App Store.",
    faq2_q: "Bagaimana akurasi data ditangani?",
    faq2_a: "Rating dan versi diambil dari metadata resmi App Store.",
    faq3_q: "Di mana kebijakan privasi?",
    faq3_a: "Silakan lihat tautan Terms dan Privacy pada bagian developer di App Store.",
    footer: "© 2026 Random Picker for Giveaways. Situs resmi.",
    rating_count: "Rating US ({count})",
    version_note: "Data resmi App Store (tanggal versi {date})",
    theme_dark: "Gelap",
    theme_light: "Terang"
  },
  IT: {
    nav_features: "Funzioni",
    nav_scenes: "Scenari",
    nav_faq: "FAQ",
    nav_download: "Scarica",
    app_id: "ID App Store: 6444668239",
    hero_eyebrow: "Scegli un vincitore in 3 secondi",
    hero_lead: "Questa è l'app che hai condiviso: <strong>Random Picker for Giveaways</strong> (ID: 6444668239). Un'unica app per giveaway, scelte casuali e giochi di gruppo.",
    hero_open: "Apri App Store",
    hero_features: "Vedi funzioni",
    meta_category_value: "Utility",
    meta_category_label: "Categoria",
    phone_chip: "ANTEPRIMA APP",
    phone_title: "Schermate ufficiali",
    features_title: "Funzioni principali",
    feature1_desc: "Crea elementi e avvia subito la ruota.",
    feature2_desc: "Più giocatori toccano lo schermo, un dito viene scelto a caso.",
    feature3_desc: "Estrazione senza carta per classe e assegnazioni.",
    feature4_desc: "Numeri casuali, eventi, moneta e dadi in un unico toolkit.",
    scenes_title: "Casi d'uso",
    scene1_t: "Giveaway",
    scene1_d: "Scegli i vincitori rapidamente e riduci i bias manuali.",
    scene2_t: "Classe",
    scene2_d: "Appello e gruppi casuali per più partecipazione.",
    scene3_t: "Amici",
    scene3_d: "Obbligo o verità, chi paga, dove mangiare.",
    scene4_t: "Team",
    scene4_d: "Assegna piccoli task in modo casuale.",
    download_title: "Scarica ora",
    download_sub: "Piattaforma: iPhone / iPad (Designed for iPad)",
    download_cta: "Scarica su App Store",
    faq_title: "FAQ",
    faq1_q: "A quale app si riferisce questo sito?",
    faq1_a: "Questa pagina corrisponde a <code>Random Picker for Giveaways</code> (ID: 6444668239) su App Store.",
    faq2_q: "Come gestite l'accuratezza dei dati?",
    faq2_a: "Valutazione e versione sono prese dai metadati ufficiali di App Store.",
    faq3_q: "Dove trovo la privacy policy?",
    faq3_a: "Controlla i link Terms e Privacy nella sezione sviluppatore su App Store.",
    footer: "© 2026 Random Picker for Giveaways. Sito ufficiale.",
    rating_count: "Valutazione US ({count})",
    version_note: "Dati ufficiali App Store (data versione {date})",
    theme_dark: "Scuro",
    theme_light: "Chiaro"
  },
  JA: {
    nav_features: "機能",
    nav_scenes: "利用シーン",
    nav_faq: "FAQ",
    nav_download: "ダウンロード",
    app_id: "App Store ID: 6444668239",
    hero_eyebrow: "3秒で当選者を選択",
    hero_lead: "あなたが共有したアプリは <strong>Random Picker for Giveaways</strong>（ID: 6444668239）です。抽選、ランダム選択、グループゲームを1つで対応します。",
    hero_open: "App Store を開く",
    hero_features: "機能を見る",
    meta_category_value: "ユーティリティ",
    meta_category_label: "カテゴリ",
    phone_chip: "アプリプレビュー",
    phone_title: "公式スクリーン",
    features_title: "主な機能",
    feature1_desc: "候補を作成してすぐにルーレットを回せます。",
    feature2_desc: "複数人で画面に触れて、1本の指をランダム選択。",
    feature3_desc: "紙不要のくじ引きで授業や役割分担に最適。",
    feature4_desc: "乱数、ランダムイベント、コイントス、サイコロを統合。",
    scenes_title: "利用ケース",
    scene1_t: "プレゼント企画",
    scene1_d: "当選者を素早く選び、手作業の偏りを抑えます。",
    scene2_t: "授業",
    scene2_d: "ランダム指名・グループ分けで参加率アップ。",
    scene3_t: "友だち",
    scene3_d: "真実か挑戦か、誰が払うか、どこで食べるかを即決。",
    scene4_t: "チーム",
    scene4_d: "小さなタスクをランダム配分して進行を高速化。",
    download_title: "今すぐダウンロード",
    download_sub: "対応: iPhone / iPad（Designed for iPad）",
    download_cta: "App Store でダウンロード",
    faq_title: "FAQ",
    faq1_q: "このサイトはどのアプリ向けですか？",
    faq1_a: "このページは App Store の <code>Random Picker for Giveaways</code>（ID: 6444668239）向けです。",
    faq2_q: "データ精度はどう担保していますか？",
    faq2_a: "評価とバージョン情報は App Store の公式メタデータから取得します。",
    faq3_q: "プライバシーポリシーはどこですか？",
    faq3_a: "App Store の開発者情報欄にある Terms / Privacy リンクを確認してください。",
    footer: "© 2026 Random Picker for Giveaways. 公式サイト。",
    rating_count: "US評価（{count}件）",
    version_note: "App Store公式データ（バージョン日付 {date}）",
    theme_dark: "ダーク",
    theme_light: "ライト"
  },
  KO: {
    nav_features: "기능",
    nav_scenes: "활용 장면",
    nav_faq: "FAQ",
    nav_download: "다운로드",
    app_id: "App Store ID: 6444668239",
    hero_eyebrow: "3초 안에 당첨자 선택",
    hero_lead: "공유한 앱은 <strong>Random Picker for Giveaways</strong>(ID: 6444668239)입니다. 추첨, 랜덤 선택, 그룹 게임을 하나의 앱에서 처리합니다.",
    hero_open: "App Store 열기",
    hero_features: "기능 보기",
    meta_category_value: "유틸리티",
    meta_category_label: "카테고리",
    phone_chip: "앱 미리보기",
    phone_title: "공식 스크린샷",
    features_title: "핵심 기능",
    feature1_desc: "항목을 만들고 바로 룰렛을 돌릴 수 있습니다.",
    feature2_desc: "여러 명이 화면을 터치하면 한 손가락을 랜덤 선택합니다.",
    feature3_desc: "종이 없이 제비뽑기로 수업/업무 배정을 처리합니다.",
    feature4_desc: "랜덤 숫자, 이벤트, 동전 던지기, 주사위를 통합 제공합니다.",
    scenes_title: "사용 사례",
    scene1_t: "이벤트 추첨",
    scene1_d: "빠르게 당첨자를 뽑고 수동 편향을 줄입니다.",
    scene2_t: "교실",
    scene2_d: "랜덤 호명과 조 편성으로 참여도를 높입니다.",
    scene3_t: "친구 모임",
    scene3_d: "진실게임, 계산할 사람, 식당 선택을 즉시 결정.",
    scene4_t: "팀 협업",
    scene4_d: "작은 업무를 랜덤 배정해 진행 속도를 높입니다.",
    download_title: "지금 다운로드",
    download_sub: "플랫폼: iPhone / iPad (Designed for iPad)",
    download_cta: "App Store에서 다운로드",
    faq_title: "FAQ",
    faq1_q: "이 웹사이트는 어떤 앱용인가요?",
    faq1_a: "이 페이지는 App Store의 <code>Random Picker for Giveaways</code>(ID: 6444668239)용입니다.",
    faq2_q: "데이터 정확성은 어떻게 처리하나요?",
    faq2_a: "평점과 버전은 App Store 공식 메타데이터에서 가져옵니다.",
    faq3_q: "개인정보처리방침은 어디서 보나요?",
    faq3_a: "App Store 개발자 정보 영역의 Terms/Privacy 링크를 확인하세요.",
    footer: "© 2026 Random Picker for Giveaways. 공식 웹사이트.",
    rating_count: "미국 평점 ({count})",
    version_note: "App Store 공식 데이터 (버전 날짜 {date})",
    theme_dark: "다크",
    theme_light: "라이트"
  },
  MS: {
    nav_features: "Ciri",
    nav_scenes: "Senario",
    nav_faq: "FAQ",
    nav_download: "Muat turun",
    app_id: "ID App Store: 6444668239",
    hero_eyebrow: "Pilih pemenang dalam 3 saat",
    hero_lead: "Ini aplikasi yang anda kongsi: <strong>Random Picker for Giveaways</strong> (ID: 6444668239). Satu aplikasi untuk giveaway, pilihan rawak dan permainan kumpulan.",
    hero_open: "Buka App Store",
    hero_features: "Lihat Ciri",
    meta_category_value: "Utiliti",
    meta_category_label: "Kategori",
    phone_chip: "PRATONTON APP",
    phone_title: "Tangkapan rasmi",
    features_title: "Ciri Teras",
    feature1_desc: "Cipta entri dan putar roda serta-merta.",
    feature2_desc: "Beberapa pemain sentuh skrin, satu jari dipilih secara rawak.",
    feature3_desc: "Cabutan tanpa kertas untuk kelas dan agihan tugasan.",
    feature4_desc: "Nombor rawak, acara rawak, baling syiling dan dadu.",
    scenes_title: "Kes Penggunaan",
    scene1_t: "Giveaway",
    scene1_d: "Pilih pemenang dengan cepat dan kurangkan bias manual.",
    scene2_t: "Bilik darjah",
    scene2_d: "Panggilan nama dan kumpulan rawak untuk tingkatkan penglibatan.",
    scene3_t: "Rakan",
    scene3_d: "Truth or dare, siapa bayar, dan lokasi makan.",
    scene4_t: "Pasukan",
    scene4_d: "Agih tugasan kecil secara rawak untuk gerak lebih pantas.",
    download_title: "Muat Turun Sekarang",
    download_sub: "Platform: iPhone / iPad (Designed for iPad)",
    download_cta: "Muat turun di App Store",
    faq_title: "FAQ",
    faq1_q: "Laman ini untuk aplikasi mana?",
    faq1_a: "Halaman ini untuk <code>Random Picker for Giveaways</code> (ID: 6444668239) di App Store.",
    faq2_q: "Bagaimana ketepatan data diurus?",
    faq2_a: "Penilaian dan versi diambil daripada metadata rasmi App Store.",
    faq3_q: "Di mana dasar privasi?",
    faq3_a: "Sila rujuk pautan Terms dan Privacy di bahagian pembangun App Store.",
    footer: "© 2026 Random Picker for Giveaways. Laman rasmi.",
    rating_count: "Penilaian US ({count})",
    version_note: "Data rasmi App Store (tarikh versi {date})",
    theme_dark: "Gelap",
    theme_light: "Cerah"
  },
  PT: {
    nav_features: "Recursos",
    nav_scenes: "Cenários",
    nav_faq: "FAQ",
    nav_download: "Baixar",
    app_id: "ID da App Store: 6444668239",
    hero_eyebrow: "Escolha um vencedor em 3 segundos",
    hero_lead: "Este é o app que você compartilhou: <strong>Random Picker for Giveaways</strong> (ID: 6444668239). Um único app para sorteios, escolhas aleatórias e jogos em grupo.",
    hero_open: "Abrir App Store",
    hero_features: "Ver recursos",
    meta_category_value: "Utilitários",
    meta_category_label: "Categoria",
    phone_chip: "PRÉVIA DO APP",
    phone_title: "Capturas oficiais",
    features_title: "Recursos principais",
    feature1_desc: "Crie entradas e gire a roleta instantaneamente.",
    feature2_desc: "Várias pessoas tocam na tela e um dedo é escolhido aleatoriamente.",
    feature3_desc: "Sorteio sem papel para sala de aula e distribuição de tarefas.",
    feature4_desc: "Números aleatórios, eventos, cara ou coroa e dados em um só lugar.",
    scenes_title: "Casos de uso",
    scene1_t: "Giveaways",
    scene1_d: "Escolha vencedores rapidamente e reduza viés manual.",
    scene2_t: "Sala de aula",
    scene2_d: "Chamada e grupos aleatórios para mais participação.",
    scene3_t: "Amigos",
    scene3_d: "Verdade ou desafio, quem paga e onde comer.",
    scene4_t: "Times",
    scene4_d: "Distribua pequenas tarefas de forma aleatória.",
    download_title: "Baixar agora",
    download_sub: "Plataforma: iPhone / iPad (Designed for iPad)",
    download_cta: "Baixar na App Store",
    faq_title: "FAQ",
    faq1_q: "Este site é para qual app?",
    faq1_a: "Esta página corresponde ao <code>Random Picker for Giveaways</code> (ID: 6444668239) na App Store.",
    faq2_q: "Como a precisão dos dados é tratada?",
    faq2_a: "Avaliação e versão vêm dos metadados oficiais da App Store.",
    faq3_q: "Onde encontro a política de privacidade?",
    faq3_a: "Confira os links de Terms e Privacy na seção do desenvolvedor na App Store.",
    footer: "© 2026 Random Picker for Giveaways. Site oficial.",
    rating_count: "Classificação US ({count})",
    version_note: "Dados oficiais da App Store (data da versão {date})",
    theme_dark: "Escuro",
    theme_light: "Claro"
  },
  RU: {
    nav_features: "Функции",
    nav_scenes: "Сценарии",
    nav_faq: "FAQ",
    nav_download: "Скачать",
    app_id: "ID App Store: 6444668239",
    hero_eyebrow: "Выберите победителя за 3 секунды",
    hero_lead: "Это приложение, которое вы указали: <strong>Random Picker for Giveaways</strong> (ID: 6444668239). Один инструмент для розыгрышей, случайного выбора и игр в группе.",
    hero_open: "Открыть App Store",
    hero_features: "Смотреть функции",
    meta_category_value: "Утилиты",
    meta_category_label: "Категория",
    phone_chip: "ПРЕВЬЮ ПРИЛОЖЕНИЯ",
    phone_title: "Официальные скриншоты",
    features_title: "Ключевые функции",
    feature1_desc: "Создайте варианты и мгновенно запустите колесо.",
    feature2_desc: "Несколько игроков касаются экрана, один палец выбирается случайно.",
    feature3_desc: "Жеребьевка без бумаги для занятий и распределения задач.",
    feature4_desc: "Случайные числа, события, монетка и кости в одном наборе.",
    scenes_title: "Сценарии использования",
    scene1_t: "Розыгрыши",
    scene1_d: "Быстрый выбор победителей и меньше ручной предвзятости.",
    scene2_t: "Класс",
    scene2_d: "Случайный вызов и распределение по группам.",
    scene3_t: "Друзья",
    scene3_d: "Правда или действие, кто платит, куда пойти поесть.",
    scene4_t: "Команды",
    scene4_d: "Случайно распределяйте небольшие задачи для ускорения работы.",
    download_title: "Скачать сейчас",
    download_sub: "Платформа: iPhone / iPad (Designed for iPad)",
    download_cta: "Скачать в App Store",
    faq_title: "FAQ",
    faq1_q: "Для какого приложения этот сайт?",
    faq1_a: "Эта страница относится к <code>Random Picker for Giveaways</code> (ID: 6444668239) в App Store.",
    faq2_q: "Как обеспечивается точность данных?",
    faq2_a: "Рейтинг и версия берутся из официальных метаданных App Store.",
    faq3_q: "Где посмотреть политику конфиденциальности?",
    faq3_a: "Проверьте ссылки Terms и Privacy в разделе разработчика в App Store.",
    footer: "© 2026 Random Picker for Giveaways. Официальный сайт.",
    rating_count: "Оценка US ({count})",
    version_note: "Официальные данные App Store (дата версии {date})",
    theme_dark: "Тёмная",
    theme_light: "Светлая"
  },
  ES: {
    nav_features: "Funciones",
    nav_scenes: "Escenarios",
    nav_faq: "FAQ",
    nav_download: "Descargar",
    app_id: "ID de App Store: 6444668239",
    hero_eyebrow: "Elige un ganador en 3 segundos",
    hero_lead: "Esta es la app que compartiste: <strong>Random Picker for Giveaways</strong> (ID: 6444668239). Una sola app para sorteos, decisiones aleatorias y juegos grupales.",
    hero_open: "Abrir App Store",
    hero_features: "Ver funciones",
    meta_category_value: "Utilidades",
    meta_category_label: "Categoría",
    phone_chip: "VISTA PREVIA",
    phone_title: "Capturas oficiales",
    features_title: "Funciones clave",
    feature1_desc: "Crea entradas y gira la ruleta al instante.",
    feature2_desc: "Varias personas tocan la pantalla y se elige un dedo al azar.",
    feature3_desc: "Sorteo sin papel para clase y asignación de tareas.",
    feature4_desc: "Números aleatorios, eventos, moneda y dados en una sola app.",
    scenes_title: "Casos de uso",
    scene1_t: "Sorteos",
    scene1_d: "Elige ganadores rápido y reduce sesgo manual.",
    scene2_t: "Aula",
    scene2_d: "Lista y grupos aleatorios para más participación.",
    scene3_t: "Amigos",
    scene3_d: "Verdad o reto, quién paga y dónde comer.",
    scene4_t: "Equipos",
    scene4_d: "Asigna tareas pequeñas al azar para avanzar más rápido.",
    download_title: "Descargar ahora",
    download_sub: "Plataforma: iPhone / iPad (Designed for iPad)",
    download_cta: "Descargar en App Store",
    faq_title: "FAQ",
    faq1_q: "¿Para qué app es este sitio?",
    faq1_a: "Esta página corresponde a <code>Random Picker for Giveaways</code> (ID: 6444668239) en App Store.",
    faq2_q: "¿Cómo se maneja la precisión de datos?",
    faq2_a: "La calificación y versión se obtienen de metadatos oficiales de App Store.",
    faq3_q: "¿Dónde encuentro la política de privacidad?",
    faq3_a: "Consulta los enlaces de Terms y Privacy en la sección de desarrollador en App Store.",
    footer: "© 2026 Random Picker for Giveaways. Sitio oficial.",
    rating_count: "Valoración US ({count})",
    version_note: "Datos oficiales de App Store (fecha de versión {date})",
    theme_dark: "Oscuro",
    theme_light: "Claro"
  },
  TH: {
    nav_features: "ฟีเจอร์",
    nav_scenes: "การใช้งาน",
    nav_faq: "FAQ",
    nav_download: "ดาวน์โหลด",
    app_id: "App Store ID: 6444668239",
    hero_eyebrow: "เลือกผู้ชนะได้ใน 3 วินาที",
    hero_lead: "นี่คือแอปที่คุณแชร์: <strong>Random Picker for Giveaways</strong> (ID: 6444668239) แอปเดียวจบสำหรับสุ่มจับรางวัล การตัดสินใจแบบสุ่ม และเกมกลุ่ม",
    hero_open: "เปิด App Store",
    hero_features: "ดูฟีเจอร์",
    meta_category_value: "ยูทิลิตี้",
    meta_category_label: "หมวดหมู่",
    phone_chip: "พรีวิวแอป",
    phone_title: "ภาพหน้าจอทางการ",
    features_title: "ฟีเจอร์หลัก",
    feature1_desc: "สร้างรายการและหมุนวงล้อได้ทันที",
    feature2_desc: "หลายคนแตะหน้าจอพร้อมกัน แล้วสุ่มเลือกหนึ่งนิ้ว",
    feature3_desc: "จับฉลากแบบไร้กระดาษสำหรับห้องเรียนและงานทีม",
    feature4_desc: "เลขสุ่ม อีเวนต์สุ่ม โยนเหรียญ และลูกเต๋าในแอปเดียว",
    scenes_title: "กรณีการใช้งาน",
    scene1_t: "กิจกรรมแจกของ",
    scene1_d: "เลือกผู้ชนะได้เร็วและลดอคติจากการเลือกเอง",
    scene2_t: "ห้องเรียน",
    scene2_d: "เรียกชื่อและแบ่งกลุ่มแบบสุ่ม เพิ่มการมีส่วนร่วม",
    scene3_t: "เพื่อน",
    scene3_d: "จริงหรือกล้า ใครจ่าย ไปกินที่ไหน ตัดสินได้ทันที",
    scene4_t: "ทีมงาน",
    scene4_d: "สุ่มมอบหมายงานย่อยเพื่อให้เดินงานเร็วขึ้น",
    download_title: "ดาวน์โหลดตอนนี้",
    download_sub: "แพลตฟอร์ม: iPhone / iPad (Designed for iPad)",
    download_cta: "ดาวน์โหลดบน App Store",
    faq_title: "คำถามที่พบบ่อย",
    faq1_q: "เว็บไซต์นี้สำหรับแอปไหน?",
    faq1_a: "หน้านี้ตรงกับแอป <code>Random Picker for Giveaways</code> (ID: 6444668239) บน App Store",
    faq2_q: "จัดการความถูกต้องของข้อมูลอย่างไร?",
    faq2_a: "คะแนนและเวอร์ชันดึงจากเมทาดาทาทางการของ App Store",
    faq3_q: "ดูนโยบายความเป็นส่วนตัวได้ที่ไหน?",
    faq3_a: "ดูลิงก์ Terms และ Privacy ในส่วนข้อมูลนักพัฒนาบน App Store",
    footer: "© 2026 Random Picker for Giveaways. เว็บไซต์ทางการ",
    rating_count: "คะแนน US ({count})",
    version_note: "ข้อมูลทางการจาก App Store (วันที่เวอร์ชัน {date})",
    theme_dark: "มืด",
    theme_light: "สว่าง"
  }
};

let currentShot = 0;
let timer = null;
let activeLang = localStorage.getItem("site_lang") || "EN";
let appMetaByStore = {};

function t(key) {
  return translations[activeLang]?.[key] ?? translations.EN[key] ?? key;
}

function applyI18n() {
  document.documentElement.lang = activeLang === "ZH" ? "zh-CN" : activeLang.toLowerCase();
  document.documentElement.dir = activeLang === "AR" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (!key) return;
    el.innerHTML = t(key);
  });
  if (themeToggleEl) themeToggleEl.textContent = document.documentElement.dataset.theme === "dark" ? t("theme_light") : t("theme_dark");
}

function languageName(code) {
  const autonyms = {
    AR: "العربية",
    EN: "English",
    FR: "Français",
    DE: "Deutsch",
    ID: "Bahasa Indonesia",
    IT: "Italiano",
    JA: "日本語",
    KO: "한국어",
    MS: "Bahasa Melayu",
    PT: "Português",
    RU: "Русский",
    ZH: "中文",
    ES: "Español",
    TH: "ไทย"
  };
  return autonyms[code] || code;
}

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("site_theme", theme);
  if (themeToggleEl) themeToggleEl.textContent = theme === "dark" ? t("theme_light") : t("theme_dark");
}

function bootstrapTheme() {
  const saved = localStorage.getItem("site_theme");
  if (saved === "light" || saved === "dark") {
    setTheme(saved);
    return;
  }
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  setTheme(prefersDark ? "dark" : "light");
}

function updateReveal() {
  const blocks = document.querySelectorAll(".reveal");
  const trigger = window.innerHeight * 0.85;
  blocks.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) el.classList.add("show");
  });
}

function renderDots() {
  if (!phoneDotsEl) return;
  phoneDotsEl.innerHTML = "";
  shots.forEach((_, idx) => {
    const dot = document.createElement("span");
    if (idx === currentShot) dot.classList.add("active");
    phoneDotsEl.appendChild(dot);
  });
}

function showShot(idx) {
  if (!phoneShotEl) return;
  currentShot = (idx + shots.length) % shots.length;
  phoneShotEl.src = shots[currentShot];
  phoneShotEl.alt = `${t("phone_title")} ${currentShot + 1}`;
  renderDots();
}

function startAutoPlay() {
  if (timer) clearInterval(timer);
  timer = setInterval(() => showShot(currentShot + 1), 3200);
}

function dedupLangCodes(codes) {
  return [...new Set(codes.map((c) => String(c).toUpperCase()))];
}

function fillLanguageSelect(codes) {
  if (!langSelectEl) return;
  const list = dedupLangCodes(codes.length ? codes : ["EN", "ZH"]);
  const sorted = list.sort((a, b) => a.localeCompare(b));
  langSelectEl.innerHTML = sorted.map((code) => `<option value="${code}">${languageName(code)}</option>`).join("");
  if (!sorted.includes(activeLang)) activeLang = sorted.includes("EN") ? "EN" : sorted[0];
  langSelectEl.value = activeLang;
}

function localizeStoreCode(code) {
  const normalized = String(code || "US").toUpperCase();
  if (activeLang === "ZH" && normalized === "US") return "美区";
  if (activeLang === "ZH" && normalized === "CN") return "中区";
  return normalized;
}

function getPreferredStore() {
  return activeLang === "ZH" ? "CN" : "US";
}

function getActiveStoreMeta() {
  const preferred = getPreferredStore();
  return appMetaByStore[preferred] || appMetaByStore.US || appMetaByStore.CN || null;
}

function renderAppStoreMeta() {
  const activeMeta = getActiveStoreMeta();
  if (!activeMeta) return;

  if (appRatingEl && typeof activeMeta.averageUserRating === "number") {
    appRatingEl.textContent = `${activeMeta.averageUserRating.toFixed(1)} / 5`;
  }
  if (appVersionEl && activeMeta.version) {
    appVersionEl.textContent = `v${activeMeta.version}`;
  }
  if (appRatingCountEl && typeof activeMeta.userRatingCount === "number") {
    appRatingCountEl.textContent = t("rating_count")
      .replace("{store}", localizeStoreCode(activeMeta.storeCode))
      .replace("{count}", String(activeMeta.userRatingCount));
  }
  if (appVersionNoteEl && activeMeta.versionDate) {
    appVersionNoteEl.textContent = t("version_note").replace("{date}", activeMeta.versionDate);
  }
}

async function fetchAppMeta(storeCode) {
  const normalized = String(storeCode || "US").toUpperCase();
  const url = normalized === "US"
    ? "https://itunes.apple.com/lookup?id=6444668239"
    : `https://itunes.apple.com/lookup?id=6444668239&country=${normalized.toLowerCase()}`;
  const res = await fetch(url);
  if (!res.ok) return null;
  const data = await res.json();
  const app = data?.results?.[0];
  if (!app) return null;

  let versionDate = null;
  if (app.currentVersionReleaseDate) {
    const d = new Date(app.currentVersionReleaseDate);
    versionDate = `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, "0")}-${String(d.getUTCDate()).padStart(2, "0")}`;
  }

  return {
    storeCode: normalized,
    averageUserRating: app.averageUserRating,
    userRatingCount: app.userRatingCount,
    version: app.version || null,
    versionDate,
    languageCodesISO2A: app.languageCodesISO2A || []
  };
}

async function hydrateFromApple() {
  try {
    const [usMeta, cnMeta] = await Promise.all([
      fetchAppMeta("US"),
      fetchAppMeta("CN")
    ]);

    if (usMeta) {
      appMetaByStore.US = usMeta;
      fillLanguageSelect(usMeta.languageCodesISO2A);
    }
    if (cnMeta) {
      appMetaByStore.CN = cnMeta;
      if (!usMeta) fillLanguageSelect(cnMeta.languageCodesISO2A);
    }
    renderAppStoreMeta();
  } catch (_) {
    fillLanguageSelect(["AR", "EN", "FR", "DE", "ID", "IT", "JA", "KO", "MS", "PT", "RU", "ZH", "ES", "TH"]);
  }
}

if (langSelectEl) {
  langSelectEl.addEventListener("change", (e) => {
    activeLang = String(e.target.value || "EN").toUpperCase();
    localStorage.setItem("site_lang", activeLang);
    fillLanguageSelect(Array.from(langSelectEl.options).map((o) => o.value));
    applyI18n();
    renderAppStoreMeta();
    showShot(currentShot);
  });
}

if (themeToggleEl) {
  themeToggleEl.addEventListener("click", () => {
    const current = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
    setTheme(current === "dark" ? "light" : "dark");
  });
}

if (prevBtn) {
  prevBtn.addEventListener("click", () => {
    showShot(currentShot - 1);
    startAutoPlay();
  });
}

if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    showShot(currentShot + 1);
    startAutoPlay();
  });
}

bootstrapTheme();
applyI18n();
showShot(0);
startAutoPlay();
updateReveal();
window.addEventListener("scroll", updateReveal);
hydrateFromApple().then(() => applyI18n());
