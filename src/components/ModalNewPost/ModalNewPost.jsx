import NewPost from "../NewPost/NewPost"
import styles from "./ModalNewPost.module.scss"

const ModalNewPost = ({setOpenModalNewPost}) => {

  return (
    <div className={styles.Modal}>
      <div className={styles.containerModal}>
        <button className={styles.btnModalClose} 
        onClick={() => {setOpenModalNewPost(false) }}><i class="fa-solid fa-xmark"></i></button>
        <div className={styles.contentModal}>
            <NewPost />
        </div>
      </div>
    </div>
  )
}

export default ModalNewPost