import SuggestFriendList from "../SuggestFriendList/SuggestFriendList"
import styles from "./ModalSuggestFriend.module.scss"


const ModalSuggestFriend = ({setOpenModalSuggestFriend}) => {
  return (
    <div className={styles.Modal}>
    <div className={styles.containerModal}>
      <button className={styles.btnModalClose} 
      onClick={() => {setOpenModalSuggestFriend(false) }}><i class="fa-solid fa-xmark"></i></button>
      <div className={styles.contentModal}>
          <SuggestFriendList />
      </div>
    </div>
  </div>
  )
}

export default ModalSuggestFriend