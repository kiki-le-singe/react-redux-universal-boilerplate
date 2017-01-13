import React from 'react'
import Helmet from 'react-helmet'

import Hello from 'common/components/Hello'

export default function HelloView() {
  return (
    <div className="view view__hello">
      <Helmet title="Hello" />

      <h2>Hello</h2>

      <div className="view__content">
        <Hello name={<span className="text">World!</span>} />
      </div>
    </div>
  )
}
