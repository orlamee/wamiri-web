import CreateAccount from '@/components/homepage/createaccount'
import FAQ from '@/components/homepage/faq'
import Footer from '@/components/homepage/footer'
import Hero from '@/components/homepage/hero'
import Works from '@/components/homepage/howitworks'
import Navbar from '@/components/homepage/navbar'
import RecentFound from '@/components/homepage/recentfound'
import Reunite from '@/components/homepage/reunite'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <RecentFound/>
      <Works/>
      <FAQ/>
      <Reunite/>
      <CreateAccount/>
      <Footer/>
    </div>
  )
}
