/** @jsxImportSource theme-ui */
import { Themed } from "@theme-ui/mdx"
import { Box, Flex, Grid, Link, Paragraph } from "theme-ui"
import BaseLayout from "../components/layouts/base"

export default function HomePage() {
  return <BaseLayout>
    <Grid columns={[1, 2]}>
      <Flex sx={{flexDirection: 'column', justifyContent: 'center'}}>
        <Themed.h1>Hello, I'm Gabriel !</Themed.h1>
        <Paragraph>I am a full-stack engineer, eager and curious to learn about everything!<br/></Paragraph>
        <Paragraph mt={2}>Right now, I am very interested in AI, reverse engineering, UX and looking for new ways to make a bigger impact on the world.</Paragraph>
        <Box mt={4}>
          <Link mr={2} variant="callToAction" href="https://www.malt.fr/profile/gabrieljauffret?overview=true" target={'_blank'}>Hire me!</Link>
        </Box>
      </Flex>
      <div>
        <img src="/hero.svg" width='100%' />
      </div>
    </Grid>
  </BaseLayout >
}
