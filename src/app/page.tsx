import Hero from '@/components/homepage/hero'
import Works from '@/components/homepage/howitworks'
import Navbar from '@/components/homepage/navbar'
import RecentFound from '@/components/homepage/recentfound'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <RecentFound/>
      <Works/>
    </div>
  )
}
