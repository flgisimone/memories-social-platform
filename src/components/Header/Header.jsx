import Account from "../../components/Account/Account"
import styles from "./Header.module.scss"

const Header = () => {
  return (
    <div className={styles.Header}>
        <div className={styles.HeaderContainer}>
            <div className={styles.nameSocial}>
              <h1>Memories</h1>
              <span>Share Your Moment</span>
            </div>
            <Account />
        </div>
    </div>
  )
}

export default Header