import React, { useEffect, useState } from 'react'
import cx from 'classnames'

import styles from './Rotator.module.css'

type Props = {
  className: string
  front: React.ReactNode
  back: React.ReactNode
  isFront: boolean
}

const Rotator = ({ className, front, back, isFront }: Props) => {
  const [deg, setDeg] = useState(isFront ? 0 : 180)

  useEffect(() => {
    setDeg(isFront ? 0 : 180)
  }, [isFront])

  return (
    <div className={cx(styles.rotator, className)}>
      <div
        className={styles.surface}
        style={{ transform: `rotateY(${deg}deg)` }}
      >
        <div className={styles.step}>{front}</div>
        <div className={styles.step}>{back}</div>
      </div>
    </div>
  )
}

export default Rotator
