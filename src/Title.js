import cxs from 'cxs/component'

const Title = cxs('h1')(props => ({
  fontSize: 48,
  marginTop: props.theme.space[3],
  marginBottom: props.theme.space[1]
}))

export default Title
