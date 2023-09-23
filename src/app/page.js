import Bikeservice from '@/components/Landingpage/Bikeservice/Bikeservice'
import Destinations from '@/components/Landingpage/Destinations/Destinations'
import Footer from '@/components/Landingpage/Footer'
import Hero from '@/components/Landingpage/Hero'
import Popularpackage from '@/components/Landingpage/PopularPackage/Popularpackage'
import Testimony from '@/components/Landingpage/Testimony/Testimony'
import Transportprops from '@/components/Landingpage/props/Transportprops'

export default function Home() {
  return (
    <div>
      <Hero />
      <Destinations />
      <Transportprops
        image="/Images/Napep.svg"
        heading="Bike and Rickshaw rental"
        paragraph="Book your quality vehicle quickly for an hour or all day"
        image2="/Images/Guide tour.svg"
        heading2="Guided tour of the countryside"
        paragraph2="Live the real Lucchese experience by visiting the suburbs by bike!"
        image3="/Images/Taxi.svg"
        heading3="Taxi and NCC service"
        paragraph3="Do you need not only a bike but also a driver? Then you have found the right place!"
        image4="/Images/Bus package.svg"
        heading4="Bus Package"
        paragraph4="Do you need not only a bike but also a driver? Then you have found the right place!"
      />
      <Bikeservice/>
      <Popularpackage/>
      <Testimony/>
      <Footer/>
    </div>
  )
}
