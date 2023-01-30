import NewPostBtn from "../../atoms/NewPostBtn/NewPostBtn"
import TrendPostBtn from "../../atoms/TrendPostBtn/TrendPostBtn"
import FriendListBtn from "../../atoms/FriendListBtn/FriendListBtn"
import SuggestFriendBtn from "../../atoms/SuggestFriendBtn/SuggestFriendBtn"
import styles from "./MQNavBar.module.scss"

const MQNavBar = ({
  openModalNewPost, 
  setOpenModalNewPost, 
  openModalTrendPost, 
  setOpenModalTrendPost, 
  openModalFriendList, 
  setOpenModalFriendList, 
  openModalSuggestFriend, 
  setOpenModalSuggestFriend}) => {
    
  return (
    <div className={styles.MQNavBar}>
        <TrendPostBtn openModalTrendPost={openModalTrendPost} setOpenModalTrendPost={setOpenModalTrendPost}/>
        <NewPostBtn openModalNewPost={openModalNewPost} setOpenModalNewPost={setOpenModalNewPost}/>
        <FriendListBtn openModalFriendList={openModalFriendList} setOpenModalFriendList={setOpenModalFriendList}/>
        <SuggestFriendBtn openModalSuggestFriend={openModalSuggestFriend} setOpenModalSuggestFriend={setOpenModalSuggestFriend}/>
    </div>
  )
}

export default MQNavBar