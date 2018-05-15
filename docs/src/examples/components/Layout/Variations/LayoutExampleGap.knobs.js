import React, { Component } from 'react'
import { Checkbox, Divider } from 'semantic-ui-react'

export default class LayoutExampleGap extends Component {
  static defaultProps = { gap: 20 }

  handleGapChange = ({ target: { value } }) => {
    const newK = { gap: value }
    this.props.onKnobChange(newK)
    console.log('handleGapChange()', newK)
  }

  handleVerticalChange = (e, { checked }) => {
    const newK = { vertical: !!checked }
    this.props.onKnobChange(newK)
    console.log('handleVerticalChange()', newK)
  }

  render() {
    const { gap, vertical } = this.props
    const gapREM = `${gap / 10}rem`

    return (
      <div>
        <label>
          <input type='range' value={gap} onChange={this.handleGapChange} />
          Gap {gapREM}
        </label>

        <Checkbox label='Vertical' checked={vertical} onChange={this.handleVerticalChange} />

        <Divider hidden />
      </div>
    )
  }
}
