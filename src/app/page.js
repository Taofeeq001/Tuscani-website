import Destinations from '@/components/Landingpage/Destinations/Destinations'
import Hero from '@/components/Landingpage/Hero'
import Transportprops from '@/components/Landingpage/props/Transportprops'

export default function Home() {
  return (
    <div>
      <Hero />
      <Destinations />
      <Transportprops
        image="/"
        heading="Bike and Rickshaw rental"
        paragraph="Book your quality vehicle quickly for an hour or all day"
        image2="/"
        heading2="Guided tour of the countryside"
        paragraph2="Live the real Lucchese experience by visiting the suburbs by bike!"
        image3="/"
        heading3="Taxi and NCC service"
        paragraph3="Do you need not only a bike but also a driver? Then you have found the right place!"
        image4="/"
        heading4="Bus Package"
        paragraph4="Do you need not only a bike but also a driver? Then you have found the right place!"
      />
    </div>
  )
}
