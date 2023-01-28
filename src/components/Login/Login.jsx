import {useState, useRef} from "react"
import users from "../../utils/userAccess"
import Footer from "../Footer/Footer"
import styles from "./Login.module.scss"

const Login = () => {

    const showPass = useRef(null)
    const [loginState, setLoginState] = useState({})

    const onFormSubmit = () => {
        if (users){
            users.map((user) => {
                if(
                    user.username === loginState.username &&
                    user.password === loginState.password
                ) {
                    localStorage.setItem(
                        "username",
                        JSON.stringify({ ...loginState, imgProfile: user.imgProfile })
                    )
                } else {
                    return "utente non trovato"
                }
            })
        }
    }

    const onShowPass = (e) => {
        e.preventDefault()
        if(showPass.current.type === "text"){
            showPass.current.setAttribute("type", "password")
        } else {
            showPass.current.setAttribute("type", "text")
        }
    }

  return (
    <div className={styles.Login}>
        <div className={styles.containerMemories}>
            <h2 className={styles.tagline}>Share Your Moment</h2>
            <img src="https://i0.wp.com/ideawallpapers.com/wp-content/uploads/2022/01/collage-wallpaper-phone-11.jpg?fit=1920%2C1240&ssl=1" alt="" />
        </div>
        <hr />
        <div className={styles.containerLogin}>
            <h1 className={styles.NameSocial}>Memories</h1>
            <form className={styles.LoginForm} onSubmit={onFormSubmit}>
                <input type="text"
                value={loginState.username}
                onChange={(e) => setLoginState((prev) => ({...prev, username: e.target.value}))} 
                placeholder="Username" />

                <div className={styles.containerPass}>
                    <input type="password"
                    value={loginState.password}
                    onChange={(e) => setLoginState((prev) => ({...prev, password: e.target.value}))}
                    placeholder="Password" 
                    ref={showPass}/>

                    <i className="fa-solid fa-eye" onClick={onShowPass}></i>
                </div>

                <input type="submit" value="Accedi" className={styles.btnAccess}/>
            </form>
            <div className={styles.platformDownload}>
                <span className={styles.textDownload}>Scarica l'applicazione</span>
                <div className={styles.imgPlatform}>
                    <img src="https://static.cdninstagram.com/rsrc.php/v3/yC/r/piglPIPOKiJ.png" alt="" />
                    <img src="https://static.cdninstagram.com/rsrc.php/v3/yD/r/O6iPQNNjTn9.png" alt="" />
                </div>
                <span className={styles.companyTagline}>Memories® - Share Your Moment | Social Platform</span>
            </div>
            <Footer />
        </div>
    </div>
  )
}

export default Login