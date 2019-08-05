import React from 'react'
import Flex from './Flex'
import Bar from './Bar'
import Text from './Text'
import Link from './Link'
import data from '../data'

const Footer = () => (
  <footer>
    <Bar />
    <Flex align="center" justify="center">
      <Text children="Made in 2017" mr={3} />
      <Link href={data.repo} children="GitHub" />
    </Flex>
  </footer>
)

export default Footer
