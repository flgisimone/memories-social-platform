import TrendPostList from "../TrendPostList/TrendPostList"
import styles from "./ModalTrendPost.module.scss"

const ModalTrendPost = ({setOpenModalTrendPost}) => {

  return (
    <div className={styles.Modal}>
      <div className={styles.containerModal}>
        <button className={styles.btnModalClose} onClick={() => { setOpenModalTrendPost(false) }}><i class="fa-solid fa-xmark"></i></button>
        <div className={styles.contentModal}>
            <TrendPostList />
        </div>
    </div>
  </div>
  )
}

export default ModalTrendPost