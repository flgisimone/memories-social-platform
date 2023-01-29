import NewPostBtn from "../../atoms/NewPostBtn/NewPostBtn"
import TrendPostBtn from "../../atoms/TrendPostBtn/TrendPostBtn"
import styles from "./MQNavBar.module.scss"

const MQNavBar = ({openModalNewPost, setOpenModalNewPost, openModalTrendPost, setOpenModalTrendPost}) => {
  return (
    <div className={styles.MQNavBar}>
        <NewPostBtn openModalNewPost={openModalNewPost} setOpenModalNewPost={setOpenModalNewPost}/>
        <TrendPostBtn openModalTrendPost={openModalTrendPost} setOpenModalTrendPost={setOpenModalTrendPost}/>
    </div>
  )
}

export default MQNavBar