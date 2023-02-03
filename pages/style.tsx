import BaseLayout from "../components/layouts/base"
import { TypeScale, TypeStyle, ColorPalette } from '@theme-ui/style-guide';
import { Themed } from '@theme-ui/mdx';

export default function StylePage() {
  return <BaseLayout>
    <Themed.h1>Style Guide</Themed.h1>
    <ColorPalette />
    <TypeScale />
    <TypeStyle fontFamily="heading" fontWeight="heading" lineHeight="heading" />
    <TypeStyle fontFamily="body" fontWeight="body" lineHeight="body" />
  </BaseLayout>
}
