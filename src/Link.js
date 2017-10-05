import cxs from 'cxs/component'
import colors from './colors'

const Link = cxs('a')(props => ({
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  color: props.theme('colors.white'),
  fontWeight: '500',
  ':hover': {
    textDecoration: 'underline'
  }
}))

export default Link
