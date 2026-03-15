/* ================================================================
   MK LABS — Catalogue de formations
   Remplace les checkoutUrl par tes vrais liens Stripe/Gumroad
   ================================================================ */

const MK_PRODUCTS = [
  {
    id: "100k-formula",
    title: "100K Formula",
    subtitle: "La méthode complète pour atteindre 100 000€/an en ligne",
    tagline: "Les 12 étapes exactes pour bâtir une machine à revenus — même en partant de zéro.",
    price: 297,
    oldPrice: 497,
    badge: "Bestseller",
    badgeColor: "gold",
    category: "business",
    pages: 320,
    rating: 4.9,
    reviews: 847,
    cover: { gradient: "linear-gradient(135deg, #1e1b4b 0%, #4f46e5 60%, #7c3aed 100%)", emoji: "💰" },
    highlights: ["320 pages", "12 modules vidéo", "Templates inclus", "Accès communauté"],
    includes: [
      "320 pages de stratégie actionnable",
      "12 modules vidéo bonus (6h de contenu)",
      "Templates & scripts prêts à l'emploi",
      "Accès à la communauté privée à vie",
      "3 sessions Q&A live incluses",
      "Mises à jour à vie"
    ],
    learnings: [
      "Identifier ta niche profitable en moins de 48h",
      "Construire une offre irrésistible que les gens achètent sans hésiter",
      "Lancer ton premier tunnel de vente de A à Z",
      "Attirer des clients qualifiés sans publicité payante",
      "Automatiser tes ventes pour gagner en dormant",
      "Scaler de 0 à 10K€/mois, puis 100K€/an"
    ],
    forWho: [
      "Tu veux vivre de ton activité en ligne et quitter le salariat",
      "Tu as essayé des formations sans résultats concrets",
      "Tu veux une méthode éprouvée, pas des théories vagues",
      "Tu es prêt·e à passer à l'action dès aujourd'hui"
    ],
    testimonials: [
      { name: "Thomas R.", role: "Entrepreneur Paris", text: "J'ai appliqué la méthode à la lettre et généré 8 500€ dès le premier mois. Le chapitre sur les tunnels de vente change tout.", stars: 5 },
      { name: "Julie M.", role: "Freelance Lyon", text: "Enfin un guide qui va à l'essentiel sans bullshit. J'ai rentabilisé l'achat en 2 semaines. Clairement le meilleur investissement de l'année.", stars: 5 },
      { name: "Karim B.", role: "Coach business Montpellier", text: "J'ai lu des dizaines de livres sur le business en ligne. Celui-là est le seul qui donne un plan clair, étape par étape. Je recommande les yeux fermés.", stars: 5 }
    ],
    faq: [
      { q: "Est-ce que ça marche si je pars de zéro ?", a: "Oui. La méthode est conçue pour des débutants complets. Les premières étapes te guident depuis la définition de ta niche jusqu'à ta première vente." },
      { q: "Combien de temps pour voir des résultats ?", a: "La plupart des lecteurs appliquent les premières actions dans les 72h. Des premiers résultats arrivent généralement en 2-4 semaines selon ton engagement." },
      { q: "Est-ce que j'ai accès à vie ?", a: "Oui. Tu as accès à toutes les mises à jour futures sans frais supplémentaires. Le contenu évolue avec le marché." },
      { q: "Et si ça ne me convient pas ?", a: "Garantie satisfait ou remboursé 30 jours. Aucune question posée. Tu es protégé." }
    ],
    checkoutUrl: "https://buy.stripe.com/PLACEHOLDER_100K",
    featured: true,
    bestseller: true
  },
  {
    id: "copywriting-magnetique",
    title: "Copywriting Magnétique",
    subtitle: "Écrire des textes qui vendent — même sans talent d'écriture",
    tagline: "Les formules exactes pour transformer tes mots en argent.",
    price: 97,
    oldPrice: 197,
    badge: "Populaire",
    badgeColor: "blue",
    category: "marketing",
    pages: 180,
    rating: 4.8,
    reviews: 1243,
    cover: { gradient: "linear-gradient(135deg, #0c1445 0%, #1a237e 50%, #283593 100%)", emoji: "✍️" },
    highlights: ["180 pages", "50+ formules", "Exemples réels", "Swipe file inclus"],
    includes: [
      "180 pages de formules éprouvées",
      "50+ frameworks de copywriting",
      "Swipe file de 200 accroches qui convertissent",
      "Analyse de 30 pages de vente millionnaires",
      "Templates email, landing page, publicité",
      "Checklist de relecture conversion"
    ],
    learnings: [
      "Rédiger un titre qui arrête le scroll en 3 secondes",
      "Utiliser la psychologie de persuasion de manière éthique",
      "Structurer une page de vente qui convertit à 5%+",
      "Écrire des emails que les gens ont hâte d'ouvrir",
      "Créer de l'urgence et de la rareté authentiques",
      "Tester et optimiser ton copy comme un pro"
    ],
    forWho: [
      "Tu vends un produit/service et tu veux plus de conversions",
      "Tu gères des réseaux sociaux et tu veux plus d'engagement",
      "Tu fais de la publicité en ligne et tes coûts sont trop élevés",
      "Tu veux apprendre la compétence la mieux payée du 21e siècle"
    ],
    testimonials: [
      { name: "Sarah L.", role: "E-commerçante Bordeaux", text: "Mon taux de conversion a doublé en 3 semaines. J'ai juste appliqué les formules du chapitre 4. Magique.", stars: 5 },
      { name: "Nicolas P.", role: "Consultant marketing", text: "Je facture maintenant mes clients 3x plus cher grâce aux techniques apprises ici. ROI immédiat.", stars: 5 },
      { name: "Amina K.", role: "Créatrice de contenu", text: "Mes ventes Instagram ont explosé. Avant : 2-3 ventes par semaine. Après : 15-20. La même audience, juste de meilleures accroches.", stars: 5 }
    ],
    faq: [
      { q: "Je ne suis pas bon en écriture, est-ce que ça va marcher ?", a: "C'est justement pour ça que ce guide existe. Tu n'as pas besoin de talent, juste d'appliquer les formules. C'est de la technique, pas de l'art." },
      { q: "Ça s'applique à quels types de business ?", a: "À tous. E-commerce, services, coaching, agences, réseaux sociaux, emailing — les principes de persuasion sont universels." },
      { q: "Garantie ?", a: "30 jours satisfait ou remboursé. Sans conditions." }
    ],
    checkoutUrl: "https://buy.stripe.com/PLACEHOLDER_COPY",
    featured: true
  },
  {
    id: "ia-business-accelerator",
    title: "IA Business Accelerator",
    subtitle: "Automatiser et scaler ton business avec l'intelligence artificielle",
    tagline: "Fais en 1 heure ce qui prenait 1 semaine. Prends 10 ans d'avance.",
    price: 197,
    oldPrice: 297,
    badge: "Nouveau",
    badgeColor: "green",
    category: "ia",
    pages: 240,
    rating: 4.9,
    reviews: 524,
    cover: { gradient: "linear-gradient(135deg, #0a2e0a 0%, #1a4a1a 50%, #2d7a2d 100%)", emoji: "🤖" },
    highlights: ["240 pages", "100+ prompts", "Workflows IA", "Mises à jour"],
    includes: [
      "240 pages de workflows IA actionnables",
      "100+ prompts ultra-optimisés prêts à copier-coller",
      "Automatisations Make/Zapier clés en main",
      "Cas d'usage pour 12 types de business différents",
      "Liste des 50 outils IA les plus rentables",
      "Mises à jour chaque trimestre (l'IA évolue vite)"
    ],
    learnings: [
      "Créer du contenu 10x plus vite avec l'IA",
      "Automatiser ton service client et tes emails",
      "Générer des visuels, vidéos et audios professionnels",
      "Analyser tes données business en quelques secondes",
      "Construire des agents IA pour travailler à ta place",
      "Scaler sans recruter grâce à l'automatisation"
    ],
    forWho: [
      "Tu passes trop de temps sur des tâches répétitives",
      "Tu veux faire plus avec moins de ressources",
      "Tu veux prendre de l'avance sur 99% de tes concurrents",
      "Tu es curieux de l'IA mais ne sais pas par où commencer"
    ],
    testimonials: [
      { name: "Maxime D.", role: "Agence SEO Nantes", text: "On a remplacé 2 postes avec des automatisations IA. 4 000€/mois d'économies. Ce guide, c'est l'investissement du siècle.", stars: 5 },
      { name: "Léa V.", role: "Coach en ligne", text: "Je crée 3 semaines de contenu en une demi-journée. Mes abonnés pensent que j'ai une équipe. Je travaille seule.", stars: 5 },
      { name: "Yoann S.", role: "Dropshipper", text: "Mes fiches produits, mes emails, mes pubs — tout est géré par l'IA maintenant. J'ai juste à vérifier et valider.", stars: 5 }
    ],
    faq: [
      { q: "Il faut être technique ?", a: "Non. Tout est expliqué pas à pas, avec des captures d'écran. Si tu sais utiliser Google, tu sais faire ça." },
      { q: "Les outils sont payants ?", a: "La majorité des outils présentés ont une version gratuite suffisante pour démarrer. On précise les coûts à chaque fois." },
      { q: "Garantie ?", a: "30 jours satisfait ou remboursé. Sans conditions." }
    ],
    checkoutUrl: "https://buy.stripe.com/PLACEHOLDER_IA",
    featured: true
  },
  {
    id: "funnel-parfait",
    title: "Le Funnel Parfait",
    subtitle: "Créer un tunnel de vente qui tourne 24h/24, 7j/7",
    tagline: "Pendant que tu dors, ton funnel vend. Voici comment le construire.",
    price: 147,
    oldPrice: 247,
    badge: "Essentiel",
    badgeColor: "purple",
    category: "marketing",
    pages: 200,
    rating: 4.8,
    reviews: 389,
    cover: { gradient: "linear-gradient(135deg, #2d1b69 0%, #5b21b6 50%, #7c3aed 100%)", emoji: "🎯" },
    highlights: ["200 pages", "Exemples réels", "Templates", "Analyse ROI"],
    includes: [
      "200 pages de construction de funnel",
      "Exemples réels de funnels à 7 chiffres",
      "Templates de pages de capture et de vente",
      "Scripts email de nurturing (30 jours d'emails)",
      "Calculateur ROI inclus",
      "Accès à la bibliothèque de funnels qui marchent"
    ],
    learnings: [
      "Choisir le bon type de funnel selon ton offre",
      "Créer une page de capture à 40%+ de conversion",
      "Écrire une séquence email qui vend en automatique",
      "Optimiser chaque étape pour maximiser la LTV",
      "Tracker et analyser tes métriques clés",
      "Scaler avec de la publicité payante sans perdre d'argent"
    ],
    forWho: [
      "Tu as un produit/service mais tu vends au compte-gouttes",
      "Tu dépends trop de la prospection manuelle",
      "Tu veux créer des revenus passifs automatisés",
      "Tu veux comprendre comment fonctionnent les vrais business en ligne"
    ],
    testimonials: [
      { name: "Bastien M.", role: "Infoprenneur", text: "Mon funnel tourne depuis 6 mois. Il génère 4 000€ par mois en automatique. J'ai passé 2 jours à le construire avec ce guide.", stars: 5 },
      { name: "Clara F.", role: "Formatrice en ligne", text: "Avant ce guide : 0 système. Après : un funnel qui remplit mes formations toutes seules. Révolutionnaire.", stars: 5 }
    ],
    faq: [
      { q: "Il faut quel outil pour créer un funnel ?", a: "On couvre ClickFunnels, Systeme.io (gratuit), Learnybox et WordPress. Tu choisis selon ton budget." },
      { q: "Garantie ?", a: "30 jours satisfait ou remboursé. Sans conditions." }
    ],
    checkoutUrl: "https://buy.stripe.com/PLACEHOLDER_FUNNEL"
  },
  {
    id: "mindset-elite",
    title: "Mindset Elite",
    subtitle: "La psychologie des entrepreneurs qui réussissent vraiment",
    tagline: "Ce n'est pas une question de talent. C'est une question de mindset.",
    price: 67,
    oldPrice: 97,
    badge: "Fondamental",
    badgeColor: "orange",
    category: "mindset",
    pages: 160,
    rating: 4.7,
    reviews: 1567,
    cover: { gradient: "linear-gradient(135deg, #431407 0%, #9a3412 50%, #ea580c 100%)", emoji: "🧠" },
    highlights: ["160 pages", "Exercices pratiques", "Audio inclus", "Journal guidé"],
    includes: [
      "160 pages de psychologie appliquée",
      "Exercices pratiques à faire dès aujourd'hui",
      "Version audio (narration professionnelle)",
      "Journal de transformation guidé 90 jours",
      "Techniques de visualisation des top performers",
      "Protocole anti-procrastination en 5 étapes"
    ],
    learnings: [
      "Identifier et éliminer tes croyances limitantes",
      "Construire une discipline en béton armé",
      "Prendre des décisions rapides comme les CEO",
      "Gérer la peur de l'échec et du regard des autres",
      "Créer des rituels quotidiens ultra-productifs",
      "Penser comme un millionnaire dès maintenant"
    ],
    forWho: [
      "Tu procrastines et tu restes bloqué malgré tes connaissances",
      "Tu as peur d'échouer ou du regard des autres",
      "Tu veux passer à l'action mais quelque chose te retient",
      "Tu veux comprendre pourquoi certains réussissent et pas d'autres"
    ],
    testimonials: [
      { name: "Inès T.", role: "Coach bien-être", text: "J'ai finalement lancé mon business après 2 ans à procrastiner. Ce livre m'a débloquée en 1 semaine. Aucune exagération.", stars: 5 },
      { name: "Romain G.", role: "Étudiant entrepreneur", text: "La technique du chapitre 7 sur la gestion de la peur m'a changé la vie. Sérieusement.", stars: 5 }
    ],
    faq: [
      { q: "C'est du développement personnel classique ?", a: "Non. C'est de la psychologie appliquée au business, avec des exercices concrets. Pas de vœux pieux." },
      { q: "Garantie ?", a: "30 jours satisfait ou remboursé. Sans conditions." }
    ],
    checkoutUrl: "https://buy.stripe.com/PLACEHOLDER_MINDSET"
  },
  {
    id: "pack-elite",
    title: "Pack Élite — Toutes les Formations",
    subtitle: "Les 5 formations pour bâtir un empire en ligne — à prix imbattable",
    tagline: "Tout ce qu'il faut. Au meilleur prix. Une seule fois.",
    price: 497,
    oldPrice: 808,
    badge: "Meilleure offre",
    badgeColor: "gold",
    category: "pack",
    pages: 1100,
    rating: 5.0,
    reviews: 312,
    cover: { gradient: "linear-gradient(135deg, #1c1917 0%, #292524 30%, #44403c 60%, #78716c 100%)", emoji: "👑" },
    highlights: ["5 formations", "1 100+ pages", "Tout inclus", "Accès vie"],
    includes: [
      "100K Formula (valeur 297€)",
      "Copywriting Magnétique (valeur 97€)",
      "IA Business Accelerator (valeur 197€)",
      "Le Funnel Parfait (valeur 147€)",
      "Mindset Elite (valeur 67€)",
      "Bonus exclusif : 1 audit business personnalisé offert (valeur 300€)",
      "Accès à vie à toutes les mises à jour",
      "Accès à la communauté VIP privée"
    ],
    learnings: [
      "Maîtriser toute la chaîne de valeur du business en ligne",
      "Du mindset jusqu'à la vente, sans angle mort",
      "Construire, automatiser et scaler ton empire",
      "Avoir le même toolkit que les entrepreneurs à 7 chiffres"
    ],
    forWho: [
      "Tu veux l'accélération maximale sans chercher quoi acheter",
      "Tu es sérieux et tu veux investir dans ta transformation",
      "Tu veux économiser 311€ par rapport aux achats séparés"
    ],
    testimonials: [
      { name: "Fabrice N.", role: "CEO agence digitale", text: "J'ai offert le Pack Elite à toute mon équipe. Retour sur investissement en 3 semaines. Indispensable.", stars: 5 },
      { name: "Manon R.", role: "Dropshippeuse", text: "J'ai tout lu en 3 semaines et tout appliqué. Mon CA a triplé en 2 mois. Le Pack Elite, c'est le meilleur investissement de ma vie.", stars: 5 }
    ],
    faq: [
      { q: "Est-ce que j'ai accès à tout immédiatement ?", a: "Oui. Accès instantané à toutes les formations dès le paiement." },
      { q: "Et si j'ai déjà acheté une formation séparément ?", a: "Contacte-nous par email. On fait un arrangement au cas par cas." },
      { q: "Garantie ?", a: "30 jours satisfait ou remboursé. Sans conditions. C'est nous qui prenons le risque, pas toi." }
    ],
    checkoutUrl: "https://buy.stripe.com/PLACEHOLDER_PACK",
    featured: true,
    pack: true
  }
];

/* Helper : retrouver un produit par son id */
function getProductById(id) {
  return MK_PRODUCTS.find(p => p.id === id) || null;
}

/* Helper : formater un prix */
function formatPrice(n) {
  return n.toLocaleString("fr-FR", { style: "currency", currency: "EUR", minimumFractionDigits: 0 });
}
