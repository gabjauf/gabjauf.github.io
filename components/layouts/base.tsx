import Navbar from '../navbar'
import Footer from '../footer'
import { Container } from 'theme-ui'

export default function BaseLayout({ children }) {
  return (
    <Container p={4} sx={{
      width: ['100%', null, null, '64em'],
    }}>
      <Navbar />
      <main>{children}</main>
      {/* <Footer /> */}
    </Container>
  )
}