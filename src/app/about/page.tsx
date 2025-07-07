import { Metadata } from 'next'
import AboutUs from '@/components/AboutUs'

export const metadata: Metadata = {
  title: 'About Us - Memora Cyprus Adventures',
  description: 'Learn about Memora and our mission to create unforgettable Cyprus adventures for college students.',
}

export default function AboutPage() {
  return (
    <div className="pt-20">
      <AboutUs />
    </div>
  )
}
