import React, {lazy, Suspense} from 'react'
import {importMDX} from 'mdx.macro'
const Content = lazy(() => importMDX('./home.content.mdx'))

export class Home extends React.Component {
  render() {
    return (
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Content />
        </Suspense>
      </div>
    )
  }
}
