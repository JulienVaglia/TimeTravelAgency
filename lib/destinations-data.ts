export interface Destination {
  id: string
  title: string
  tagline: string
  price: string
  image: string
  hero: string
  description: string
  period: string
  duration: string
  highlights: string[]
  included: string[]
  itinerary: Array<{
    day: number
    title: string
    description: string
  }>
  gallery: string[]
  safetyInfo: string[]
  culturalNotes: string[]
}

export const destinations: Destination[] = [
  {
    id: "paris-1889",
    title: "Paris 1889",
    tagline: "La Belle Époque",
    price: "Dès 4 500 €",
    image: "https://zpgoxmvadlcsfvipggpf.supabase.co/storage/v1/object/public/TimeTravelMedia/Paris_Hero_16x9.png",
    hero: "https://zpgoxmvadlcsfvipggpf.supabase.co/storage/v1/object/public/TimeTravelMedia/Paris_Hero_16x9.png",
    description: "Plongez dans l'effervescence de la Belle Époque parisienne lors de l'Exposition Universelle de 1889. Découvrez l'inauguration de la Tour Eiffel, flânez sur les Grands Boulevards illuminés et vivez l'âge d'or de l'art et de la culture française.",
    period: "Mai - Septembre 1889",
    duration: "5 jours / 4 nuits",
    highlights: [
      "Inauguration de la Tour Eiffel avec Gustave Eiffel",
      "Visite de l'Exposition Universelle de 1889",
      "Soirée au Moulin Rouge lors de son ouverture",
      "Balade sur les Grands Boulevards de la Belle Époque",
      "Rencontre avec les artistes de Montmartre",
      "Dîner gastronomique au Grand Véfour"
    ],
    included: [
      "Transport temporel aller-retour sécurisé",
      "Hébergement 4 étoiles en hôtel d'époque",
      "Costume d'époque sur mesure",
      "Guide historien certifié parlant français",
      "Tous les repas et dégustations",
      "Accès VIP à l'Exposition Universelle",
      "Assurance voyage temporel complète"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrivée à Paris - La Belle Époque",
        description: "Accueil à notre centre de voyage temporel parisien. Essayage de vos costumes d'époque et briefing historique. Installation à votre hôtel Belle Époque. Dîner de bienvenue dans un restaurant typique."
      },
      {
        day: 2,
        title: "L'Exposition Universelle",
        description: "Journée complète à l'Exposition Universelle de 1889. Visite des pavillons internationaux, découverte des inventions révolutionnaires de l'époque. Ascension de la Tour Eiffel nouvellement inaugurée avec vue panoramique sur Paris."
      },
      {
        day: 3,
        title: "Montmartre et la Vie Artistique",
        description: "Exploration du quartier de Montmartre, berceau de l'art moderne. Rencontre avec des artistes locaux dans leurs ateliers. Visite du Moulin de la Galette. Soirée au Moulin Rouge pour son spectacle d'ouverture."
      },
      {
        day: 4,
        title: "Les Grands Boulevards",
        description: "Promenade sur les Grands Boulevards illuminés. Shopping dans les grands magasins de l'époque (Le Bon Marché, Printemps). Goûter dans un salon de thé parisien. Soirée à l'Opéra Garnier."
      },
      {
        day: 5,
        title: "Dernière journée et retour",
        description: "Matinée libre pour vos dernières découvertes. Déjeuner d'adieu au Grand Véfour. Retour à notre époque avec vos souvenirs inoubliables."
      }
    ],
    gallery: [
      "https://zpgoxmvadlcsfvipggpf.supabase.co/storage/v1/object/public/TimeTravelMedia/Paris_Hero_16x9.png",
      "https://zpgoxmvadlcsfvipggpf.supabase.co/storage/v1/object/public/TimeTravelMedia/Paris_Hero_16x9.png",
      "https://zpgoxmvadlcsfvipggpf.supabase.co/storage/v1/object/public/TimeTravelMedia/Paris_Hero_16x9.png"
    ],
    safetyInfo: [
      "Les voyageurs doivent respecter les codes vestimentaires et sociaux de l'époque",
      "Interdiction formelle de partager des informations sur le futur",
      "Vaccination temporelle obligatoire contre les maladies de l'époque",
      "Accompagnement permanent par un guide temporel certifié",
      "Dispositif de retour d'urgence en cas de nécessité"
    ],
    culturalNotes: [
      "Le français parlé en 1889 diffère légèrement du français moderne",
      "Les conventions sociales sont très strictes, notamment entre hommes et femmes",
      "La monnaie utilisée est le franc-or",
      "Les moyens de transport sont principalement le fiacre et le tramway à chevaux",
      "L'électricité est une nouveauté réservée aux lieux publics"
    ]
  },
  {
    id: "cretace",
    title: "Période Crétacé",
    tagline: "Les Géants du Passé",
    price: "Dès 6 200 €",
    image: "https://zpgoxmvadlcsfvipggpf.supabase.co/storage/v1/object/public/TimeTravelMedia/Cretace_Hero_16x9.png",
    hero: "https://zpgoxmvadlcsfvipggpf.supabase.co/storage/v1/object/public/TimeTravelMedia/Cretace_Hero_16x9.png",
    description: "Remontez 70 millions d'années en arrière pour observer les dinosaures dans leur habitat naturel. Un safari préhistorique unique où vous découvrirez les T-Rex, Tricératops et autres géants du Crétacé dans des conditions de sécurité absolue.",
    period: "Crétacé supérieur (-70 millions d'années)",
    duration: "4 jours / 3 nuits",
    highlights: [
      "Observation des T-Rex en chasse",
      "Rencontre avec des Tricératops pacifiques",
      "Vol panoramique au-dessus des Ptérosaures",
      "Exploration d'une forêt préhistorique",
      "Observation d'un site de nidification",
      "Bivouac en camp sécurisé avec vue sur les plaines du Crétacé"
    ],
    included: [
      "Transport temporel aller-retour avec capsule blindée",
      "Hébergement en camp fortifié haute sécurité",
      "Équipement de protection complet",
      "Guide paléontologue expert",
      "Tous les repas (cuisine moderne adaptée)",
      "Drones d'observation et caméras 8K",
      "Assurance tous risques préhistoriques"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrivée au Crétacé - Camp de Base",
        description: "Saut temporel sécurisé vers le Crétacé supérieur. Arrivée au camp de base fortifié. Briefing de sécurité détaillé sur les protocoles d'observation et les comportements des dinosaures. Installation et acclimatation."
      },
      {
        day: 2,
        title: "Safari des Herbivores",
        description: "Safari matinal pour observer les Tricératops et Hadrosaurus en troupeaux. Déjeuner au camp. Après-midi : exploration d'une forêt de conifères géants et observation de la flore préhistorique. Retour au camp pour une conférence sur l'écosystème du Crétacé."
      },
      {
        day: 3,
        title: "Les Prédateurs et Vol Panoramique",
        description: "Observation à distance sécurisée d'un T-Rex en chasse. Vol panoramique en capsule blindée au-dessus des colonies de Ptérosaures. Visite d'un site de nidification de dinosaures. Soirée astronomie : ciel étoilé du Crétacé sans pollution lumineuse."
      },
      {
        day: 4,
        title: "Dernières Observations et Retour",
        description: "Lever du soleil sur les plaines préhistoriques. Dernières observations et séance photos. Débriefing scientifique. Retour à notre époque avec documentation complète de votre voyage."
      }
    ],
    gallery: [
      "https://zpgoxmvadlcsfvipggpf.supabase.co/storage/v1/object/public/TimeTravelMedia/Cretace_Hero_16x9.png",
      "https://zpgoxmvadlcsfvipggpf.supabase.co/storage/v1/object/public/TimeTravelMedia/Cretace_Hero_16x9.png",
      "https://zpgoxmvadlcsfvipggpf.supabase.co/storage/v1/object/public/TimeTravelMedia/Cretace_Hero_16x9.png"
    ],
    safetyInfo: [
      "Respect strict des protocoles de sécurité en présence de prédateurs",
      "Port obligatoire de l'équipement de protection à tout moment",
      "Distance de sécurité minimale de 50 mètres avec les carnivores",
      "Système de bouclier énergétique autour du camp",
      "Évacuation d'urgence possible à tout moment",
      "Interdiction formelle de quitter le groupe"
    ],
    culturalNotes: [
      "L'atmosphère contient plus d'oxygène qu'aujourd'hui (35% vs 21%)",
      "La température moyenne est de 28°C",
      "Les jours durent environ 23 heures",
      "Aucune présence humaine - vous êtes les seuls êtres conscients",
      "La faune et la flore sont complètement différentes de notre époque"
    ]
  },
  {
    id: "florence-1504",
    title: "Florence 1504",
    tagline: "Art de la Renaissance",
    price: "Dès 5 000 €",
    image: "https://zpgoxmvadlcsfvipggpf.supabase.co/storage/v1/object/public/TimeTravelMedia/Florence_Hero_16x9.png",
    hero: "https://zpgoxmvadlcsfvipggpf.supabase.co/storage/v1/object/public/TimeTravelMedia/Florence_Hero_16x9.png",
    description: "Immergez-vous dans la Florence de la Renaissance, berceau de l'art et de la culture européenne. Rencontrez Michel-Ange et Léonard de Vinci, assistez à la création de chefs-d'œuvre immortels et découvrez le génie des Médicis.",
    period: "Printemps 1504",
    duration: "6 jours / 5 nuits",
    highlights: [
      "Rencontre avec Michel-Ange travaillant sur le David",
      "Visite de l'atelier de Léonard de Vinci",
      "Audience privée avec Laurent de Médicis",
      "Exploration du Duomo et du Palazzo Vecchio",
      "Cours de peinture Renaissance avec un maître",
      "Banquet médiéval au Palazzo Pitti"
    ],
    included: [
      "Voyage temporel aller-retour sécurisé",
      "Hébergement dans un palazzo Renaissance",
      "Costumes Renaissance sur mesure",
      "Guide historien de l'art certifié",
      "Cours d'italien Renaissance",
      "Tous les repas gastronomiques d'époque",
      "Accès privilégié aux ateliers d'artistes",
      "Assurance voyage temporel"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrivée à Florence - La Cité de l'Art",
        description: "Accueil au centre temporel florentin. Essayage de vos costumes Renaissance. Briefing historique et culturel. Installation dans votre palazzo. Dîner de bienvenue avec vue sur l'Arno."
      },
      {
        day: 2,
        title: "Michel-Ange et le David",
        description: "Visite exclusive de l'atelier de Michel-Ange. Observation du maître sculptant le David. Discussion sur les techniques de sculpture. Après-midi : visite du Duomo et découverte de l'architecture florentine. Soirée concert de musique Renaissance."
      },
      {
        day: 3,
        title: "Léonard de Vinci - Le Génie",
        description: "Journée dans l'atelier de Léonard de Vinci. Découverte de ses inventions et carnets de croquis. Cours de dessin selon les techniques Renaissance. Déjeuner avec l'artiste. Après-midi libre pour explorer les marchés florentins."
      },
      {
        day: 4,
        title: "Les Médicis et le Pouvoir",
        description: "Visite du Palazzo Vecchio et des résidences Médicis. Audience privée avec Laurent de Médicis. Discussion sur le mécénat et la politique florentine. Visite des jardins de Boboli. Banquet médiéval au Palazzo Pitti."
      },
      {
        day: 5,
        title: "Art et Culture Renaissance",
        description: "Cours de peinture avec un maître Renaissance. Visite des églises et leurs fresques. Exploration des bibliothèques et manuscrits anciens. Dégustation de vins toscans d'époque. Soirée poésie et philosophie dans un salon littéraire."
      },
      {
        day: 6,
        title: "Adieu à Florence",
        description: "Matinée libre pour derniers achats d'œuvres d'art (copies autorisées). Déjeuner d'adieu avec vue sur le Ponte Vecchio. Retour à notre époque avec vos souvenirs artistiques."
      }
    ],
    gallery: [
      "https://zpgoxmvadlcsfvipggpf.supabase.co/storage/v1/object/public/TimeTravelMedia/Florence_Hero_16x9.png",
      "https://zpgoxmvadlcsfvipggpf.supabase.co/storage/v1/object/public/TimeTravelMedia/Florence_Hero_16x9.png",
      "https://zpgoxmvadlcsfvipggpf.supabase.co/storage/v1/object/public/TimeTravelMedia/Florence_Hero_16x9.png"
    ],
    safetyInfo: [
      "Respecter les conventions sociales très strictes de la Renaissance",
      "Éviter tout sujet politique sensible lié aux Médicis",
      "Ne pas révéler de connaissances futures en art ou science",
      "Port obligatoire du costume Renaissance en tout temps",
      "Respect des protocoles de salutation et d'étiquette",
      "Accompagnement permanent par un guide culturel"
    ],
    culturalNotes: [
      "L'italien parlé est le toscan du début du XVIe siècle",
      "La hiérarchie sociale est très marquée",
      "La monnaie est le florin d'or",
      "Les repas sont des événements sociaux importants",
      "L'art et la beauté sont au centre de la vie quotidienne",
      "Les débats philosophiques et théologiques sont courants"
    ]
  }
]

export function getDestinationById(id: string): Destination | undefined {
  return destinations.find(dest => dest.id === id)
}

export function getAllDestinations() {
  return destinations
}
