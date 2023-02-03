import { Themed } from "@theme-ui/mdx"
import { Container, Heading } from "theme-ui"
import BaseLayout from "../components/layouts/base"

export default function HomePage() {
  return <BaseLayout>
      <Themed.h1>Hello, I'm Gabriel !</Themed.h1>
      <img src="/hero.svg" width='500px'/>
  </BaseLayout>
}
