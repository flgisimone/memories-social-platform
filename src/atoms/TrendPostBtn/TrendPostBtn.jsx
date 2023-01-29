import styles from "./TrendPostBtn.module.scss"

const TrendPostBtn = ({setOpenModalTrendPost}) => {
    
  return (
    <button className={styles.TrendPostBtn} onClick={() => {
      setOpenModalTrendPost(true)
    }}><i class="fa-solid fa-arrow-trend-up"></i></button>
  )
}

export default TrendPostBtn