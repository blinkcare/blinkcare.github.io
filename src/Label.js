import React from 'react'
import cxs from 'cxs/component'

const Label = cxs('label')(props => ({
  display: 'block',
  fontSize: 'inherit',
  textAlign: 'left',
  maxWidth: 16 * 16,
  marginLeft: 'auto',
  marginRight: 'auto',
  lineHeight: '1.5'
}))

export default Label
