import React from 'react'
import Box from './Box'
import cxs from 'cxs/component'

const Container = cxs(Box)(props => ({
  maxWidth: 16 * 32,
  paddingLeft: props.theme.space[4],
  paddingRight: props.theme.space[4],
  paddingTop: props.theme.space[5],
  paddingBottom: props.theme.space[5],
  marginLeft: 'auto',
  marginRight: 'auto'
}))

export default Container
