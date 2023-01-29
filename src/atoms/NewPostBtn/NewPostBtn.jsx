import styles from "./NewPostBtn.module.scss"

const NewPostBtn = ({setOpenModalNewPost}) => {
    
  return (
    <button className={styles.NewPostBtn} onClick={() => {
      setOpenModalNewPost(true)
    }}><i className="fa-solid fa-plus"></i></button>
  )
}

export default NewPostBtn