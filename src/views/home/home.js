import React, {lazy, Suspense} from 'react'
import {importMDX} from 'mdx.macro'
const Content = lazy(() => importMDX('./home.content.mdx'))

export class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Bonjour, {this.props.name}</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <Content />
        </Suspense>
      </div>
    );
  }
}