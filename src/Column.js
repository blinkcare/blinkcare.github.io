import cxs from 'cxs/component'
import Box from './Box'
import media from './media'

const Column = cxs(Box)(props => ({
  width: '100%',
  padding: props.theme.space[3],
  [media[0]]: {
    width: 100 / 2 + '%'
  }
}))

export default Column
