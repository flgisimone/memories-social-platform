import React from 'react'
import styles from "./MQNavBar.module.scss"

const MQNavBar = () => {
  return (
    <div className={styles.MQNavBar}>
        <button><i class="fa-solid fa-plus"></i></button>
        <button><i class="fa-solid fa-arrow-trend-up"></i></button>
        <button><i class="fa-solid fa-magnifying-glass"></i></button>
    </div>
  )
}

export default MQNavBar