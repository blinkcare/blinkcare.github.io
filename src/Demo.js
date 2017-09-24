import React from 'react'
import Bar from './Bar'
import Heading from './Heading'
import Text from './Text'
import cxs from 'cxs/component'

const Embed = cxs('div')(props => ({
  position: 'relative',
  height: 0,
  padding: 0,
  paddingBottom: `${(props.ratio || 9 / 16) * 100}%`,
  overflow: 'hidden',
  '& > iframe': {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    bottom: 0,
    left: 0,
    border: 0
  }
}))

const Demo = () => (
  <section id="submit">
    <Bar />
    <Heading mb={3}>Demo</Heading>
    <Embed>
      <iframe
        src="https://www.youtube-nocookie.com/embed/f2C1TL8X2ds?rel=0"
        frameBorder={0}
        allowFullScreen
      />
    </Embed>
  </section>
)

export default Demo
