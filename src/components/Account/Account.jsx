import React, {useEffect, useState} from 'react'
import styles from "./Account.module.scss"

const Account = () => {

  const [username, setUsername] = useState()

  useEffect(() => {
    setUsername(JSON.parse(localStorage.getItem("username"))?.username)
  }, [])

  const logOutHandler = () => {
    localStorage.removeItem("username");
    window.location.reload();
  };

  return (
    <section className={styles.Account}>
      <img src="https://scontent.fcta2-2.fna.fbcdn.net/v/t31.18172-8/29873287_1715695095191326_3318638786904464393_o.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_ohc=7YrXaa6W3BQAX9XHIVT&_nc_ht=scontent.fcta2-2.fna&oh=00_AfBuG9rxuftp5bto6wPKTUBicu42uNT5Wk9J3j9DMlPX5g&oe=63FC57B9" alt="flgisimone - giulio simone floresta" className={styles.imgProfile}/>
        <div className={styles.accountContainer}>
          <span className={styles.username}>@{username ? username : "Non autenticato"}</span>
          <button className={styles.logout} onClick={logOutHandler}><i class="fa-solid fa-right-from-bracket"></i> Esci</button>
        </div>
    </section>
  )
}

export default Account