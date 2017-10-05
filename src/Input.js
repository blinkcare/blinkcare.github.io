import React from 'react'
import cxs from 'cxs/component'
import reset from './reset'

const Input = cxs('input')(reset, props => ({
  borderColor: props.theme('colors.smoke'),
  borderStyle: 'solid',
  borderWidth: 1,
  color: props.theme('colors.black'),
  padding: props.theme.space[2],
  lineHeight: '1.5'
}))

export default Input
