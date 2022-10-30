import Footer from '@components/layouts/Footer'
import BannerSection from '@containers/Home/components/BannerSection'
import ClientReviewSection from '@containers/Home/components/ClientReviewSection'
import ConnectWithUsSection from '@containers/Home/components/ConnectWithUsSection'
import KnowYourBusinessSection from '@containers/Home/components/KnowYourBusinessSection'
import PeoplesTrustSection from '@containers/Home/components/PeoplesTrustSection'

const Home: NextPage = () => {
  return (
    <>
      {/* Header Section */}
      <BannerSection />

      {/* Know Your Business Section */}
      <KnowYourBusinessSection />

      {/* People Trust Section */}
      <PeoplesTrustSection />

      {/* Client Review Section */}
      <ClientReviewSection />

      {/* Connect with us Section */}
      <ConnectWithUsSection />

      <Footer />
    </>
  )
}

export default Home
