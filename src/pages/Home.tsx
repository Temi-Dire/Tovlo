import About from "../component/About"
import Advantages from "../component/Advantages"
import AirDriedFeed from "../component/AirDriedFeed"
import Delivery from "../component/Delivery"
import Faq from "../component/Faq"
import HealthierThanKibble from "../component/HealthierThanKibble"
import Navbar from "../component/Navbar"
import OurProducts from "../component/OurProducts"
import Testimonial from "../component/Testimonial"
import TheJourney from "../component/TheJourney"
import Welcome from "../component/Welcome"
import WhatYouFeed from "../component/WhatYouFeed"
import WhyChooseTovlo from "../component/WhyChooseTovlo"

const Home = () => {
  return (
    <div className="my-4">
        <Navbar />
        <About />
        <WhyChooseTovlo />
        <OurProducts />
        <TheJourney />
        <WhatYouFeed />
        <Advantages />
        <HealthierThanKibble />
        <Welcome />
        <AirDriedFeed />
        <Delivery />
        <Testimonial />
        <Faq />
    </div>
  )
}

export default Home