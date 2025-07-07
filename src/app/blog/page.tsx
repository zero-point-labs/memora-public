import { Metadata } from 'next'
import BlogList from '@/components/BlogList'

export const metadata: Metadata = {
  title: 'Blog - Memora Cyprus Adventures',
  description: 'Read about Cyprus travel tips, trip reports, and local culture insights from Memora adventures.',
}

export default function BlogPage() {
  return (
    <div className="pt-20">
      <BlogList />
    </div>
  )
}
