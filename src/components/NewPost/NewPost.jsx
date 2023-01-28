import React from 'react'
import styles from "./NewPost.module.scss"

const NewPost = () => {
    
  return (
    <div className={styles.NewPost}>
        <h2 className={styles.titleNewPost}>Aggiungi un nuovo ricordo</h2>
        <form className={styles.formNewPost}>
            <input type="file" accept=".jpg, .jpeg, .png, .mp4, .avi, .webm"/>
            <div className={styles.containerField}>
                <div className={styles.containerFieldInput}>
                    <textarea type="text" placeholder='Scrivi un pensiero' className={styles.textPost} required></textarea>
                    <input type="text" placeholder='#Hashtag' className={styles.hashtag} required/>
                </div>
                <input type="submit" value="Condividi il tuo ricordo" className={styles.submitNewPost}/>
            </div>
        </form>
    </div>
  )
}

export default NewPost