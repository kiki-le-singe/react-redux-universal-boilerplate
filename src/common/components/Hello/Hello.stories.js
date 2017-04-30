import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Hello from './Hello'

import '../../styles/global/views/hello.scss'

storiesOf('Hello', module)
  .addWithInfo(
    'without props',
    `
      This is the basic usage with the Hello component.
    `,
    () => (
      <Hello />
    )
  )
  .addWithInfo(
    'with name props as string',
    `
      This is the basic usage with the name props as string.
    `,
    () => (
      <Hello name="World" />
    )
  )
  .addWithInfo(
    'with name props as element',
    `
      This is the basic usage with the name props as element.
    `,
    () => (
      <Hello name={<span className="text">World!</span>} />
    )
  )
  .addWithInfo(
    'with some styles',
    `
      This is the basic usage with some styles.
    `,
    () => (
      <div className="view__hello">
        <Hello name={<span className="text">World!</span>} />
      </div>
    )
  )
