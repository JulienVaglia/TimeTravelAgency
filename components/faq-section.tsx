"use client"

import { motion } from "framer-motion"
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

const faqs = [
  {
    category: "Général",
    questions: [
      {
        question: "Comment fonctionne le voyage temporel ?",
        answer: "Notre technologie de voyage temporel utilise des champs quantiques stabilisés pour créer des corridors spatio-temporels sécurisés. Chaque voyage est soigneusement calibré pour garantir votre sécurité et celle de la ligne temporelle. Notre équipe de physiciens et d'historiens supervise chaque départ et retour."
      },
      {
        question: "Est-ce que le voyage temporel est sûr ?",
        answer: "Absolument. Nous avons effectué plus de 10 000 voyages temporels sans incident. Nos capsules sont équipées de systèmes de sécurité redondants, incluant des boucliers de protection temporelle, des dispositifs de retour d'urgence, et un monitoring constant par notre équipe. De plus, chaque voyageur reçoit une formation complète avant le départ."
      },
      {
        question: "Puis-je modifier le passé ?",
        answer: "Non, et c'est une règle absolue. Nos protocoles de sécurité temporelle empêchent toute action susceptible de modifier la ligne temporelle. Vous êtes dans une bulle d'observation protégée qui vous permet d'interagir dans des limites strictement contrôlées, sans impact sur le cours de l'histoire."
      },
      {
        question: "Quelle est la durée réelle d'un voyage temporel ?",
        answer: "Bien que vous passiez plusieurs jours dans le passé, grâce à la compression temporelle, seulement quelques heures s'écoulent dans notre époque. Par exemple, un voyage de 5 jours en 1889 ne prendra que 6 heures dans le présent. Vous ne manquerez donc rien d'important !"
      }
    ]
  },
  {
    category: "Réservation & Tarifs",
    questions: [
      {
        question: "Quand dois-je réserver mon voyage temporel ?",
        answer: "Nous recommandons de réserver au moins 3 mois à l'avance, surtout pour les périodes populaires (Belle Époque parisienne, Florence Renaissance). Les voyages vers le Crétacé ont généralement plus de disponibilités. Une fois réservé, nous prenons 4 à 6 semaines pour préparer votre voyage (calibration temporelle, costumes sur mesure, formation)."
      },
      {
        question: "Qu'est-ce qui est inclus dans le prix ?",
        answer: "Le prix inclut : transport temporel aller-retour, hébergement d'époque, tous les repas, costumes sur mesure adaptés à l'époque, guide historien expert, assurance voyage temporel complète, formation pré-départ, dispositifs de communication inter-temporelle, et accès VIP aux sites majeurs de chaque époque."
      },
      {
        question: "Proposez-vous des réductions de groupe ?",
        answer: "Oui ! Pour les groupes de 6 personnes ou plus, nous offrons une réduction de 15%. Pour les groupes de 10 personnes ou plus, la réduction passe à 25%. Contactez notre équipe commerciale pour un devis personnalisé."
      },
      {
        question: "Quelle est votre politique d'annulation ?",
        answer: "Annulation gratuite jusqu'à 30 jours avant le départ. Entre 30 et 15 jours : 50% de remboursement. Moins de 15 jours : pas de remboursement, sauf cas de force majeure (maladie grave, décès). Nous recommandons vivement de souscrire à notre assurance annulation premium."
      }
    ]
  },
  {
    category: "Préparation & Équipement",
    questions: [
      {
        question: "Comment dois-je me préparer pour un voyage temporel ?",
        answer: "Avant votre départ, vous participerez à une session de formation de 4 heures couvrant : les protocoles de sécurité temporelle, les codes sociaux de l'époque visitée, la gestion des paradoxes, et l'utilisation de votre équipement. Vous recevrez également un dossier historique complet et des cours de langue si nécessaire (ancien français, latin, etc.)."
      },
      {
        question: "Que puis-je apporter avec moi dans le passé ?",
        answer: "Vous pouvez apporter des objets personnels non-électroniques et discrets. Tout objet susceptible d'anachronisme est strictement interdit (téléphones, montres modernes, vêtements contemporains). Nous fournissons des dispositifs d'époque fonctionnels : montres mécaniques, appareils photo daguerréotype, carnets de notes avec encre appropriée."
      },
      {
        question: "Comment communiquer avec le présent en cas d'urgence ?",
        answer: "Chaque voyageur reçoit un communicateur temporel dissimulé (apparence adaptée à l'époque). Il permet une communication instantanée avec notre centre de contrôle. En cas d'urgence absolue, vous pouvez activer le dispositif de retour d'urgence qui vous ramènera immédiatement dans le présent."
      },
      {
        question: "Y a-t-il des restrictions médicales ?",
        answer: "Oui, certaines conditions peuvent être incompatibles avec le voyage temporel : troubles cardiaques sévères, épilepsie non contrôlée, grossesse avancée, implants électroniques (pacemaker). Un examen médical est requis avant tout voyage. Nous fournissons également une vaccination temporelle pour vous protéger contre les maladies de l'époque."
      }
    ]
  },
  {
    category: "Destinations & Expériences",
    questions: [
      {
        question: "Puis-je rencontrer des personnages historiques célèbres ?",
        answer: "Oui ! C'est l'une des expériences les plus recherchées. Selon votre destination, vous pourrez rencontrer Gustave Eiffel à Paris 1889, Michel-Ange et Léonard de Vinci à Florence 1504. Ces rencontres sont soigneusement orchestrées pour ne pas perturber leur travail, et vous aurez l'opportunité unique d'échanger avec ces génies."
      },
      {
        question: "Quelle est la meilleure période pour visiter le Crétacé ?",
        answer: "Le Crétacé supérieur (il y a 70 millions d'années) offre le meilleur équilibre entre diversité de la faune et conditions climatiques agréables. C'est l'époque où les T-Rex, Tricératops et Ptérosaures coexistent. Les mois de septembre à novembre (dans notre calendrier) correspondent aux saisons les plus clémentes dans le passé préhistorique."
      },
      {
        question: "Peut-on personnaliser son voyage ?",
        answer: "Absolument ! Nous proposons des voyages sur mesure adaptés à vos intérêts spécifiques. Vous souhaitez assister à un événement historique précis ? Explorer un aspect particulier de l'époque ? Rencontrer des personnalités spécifiques ? Notre équipe peut créer un itinéraire personnalisé. Les voyages sur mesure nécessitent un délai de préparation plus long et un budget adapté."
      },
      {
        question: "Y a-t-il des destinations futures disponibles ?",
        answer: "Pour des raisons éthiques et de sécurité temporelle, nous ne proposons que des voyages dans le passé. Le voyage vers le futur soulève des questions de paradoxes temporels complexes et de libre arbitre. Notre charte éthique nous interdit d'explorer des périodes qui n'ont pas encore eu lieu."
      }
    ]
  },
  {
    category: "Aspects Pratiques",
    questions: [
      {
        question: "Que se passe-t-il si je tombe malade pendant le voyage ?",
        answer: "Chaque groupe est accompagné d'un médecin temporel formé aux pratiques médicales de l'époque et équipé de médicaments modernes. En cas de problème grave, vous serez immédiatement rapatrié dans le présent. Notre assurance couvre tous les frais médicaux, y compris dans les cas extrêmes."
      },
      {
        question: "Comment fonctionne l'hébergement dans le passé ?",
        answer: "Nous réservons des hôtels et palazzi d'époque de standing équivalent à 4-5 étoiles. Bien sûr, le confort n'est pas identique à celui d'aujourd'hui (pas de wifi !), mais nous veillons à votre bien-être : literie de qualité, eau potable sûre, sanitaires adaptés et discrets. L'authenticité avec le confort moderne, dans la mesure du possible."
      },
      {
        question: "La nourriture est-elle adaptée aux régimes spéciaux ?",
        answer: "Oui, nous pouvons accommoder la plupart des régimes alimentaires : végétarien, végétalien, sans gluten, halal, casher, allergies alimentaires. Indiquez vos restrictions lors de la réservation. Notre chef temporel prépare des plats d'époque adaptés à vos besoins, en utilisant des ingrédients de l'époque visitée."
      },
      {
        question: "Puis-je ramener des souvenirs du passé ?",
        answer: "Uniquement des objets qui n'altèrent pas la ligne temporelle : copies de journaux d'époque, œuvres d'art commissionnées spécialement pour vous, photos prises avec nos appareils d'époque, échantillons naturels (du Crétacé uniquement). Les objets ayant une valeur historique ou appartenant à des individus sont strictement interdits. Tout souvenir est vérifié avant le retour."
      }
    ]
  }
]

