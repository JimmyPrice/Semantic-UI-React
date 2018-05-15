import React, { Component } from 'react'
import { Layout } from 'stardust'

export default class LayoutExampleGap extends Component {
  static defaultProps = { knobs: { gap: '0' } }

  render() {
    const { knobs } = this.props
    const gapREM = knobs.gap ? `${knobs.gap / 10}rem` : '0rem'

    return (
      <div>
        <pre>{JSON.stringify(this.props, null, 2)}</pre>
        <Layout debug vertical={knobs.vertical} gap={gapREM} start='Start' main='Main' end='End' />
      </div>
    )
  }
}
