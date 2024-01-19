import Hero from '@/components/homepage/hero'
import Navbar from '@/components/homepage/navbar'
import RecentFound from '@/components/homepage/recentfound'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <RecentFound/>
    </div>
  )
}
