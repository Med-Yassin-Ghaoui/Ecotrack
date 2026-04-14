export const initialReports = [
  { id: '1', title: "Déchets plastiques dans le parc local", category: "Déchets de parc", categoryIcon: "🏞️", description: "Forte accumulation de bouteilles et sacs en plastique près de l'aire de pique-nique principale. Nécessite une attention urgente avant le week-end.", location: "Central Park", lat: 36.8682, lng: 10.3333, timeAgo: "Il y a 2 heures", upvotes: 47, status: "Ouvert", comments: 12 },
  { id: '2', title: "Dépôt sauvage de pneus près du Lac de Tunis", category: "Dépôt sauvage", categoryIcon: "⚠️", description: "Des dizaines de vieux pneus déposés pendant la nuit près du sentier. Ils bloquent le passage piéton.", location: "Lac de Tunis", lat: 36.8333, lng: 10.2333, timeAgo: "Il y a 5 heures", upvotes: 83, status: "En cours", comments: 24 },
  { id: '3', title: "Déversement d'hydrocarbures près du port de Bizerte", category: "Pollution de rivière", categoryIcon: "🛢️", description: "Nappe de pétrole visible s'étendant depuis la zone du port commercial. La faune locale est en danger.", location: "Bizerte", lat: 37.2744, lng: 9.8739, timeAgo: "Il y a 1 jour", upvotes: 112, status: "Ouvert", comments: 45 },
  { id: '4', title: "Poubelles qui débordent à Carthage", category: "Déchets de rue", categoryIcon: "🗑️", description: "Les poubelles municipales n'ont pas été vidées depuis des jours, les déchets s'envolent dans les rues et les sites historiques.", location: "Carthage", lat: 36.8528, lng: 10.3233, timeAgo: "Il y a 2 jours", upvotes: 65, status: "Résolu", comments: 8 },
  { id: '5', title: "Fumée industrielle près de Radès", category: "Pollution de l'air", categoryIcon: "💨", description: "Épaisse fumée noire provenant de la zone industrielle depuis ce matin. La qualité de l'air est visiblement mauvaise.", location: "Radès", lat: 36.7667, lng: 10.2833, timeAgo: "Il y a 3 jours", upvotes: 29, status: "Ouvert", comments: 5 },
  { id: '6', title: "Matériel de camping abandonné en forêt", category: "Déchets forestiers", categoryIcon: "🌲", description: "Tentes et matériel abandonnés représentant un danger pour la faune le long du sentier sud.", location: "Forêt Nationale", lat: 36.4000, lng: 10.6167, timeAgo: "Il y a 4 jours", upvotes: 91, status: "Résolu", comments: 18 },
];

export const initialEvents = [
  { id: '1', title: "Nettoyage du parc communautaire", date: "14 Juin 2025 • 09:00", location: "Central Park", lat: 36.8682, lng: 10.3333, volunteers: 23, maxVolunteers: 50, description: "Rejoignez-nous pour notre nettoyage annuel de début d'été. Gants et sacs fournis ! Nous nous concentrerons sur la section nord.", organizer: "Earth Life Protection 🌲" },
  { id: '2', title: "Journée de restauration du Lac de Tunis", date: "21 Juin 2025 • 08:30", location: "Lac de Tunis", lat: 36.8333, lng: 10.2333, volunteers: 41, maxVolunteers: 60, description: "Aidez-nous à planter de la végétation locale et à retirer les espèces invasives autour du lac. Idéal pour les familles.", organizer: "Earth Life Protection 🌲" },
  { id: '3', title: "Marche de sensibilisation en forêt", date: "5 Juillet 2025 • 10:00", location: "Bizerte", lat: 37.2744, lng: 9.8739, volunteers: 12, maxVolunteers: 30, description: "Marche éducative le long des sentiers pour découvrir les écosystèmes locaux et comment les protéger.", organizer: "Earth Life Protection 🌲" },
  { id: '4', title: "Journée nature pour les jeunes", date: "19 Juillet 2025 • 09:00", location: "Forêt Nationale", lat: 36.4000, lng: 10.6167, volunteers: 8, maxVolunteers: 40, description: "Événement spécial pour les enfants et les adolescents afin d'apprendre la conservation de l'environnement par le biais de jeux interactifs.", organizer: "Earth Life Protection 🌲" },
];

export const leaderboardData = [
  { rank: 1, name: "Yasmine B.", points: 340, issues: 15, events: 8, upvotes: 120, initials: "YB", color: "bg-emerald-500" },
  { rank: 2, name: "Omar K.", points: 290, issues: 12, events: 6, upvotes: 95, initials: "OK", color: "bg-blue-500" },
  { rank: 3, name: "Lina M.", points: 255, issues: 10, events: 5, upvotes: 80, initials: "LM", color: "bg-purple-500" },
  { rank: 4, name: "Sami T.", points: 210, issues: 8, events: 4, upvotes: 65, initials: "ST", color: "bg-orange-500" },
  { rank: 5, name: "Amira H.", points: 185, issues: 7, events: 3, upvotes: 50, initials: "AH", color: "bg-pink-500" },
  { rank: 6, name: "Karim J.", points: 160, issues: 6, events: 3, upvotes: 45, initials: "KJ", color: "bg-indigo-500" },
  { rank: 7, name: "Vous (Alex)", points: 145, issues: 8, events: 2, upvotes: 47, initials: "AL", color: "bg-primary" },
  { rank: 8, name: "Nour F.", points: 130, issues: 5, events: 2, upvotes: 40, initials: "NF", color: "bg-teal-500" },
  { rank: 9, name: "Mehdi R.", points: 115, issues: 4, events: 2, upvotes: 35, initials: "MR", color: "bg-yellow-500" },
  { rank: 10, name: "Farah S.", points: 90, issues: 3, events: 1, upvotes: 25, initials: "FS", color: "bg-red-500" },
];
