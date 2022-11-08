import Footer from '@components/layouts/Footer'
import BannerSection from '@containers/Home/components/BannerSection'
import ClientReviewSection from '@containers/Home/components/ClientReviewSection'
import ConnectWithUsSection from '@containers/Home/components/ConnectWithUsSection'
import KnowYourBusinessSection from '@containers/Home/components/KnowYourBusinessSection'
import PeoplesTrustSection from '@containers/Home/components/PeoplesTrustSection'

import OurClientRecommendation from './components/OurClientRecommendation'
import OurServicesSection from './components/OurServicesSection'
import TechnologiesWeUseSection from './components/TechnologiesWeUseSection'

const Home: NextPage = () => {
  return (
    <div style={{ backgroundColor: '#f9f9fc' }}>
      {/* Header Section */}
      <BannerSection />

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

      <Footer />
    </div>
  )
}

export default Home
