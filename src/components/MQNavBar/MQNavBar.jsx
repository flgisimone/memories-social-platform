import NewPostBtn from "../../atoms/NewPostBtn/NewPostBtn"
import TrendPostBtn from "../../atoms/TrendPostBtn/TrendPostBtn"
import FriendListBtn from "../../atoms/FriendListBtn/FriendListBtn"
import styles from "./MQNavBar.module.scss"

const MQNavBar = ({openModalNewPost, setOpenModalNewPost, openModalTrendPost, setOpenModalTrendPost, openModalFriendList, setOpenModalFriendList}) => {
  return (
    <div className={styles.MQNavBar}>
        <TrendPostBtn openModalTrendPost={openModalTrendPost} setOpenModalTrendPost={setOpenModalTrendPost}/>
        <NewPostBtn openModalNewPost={openModalNewPost} setOpenModalNewPost={setOpenModalNewPost}/>
        <FriendListBtn openModalFriendList={openModalFriendList} setOpenModalFriendList={setOpenModalFriendList}/>
    </div>
  )
}

export default MQNavBar