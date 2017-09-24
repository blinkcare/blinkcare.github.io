import React from 'react'
import Bar from './Bar'
import Heading from './Heading'
import Columns from './Columns'
import Column from './Column'
import Label from './Label'
import Input from './Input'
import SubmitButton from './SubmitButton'

const Submit = () => (
  <section id="submit">
    <Bar />
    <Heading>Sign up for updates</Heading>
    <form
      action="https://formspree.io/atlachlanjc+blink@gmail.com"
      method="POST"
    >
      <Columns>
        <Column>
          <Label>
            Email
            <Input type="email" name="email" placeholder="you@icloud.com" />
          </Label>
        </Column>
        <Column style={{ alignSelf: 'flex-end' }}>
          <SubmitButton type="submit" />
        </Column>
      </Columns>
    </form>
  </section>
)

export default Submit
