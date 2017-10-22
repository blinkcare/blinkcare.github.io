import React from 'react'
import Logo from './Logo'
import Title from './Title'
import Text from './Text'
import Author from './Author'
import data from '../data'
import colors from './colors'

import cxs from 'cxs/component'
const Label = cxs('span')(props => ({
  display: 'block',
  textTransform: 'uppercase',
  letterSpacing: '.1em',
  fontWeight: '600'
}))

const Header = () => (
  <header>
    <Logo size={96} fill={colors.white} />
    <Title>{data.name}</Title>
    <Text f={3} mt={0} mb={2}>
      {data.description}
    </Text>
    <Text>
      {['kusti8', 'lachlanjc', 'shamdasani', 'praveenravi77'].map(u => (
        <Author
          href={`https://github.com/${u}`}
          key={`@${u}`}
          children={`@${u}`}
        />
      ))}
    </Text>
    <Text mt={4}>
      <Label>PennApps XVI Winner</Label>
      Health Route and Most Unique Hack ($1k grant from 1517 Fund)
    </Text>
  </header>
)

export default Header
