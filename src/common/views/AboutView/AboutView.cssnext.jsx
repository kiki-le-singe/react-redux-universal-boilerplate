import React from 'react'
import Helmet from 'react-helmet'

import titleStyles from 'common/styles/local/title.css'
import styles from './AboutView.css'

export default function AboutView() {
  return (
    <div className="view view__about">
      <Helmet title="About" />

      <h2 className={`${styles.title} ${titleStyles.h2}`}>About</h2>
    </div>
  )
}
