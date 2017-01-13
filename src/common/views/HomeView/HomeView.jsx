import React from 'react'
import Helmet from 'react-helmet'

// require the logo image both from client and server
const logoImage = require('./kiki.jpg')

export default function Home() {
  return (
    <div className="view view__home">
      <Helmet title="Home" />

      <h2>Home</h2>

      <div className="view__content">
        <p><img src={logoImage} alt="Kiki" width="300" height="300" /></p>
      </div>
    </div>
  )
}
