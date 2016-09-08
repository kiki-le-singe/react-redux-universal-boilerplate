import React from 'react'
import classNames from 'classnames'

import titleStyles from 'common/styles/local/title.css'
import styles from './About.css'

export default function About() {
  return (
    <div className="page">
      <div className="page-content">
        <h1 className={classNames(styles.title, titleStyles.h1)}>About</h1>
      </div>
    </div>
  )
}
