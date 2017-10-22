import reset from './reset'

const btn = props => ({
  ...reset,
  color: props.theme('colors.blue'),
  backgroundColor: props.theme('colors.white'),
  border: 'none',
  borderRadius: 4,
  boxShadow: '0 0 8px rgba(0,0,0,.25)',
  fontWeight: '600',
  lineHeight: '1.625',
  textDecoration: 'none',
  paddingTop: props.theme.space[2],
  paddingBottom: props.theme.space[2],
  marginTop: props.theme.space[3]
})

export default btn
