import React from 'react'
import Box from './Box'
import Columns from './Columns'
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
    <Columns>
      <Column>
        <Text children="© 2017" />
      </Column>
      <Column>
        <Link href={data.repo} children="GitHub" />
      </Column>
    </Columns>
  </footer>
)

export default Footer
