import cxs from 'cxs/component'

const Link = cxs('a')(props => ({
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  color: props.theme('colors.white'),
  fontWeight: '600',
  ':hover': {
    textDecoration: 'underline'
  }
}))

export default Link
