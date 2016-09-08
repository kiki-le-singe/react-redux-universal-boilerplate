import React from 'react'

import Hello from 'common/components/Hello'

export default function HelloView() {
  return (
    <div className="page page-hello">
      <div className="page-content">
        <Hello name={<span className="text">World!</span>} />
      </div>
    </div>
  )
}
