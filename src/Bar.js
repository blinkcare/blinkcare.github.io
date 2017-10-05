import cxs from 'cxs/component'
import Box from './Box'
import media from './media'

const Bar = cxs(Box)(props => ({
  width: 128,
  height: 4,
  backgroundColor: props.theme('colors.white'),
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: props.theme.space[4],
  marginBottom: props.theme.space[4]
}))

export default Bar
