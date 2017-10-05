import React from 'react'
import Logo from './Logo'
import Title from './Title'
import Text from './Text'
import Author from './Author'
import data from '../data'
import colors from './colors'

const Header = () => (
  <header>
    <Logo size={96} fill={colors.white} />
    <Title>{data.name}</Title>
    <Text f={3} mt={0} mb={2}>
      {data.description}
    </Text>
    <Text>
      <Author href="https://github.com/kusti8" children="@kusti8" />
      <Author href="https://github.com/lachlanjc" children="@lachlanjc" />
      <Author href="https://github.com/shamdasani" children="@shamdasani" />
      <Author
        href="https://github.com/praveenravi77"
        children="@praveenravi77"
      />
    </Text>
    <Text mt={4}>
      At PennApps XVI, Blink won the Health Route and the Most Unique Hack ($1k
      grant from 1517 Fund).
    </Text>
  </header>
)

export default Header
