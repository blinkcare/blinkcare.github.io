import React from 'react'
import Logo from './Logo'
import Title from './Title'
import Text from './Text'
import Bar from './Bar'
import data from '../data'
import colors from './colors'

const Header = () => (
  <header>
    <Logo size={72} fill={colors.blue} />
    <Title>{data.name}</Title>
    <Text f={3}>{data.description}</Text>
  </header>
)

export default Header
