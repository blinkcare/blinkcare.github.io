import React from 'react'
import Bar from './Bar'
import Heading from './Heading'
import Columns from './Columns'
import Column from './Column'
import Label from './Label'
import Input from './Input'

import cxs from 'cxs/component'
import btn from './btn'
const Button = cxs('input')(props => btn(props))

const Submit = () => (
  <section id="submit">
    <Bar />
    <Heading>Sign up for updates</Heading>
    <form
      action="https://formspree.io/atlachlanjc+blink@gmail.com"
      method="POST"
    >
      <Label>
        Email
        <Input type="email" name="email" placeholder="you@gmail.com" />
      </Label>
      <Button type="submit" />
    </form>
  </section>
)

export default Submit
