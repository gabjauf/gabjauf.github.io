import Navbar from '../navbar'
import Footer from '../footer'

export default function BaseLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}