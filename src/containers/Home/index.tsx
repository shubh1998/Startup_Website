import Footer from '@components/layouts/Footer'
import ClientReviewSection from '@containers/Sections/ClientReviewSection'
import ConnectWithUsSection from '@containers/Sections/ConnectWithUsSection'
import HeaderSection from '@containers/Sections/HeaderSection'
import KnowYourBusinessSection from '@containers/Sections/KnowYourBusinessSection'
import PeoplesTrustSection from '@containers/Sections/PeoplesTrustSection'

const Home: NextPage = () => {
  return (
    <>
      {/* Header Section */}
      <HeaderSection />

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
