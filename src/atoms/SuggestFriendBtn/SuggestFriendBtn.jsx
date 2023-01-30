import styles from "./SuggestFriendBtn.module.scss"

const SuggestFriendBtn = ({setOpenModalSuggestFriend}) => {
  return (
    <button className={styles.SuggestFriendBtn} onClick={() => {
      setOpenModalSuggestFriend(true)
      }}><i class="fa-solid fa-user-group"></i></button>
  )
}

export default SuggestFriendBtn