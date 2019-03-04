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
  'minWidth',
  'maxWidth',
  'minHeight',
  'maxHeight',
  'top',
  'right',
  'bottom',
  'left',
  'outlineWidth',
  'letterSpacing',
]

const stepOpts = (config) => _.defaultsDeep(
  _.cloneDeep(config),
  {
    min: 14,
    max: 18,
    minWidth: 320,
    maxWidth: 1600,
  },
)

export default (config) => ({
  name: 'fluidSteps',
  match: (_theme, value, key) => (
    value && (isNumber(value) || value === true) && _.includes(SIZE_PROPS, key)
  ),
  value: (_theme, value) => (
    step(_.toNumber(value === true ? 1 : value), stepOpts(config))
  ),
})
