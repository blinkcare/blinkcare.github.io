import React from 'react'
import cxs from 'cxs/component'
import reset from './reset'

const SubmitButton = cxs('input')(reset, props => ({
  color: props.theme('colors.blue'),
  backgroundColor: props.theme('colors.white'),
  border: 'none',
  borderRadius: 4,
  boxShadow: '0 0 8px rgba(0, 0, 0, .25)',
  lineHeight: '1.625',
  paddingTop: props.theme.space[2],
  paddingBottom: props.theme.space[2],
  marginTop: props.theme.space[3]
}))

export default SubmitButton
