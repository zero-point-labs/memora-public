import { Metadata } from 'next'
import Contact from '@/components/Contact'

export const metadata: Metadata = {
  title: 'Contact Us - Memora Cyprus Adventures',
  description: 'Get in touch with Memora for your next Cyprus adventure. Contact us for bookings, questions, and trip information.',
}

export default function ContactPage() {
  return (
    <div className="pt-20">
      <Contact />
    </div>
  )
}
