import cxs from 'cxs/component'
import colors from './colors'

const Author = cxs('a')(props => ({
  display: 'inline-block',
  backgroundColor: '#cbe1fb',
  color: props.theme('colors.blue'),
  borderRadius: 4,
  paddingLeft: props.theme.space[1],
  paddingRight: props.theme.space[1],
  textDecoration: 'none',
  whiteSpace: 'nowrap'
}))

export default Author
