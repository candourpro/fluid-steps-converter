import _ from 'lodash'
import isNumber from 'is-number'
import step from 'candour-step'

const allSides = (prefix, suffix = '') => [
  `${prefix}${suffix}`,
  `${prefix}Top${suffix}`,
  `${prefix}Right${suffix}`,
  `${prefix}Bottom${suffix}`,
  `${prefix}Left${suffix}`,
]

const SIZE_PROPS = [
  ...allSides('padding'),
  ...allSides('margin'),
  'fontSize',
  'width',
  'height',
  ...allSides('border', 'Width'),
  'maxWidth',
  'maxHeight',
]

export default {
  name: 'fluidSteps',
  match: (_config, value, key) => (
    value && (isNumber(value) || value === true) && _.includes(SIZE_PROPS, key)
  ),
  value: (_config, value) => step(_.toNumber(value === true ? 1 : value)),
}
