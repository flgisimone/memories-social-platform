import FriendList from "../FriendList/FriendList"
import styles from "./ModalFriendList.module.scss"

const ModalFriendList = ({setOpenModalFriendList}) => {
  return (
    <div className={styles.Modal}>
    <div className={styles.containerModal}>
      <button className={styles.btnModalClose} onClick={() => { setOpenModalFriendList(false) }}><i class="fa-solid fa-xmark"></i></button>
      <div className={styles.contentModal}>
          <FriendList />
      </div>
  </div>
</div>
  )
}

export default ModalFriendList