import Navbar from '../navbar'
import { Container } from 'theme-ui'

export default function BaseLayout({ children }: {children: React.ReactNode}) {
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