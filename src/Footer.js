import React from 'react'
import Box from './Box'
import Flex from './Flex'
import Column from './Column'
import Bar from './Bar'
import Text from './Text'
import Logo from './Logo'
import Link from './Link'
import data from '../data'
import colors from './colors'

const Footer = () => (
  <footer>
    <Bar />
    <Flex align="center" justify="center">
      <Text children="© 2017" mr={3} />
      <Link href={data.repo} children="GitHub" />
    </Flex>
  </footer>
)

export default Footer