export function FAQSection() {
  return (
    <section id="faq" className="py-24 md:py-32 bg-slate-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <HelpCircle className="w-8 h-8 text-amber-500" />
          </div>
          <span className="inline-block text-amber-500 text-sm tracking-[0.3em] uppercase mb-4">
            Foire Aux Questions
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white text-balance mb-4">
            Vos Questions, Nos Réponses
          </h2>
          <p className="text-slate-400 text-lg">
            Tout ce que vous devez savoir sur le voyage temporel
          </p>
        </motion.div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqs.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-2xl font-serif text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                {category.category}
              </h3>
              
              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`${categoryIndex}-${index}`}
                    className="bg-slate-900/50 border border-slate-800/50 rounded-lg px-6 data-[state=open]:border-amber-500/30"
                  >
                    <AccordionTrigger className="text-left text-white hover:text-amber-500 py-5 hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-400 leading-relaxed pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-slate-900/50 border border-slate-800/50 rounded-2xl p-8">
            <h3 className="text-2xl font-serif text-white mb-3">
              Vous avez d'autres questions ?
            </h3>
            <p className="text-slate-400 mb-6">
              Notre équipe d'experts est disponible pour répondre à toutes vos interrogations
            </p>
            <a href="/contact">
              <button className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-full font-medium transition-all duration-300">
                Contactez-nous
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
