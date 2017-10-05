import cxs from 'cxs/component'
import colors from './colors'

const Author = cxs('a')(props => ({
  display: 'inline-block',
  backgroundColor: props.theme('colors.highlight'),
  color: props.theme('colors.blue'),
  borderRadius: 4,
  paddingLeft: props.theme.space[1],
  paddingRight: props.theme.space[1],
  marginLeft: props.theme.space[1],
  marginRight: props.theme.space[1],
  lineHeight: '1.5',
  textDecoration: 'none',
  whiteSpace: 'nowrap'
}))

export default Author
