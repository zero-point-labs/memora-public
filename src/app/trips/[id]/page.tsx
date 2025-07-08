import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import TripDetails from '@/components/TripDetails'

// This would typically come from a database or API
const trips = [
  {
    id: 1,
    title: "Paphos Coastal Adventure",
    location: "Paphos, Cyprus",
    date: "March 15-17, 2024",
    price: 150,
    spotsLeft: 25,
    rating: 4.9,
    description: "Join us for an unforgettable 3-day journey through Paphos, where ancient history meets stunning beaches and vibrant nightlife. This adventure combines cultural exploration with beach relaxation and exciting nightlife experiences.",
    longDescription: "Experience the magic of Paphos with our carefully crafted 3-day adventure designed specifically for college students. From exploring ancient archaeological sites to enjoying beach parties and traditional Cyprus cuisine, this trip offers the perfect balance of culture, relaxation, and excitement.\n\nPaphos, a UNESCO World Heritage site, offers incredible historical significance combined with modern beach resort amenities. You'll stay in luxury beachfront accommodation while exploring ancient ruins, enjoying water sports, and experiencing the vibrant nightlife that Cyprus is famous for.",
    itinerary: [
      {
        day: 1,
        title: "Arrival & Ancient Wonders",
        activities: [
          "Check-in to beachfront accommodation",
          "Welcome lunch at traditional taverna",
          "Paphos Archaeological Park tour",
          "Tombs of the Kings exploration",
          "Sunset drinks at Paphos Harbor",
          "Welcome dinner and group activities"
        ]
      },
      {
        day: 2,
        title: "Beach & Adventure Day",
        activities: [
          "Beach volleyball tournament",
          "Water sports activities (jet skiing, parasailing)",
          "Traditional Cyprus cooking class",
          "Aphrodite's Rock visit and photo session",
          "Beach barbecue lunch",
          "Nightlife tour of Paphos clubs"
        ]
      },
      {
        day: 3,
        title: "Culture & Farewell",
        activities: [
          "Paphos Castle visit",
          "Local market shopping tour",
          "Traditional craft workshop",
          "Farewell lunch with live music",
          "Group photos and memories sharing",
          "Departure"
        ]
      }
    ],
    included: [
      "3 nights luxury beachfront accommodation",
      "All meals and drinks (breakfast, lunch, dinner)",
      "Professional English-speaking tour guide",
      "All transportation (airport transfers, daily tours)",
      "Water sports equipment and activities",
      "Entry fees to all attractions and sites",
      "24/7 support team and emergency assistance",
      "Group activities and games",
      "Professional photography service",
      "Traditional cooking class",
      "Nightlife tour and club entries"
    ],
    notIncluded: [
      "Flight tickets to/from Cyprus",
      "Travel insurance (recommended)",
      "Personal shopping and souvenirs",
      "Additional alcoholic beverages beyond included meals",
      "Spa treatments and personal services",
      "Tips for guides and drivers (optional)"
    ],
    images: [
      "/paphos-1.jpg",
      "/paphos-2.jpg",
      "/paphos-3.jpg",
      "/paphos-4.jpg"
    ]
  },
  {
    id: 2,
    title: "Troodos Mountain Escape",
    location: "Troodos, Cyprus",
    date: "April 5-7, 2024",
    price: 135,
    spotsLeft: 18,
    rating: 4.8,
    description: "Escape to the mountains for a unique Cyprus experience combining hiking, wine tasting, and cultural immersion in traditional villages.",
    longDescription: "Discover the hidden gem of Cyprus - the Troodos Mountains. This adventure takes you away from the beaches to explore Cyprus's mountainous interior, featuring Byzantine churches, traditional villages, and world-class wineries.",
    itinerary: [
      {
        day: 1,
        title: "Mountain Arrival",
        activities: [
          "Mountain lodge check-in",
          "Traditional village tour",
          "Byzantine church visits",
          "Local lunch in mountain taverna",
          "Hiking trail introduction",
          "Evening bonfire and stargazing"
        ]
      },
      {
        day: 2,
        title: "Wine & Adventure",
        activities: [
          "Morning hike to waterfalls",
          "Wine tasting at local vineyard",
          "Traditional pottery workshop",
          "Mountain biking adventure",
          "Folk music and dance evening",
          "Traditional mountain feast"
        ]
      },
      {
        day: 3,
        title: "Culture & Departure",
        activities: [
          "Monastery visit",
          "Local craft shopping",
          "Farewell mountain breakfast",
          "Group photos at scenic viewpoints",
          "Departure to coast"
        ]
      }
    ],
    included: [
      "3 nights mountain lodge accommodation",
      "All meals including traditional mountain cuisine",
      "Professional guide and cultural expert",
      "All transportation and transfers",
      "Hiking equipment and safety gear",
      "Wine tasting sessions",
      "Cultural workshops and activities",
      "Entry fees to all sites",
      "24/7 support"
    ],
    notIncluded: [
      "Flight tickets",
      "Travel insurance",
      "Personal purchases",
      "Additional wine purchases",
      "Spa services"
    ],
    images: [
      "/troodos-1.jpg",
      "/troodos-2.jpg",
      "/troodos-3.jpg"
    ]
  },
  {
    id: 3,
    title: "Ayia Napa Beach Party",
    location: "Ayia Napa, Cyprus",
    date: "May 10-12, 2024",
    price: 180,
    spotsLeft: 8,
    rating: 4.9,
    description: "The ultimate beach party experience in Cyprus's most famous party destination. Non-stop fun, amazing beaches, and legendary nightlife.",
    longDescription: "Get ready for the ultimate party experience in Ayia Napa, Cyprus's most famous beach resort and nightlife destination. This high-energy adventure combines beautiful beaches, water sports, and the legendary Ayia Napa nightlife scene.",
    itinerary: [
      {
        day: 1,
        title: "Beach Party Begins",
        activities: [
          "Beachfront hotel check-in",
          "Welcome pool party",
          "Nissi Beach exploration",
          "Water sports activities",
          "Beach volleyball competition",
          "Club crawl introduction night"
        ]
      },
      {
        day: 2,
        title: "Ultimate Party Day",
        activities: [
          "Boat party with DJ",
          "Sea caves exploration",
          "Beach barbecue lunch",
          "Foam party at famous club",
          "VIP nightclub experience",
          "Late night beach bonfire"
        ]
      },
      {
        day: 3,
        title: "Final Celebration",
        activities: [
          "Recovery brunch by the pool",
          "Last beach session",
          "Group photos and memories",
          "Farewell party",
          "Departure"
        ]
      }
    ],
    included: [
      "3 nights beachfront hotel",
      "All meals and party drinks",
      "VIP club access and entries",
      "Boat party with DJ",
      "Water sports equipment",
      "Professional party photographer",
      "Transportation to all venues",
      "24/7 party support team"
    ],
    notIncluded: [
      "Flight tickets",
      "Travel insurance",
      "Additional drinks beyond package",
      "Personal shopping",
      "Spa treatments"
    ],
    images: [
      "/ayia-napa-1.jpg",
      "/ayia-napa-2.jpg",
      "/ayia-napa-3.jpg",
      "/ayia-napa-4.jpg"
    ]
  }
]

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const trip = trips.find(t => t.id === parseInt(id))
  
  if (!trip) {
    return {
      title: 'Trip Not Found - Memora Cyprus Adventures'
    }
  }

  return {
    title: `${trip.title} - Memora Cyprus Adventures`,
    description: trip.description,
  }
}

export default async function TripDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const trip = trips.find(t => t.id === parseInt(id))

  if (!trip) {
    notFound()
  }

  return (
    <div className="pt-20">
      <TripDetails trip={trip} />
    </div>
  )
}
