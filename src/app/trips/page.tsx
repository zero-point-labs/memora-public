import { Metadata } from 'next'
import UpcomingTrips from '@/components/UpcomingTrips'
import PastTrips from '@/components/PastTrips'

export const metadata: Metadata = {
  title: 'Trips - Memora Cyprus Adventures',
  description: 'Discover our upcoming Cyprus adventures and browse past trips. All-inclusive 3-day experiences for college students.',
}

export default function TripsPage() {
  return (
    <div className="pt-20">
      <UpcomingTrips />
      <PastTrips />
    </div>
  )
}
