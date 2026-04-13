export const initialReports = [
  { id: '1', title: "Plastic waste in local park", category: "Park Waste", categoryIcon: "🏞️", description: "Large accumulation of plastic bottles and bags near the main picnic area. Needs urgent attention before the weekend.", location: "Central Park", lat: 36.8682, lng: 10.3333, timeAgo: "2 hours ago", upvotes: 47, status: "Open", comments: 12 },
  { id: '2', title: "Illegal tire dumping near Lac de Tunis", category: "Illegal Dumping", categoryIcon: "⚠️", description: "Dozens of old tires dumped overnight near the walking path. They are blocking the pedestrian walkway.", location: "Lac de Tunis", lat: 36.8333, lng: 10.2333, timeAgo: "5 hours ago", upvotes: 83, status: "In Progress", comments: 24 },
  { id: '3', title: "Oil spill near Bizerte port", category: "River Contamination", categoryIcon: "🛢️", description: "Visible oil slick spreading from the commercial port area. Local wildlife is at risk.", location: "Bizerte", lat: 37.2744, lng: 9.8739, timeAgo: "1 day ago", upvotes: 112, status: "Open", comments: 45 },
  { id: '4', title: "Overflowing trash bins in Carthage", category: "Street Waste", categoryIcon: "🗑️", description: "Municipal bins haven't been emptied in days, trash blowing into streets and historical sites.", location: "Carthage", lat: 36.8528, lng: 10.3233, timeAgo: "2 days ago", upvotes: 65, status: "Resolved", comments: 8 },
  { id: '5', title: "Industrial smoke near Rades", category: "Air Pollution", categoryIcon: "💨", description: "Thick black smoke coming from the factory zone since morning. Air quality is noticeably poor.", location: "Rades", lat: 36.7667, lng: 10.2833, timeAgo: "3 days ago", upvotes: 29, status: "Open", comments: 5 },
  { id: '6', title: "Abandoned camping gear in forest", category: "Forest Debris", categoryIcon: "🌲", description: "Abandoned tents and gear posing a danger to wildlife along the southern trail.", location: "National Forest", lat: 36.4000, lng: 10.6167, timeAgo: "4 days ago", upvotes: 91, status: "Resolved", comments: 18 },
];

export const initialEvents = [
  { id: '1', title: "Community Park Cleanup", date: "June 14 2025 • 09:00 AM", location: "Central Park", lat: 36.8682, lng: 10.3333, volunteers: 23, maxVolunteers: 50, description: "Join us for our annual summer kickoff cleanup. Gloves and bags provided! We will focus on the northern section.", organizer: "Earth Life Protection 🌲" },
  { id: '2', title: "Lake Tunis Restoration Day", date: "June 21 2025 • 08:30 AM", location: "Lac de Tunis", lat: 36.8333, lng: 10.2333, volunteers: 41, maxVolunteers: 60, description: "Help us plant native vegetation and remove invasive species around the lake. Great for families.", organizer: "Earth Life Protection 🌲" },
  { id: '3', title: "Forest Awareness Walk", date: "July 5 2025 • 10:00 AM", location: "Bizerte", lat: 37.2744, lng: 9.8739, volunteers: 12, maxVolunteers: 30, description: "Educational walk along the trails to learn about local ecosystems and how to protect them.", organizer: "Earth Life Protection 🌲" },
  { id: '4', title: "Youth Nature Day", date: "July 19 2025 • 09:00 AM", location: "National Forest", lat: 36.4000, lng: 10.6167, volunteers: 8, maxVolunteers: 40, description: "Special event for kids and teens to learn about environmental conservation through interactive games.", organizer: "Earth Life Protection 🌲" },
];

export const leaderboardData = [
  { rank: 1, name: "Yasmine B.", points: 340, issues: 15, events: 8, upvotes: 120, initials: "YB", color: "bg-emerald-500" },
  { rank: 2, name: "Omar K.", points: 290, issues: 12, events: 6, upvotes: 95, initials: "OK", color: "bg-blue-500" },
  { rank: 3, name: "Lina M.", points: 255, issues: 10, events: 5, upvotes: 80, initials: "LM", color: "bg-purple-500" },
  { rank: 4, name: "Sami T.", points: 210, issues: 8, events: 4, upvotes: 65, initials: "ST", color: "bg-orange-500" },
  { rank: 5, name: "Amira H.", points: 185, issues: 7, events: 3, upvotes: 50, initials: "AH", color: "bg-pink-500" },
  { rank: 6, name: "Karim J.", points: 160, issues: 6, events: 3, upvotes: 45, initials: "KJ", color: "bg-indigo-500" },
  { rank: 7, name: "You (Alex)", points: 145, issues: 8, events: 2, upvotes: 47, initials: "AL", color: "bg-primary" },
  { rank: 8, name: "Nour F.", points: 130, issues: 5, events: 2, upvotes: 40, initials: "NF", color: "bg-teal-500" },
  { rank: 9, name: "Mehdi R.", points: 115, issues: 4, events: 2, upvotes: 35, initials: "MR", color: "bg-yellow-500" },
  { rank: 10, name: "Farah S.", points: 90, issues: 3, events: 1, upvotes: 25, initials: "FS", color: "bg-red-500" },
];
