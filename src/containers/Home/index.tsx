import Footer from '@components/layouts/Footer'
import BannerSection from '@containers/Home/components/BannerSection'
import ClientReviewSection from '@containers/Home/components/ClientReviewSection'
import ConnectWithUsSection from '@containers/Home/components/ConnectWithUsSection'
import KnowYourBusinessSection from '@containers/Home/components/KnowYourBusinessSection'
import PeoplesTrustSection from '@containers/Home/components/PeoplesTrustSection'

import Certification from './components/Certification'
import OurClientRecommendation from './components/OurClientRecommendation'
import OurServicesSection from './components/OurServicesSection'
import ProcessWeFollow from './components/ProcessWeFollow'
import TechnologiesWeUseSection from './components/TechnologiesWeUseSection'

const Home: NextPage = () => {
  return (
    <div style={{ backgroundColor: '#f9f9fc' }}>
      {/* Header Section */}
      <BannerSection />

      <ProcessWeFollow />
      {/* Know Your Business Section */}
      <KnowYourBusinessSection />
      {/* Technologies we use Section */}
      <TechnologiesWeUseSection />
      {/* People Trust Section */}
      <PeoplesTrustSection />
      {/* Our Services Section */}
      <OurServicesSection />
      <OurClientRecommendation />
      {/* Client Review Section */}
      <ClientReviewSection />
      {/* Connect with us Section */}
      <ConnectWithUsSection />
      <Certification />
      <Footer />
    </div>
  )
}

export default Home
