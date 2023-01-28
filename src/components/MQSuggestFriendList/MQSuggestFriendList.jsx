import React from 'react'
import {useState, useEffect} from "react"
import { GET_DUMMYJSON } from '../../utils/fetch'
import SuggestFriend from '../SuggestFriend/SuggestFriend'
import styles from "./MQSuggestFriendList.module.scss"

const MQSuggestFriendList = () => {

const [suggestFriendList, setSuggestFriendList] = useState([])
const [btnOpenList, setBtnOpenList] = useState(false)

const handleClick = () => {
  setBtnOpenList(!btnOpenList)
}

useEffect(() => {
  GET_DUMMYJSON("users").then(({users}) => setSuggestFriendList(users))
}, [])

  return (
  <>
  <div></div>
      <div className={styles.SuggestFriendList}>
        <div className={styles.headerSuggestFriendList}>
          <h2 className={styles.textSuggestFriendList}>Persone che potresti conoscere</h2>
          <button className={styles.btnOpenList} onClick={handleClick}><i class="fa-solid fa-ellipsis-vertical"></i></button>
        </div>
        {
          btnOpenList && (
            <div className={styles.containerSuggestFriendList}>
              {suggestFriendList.filter((suggestFL) => suggestFL.id < 6).map((suggestFL) => <SuggestFriend data={suggestFL} />)}
            </div>
          )
        }
    </div>
    </>
  )
}

export default MQSuggestFriendList