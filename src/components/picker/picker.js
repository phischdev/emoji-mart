import React from 'react'

import data from '../../../data/all.json'
import { testSetEquality } from '../../utils/customCategories'
import NimblePicker from './nimble-picker'

import { PickerPropTypes } from '../../utils/shared-props'
import { PickerDefaultProps } from '../../utils/shared-default-props'

export default class Picker extends React.PureComponent {
  constructor(props) {
    super(props)

    const { customCategories } = props;
    if (customCategories) {
      testSetEquality()
      const { categories, twoLevelStructure } = customCategories

      data["categories"] = categories
      if (twoLevelStructure)
        data["twoLevelStructure"] = twoLevelStructure
    }
  }
  render() {
    return <NimblePicker {...this.props} {...this.state} />
  }
}

Picker.propTypes /* remove-proptypes */ = PickerPropTypes
Picker.defaultProps = { ...PickerDefaultProps, data }
