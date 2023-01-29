import styles from "./FriendListBtn.module.scss"

const FriendListBtn = ({setOpenModalFriendList}) => {
  return (
    <button className={styles.FriendListBtn} onClick={() => {
        setOpenModalFriendList(true)
      }}><i class="fa-solid fa-magnifying-glass"></i></button>
  )
}

export default FriendListBtn