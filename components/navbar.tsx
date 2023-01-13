import { Flex, NavLink, Container } from 'theme-ui';

export default function Navbar() {
  return <Container>
    <Flex as="nav">
      <NavLink href="/" p={2}>
        Home
      </NavLink>
      <NavLink href="/blog" p={2} marginLeft={'auto'}>
        Blog
      </NavLink>
      <NavLink href="/about" p={2}>
        About
      </NavLink>
    </Flex>
  </Container>
}