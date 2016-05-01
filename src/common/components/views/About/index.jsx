import React from 'react'

export default function About() {
  const styles = require('./About.scss')

  return (
    <div className="page">
      <div className="page-content">
        <h1 className={ styles.title }>About</h1>
      </div>
    </div>
  )
}
