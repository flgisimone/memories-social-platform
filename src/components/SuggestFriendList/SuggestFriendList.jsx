import React from 'react'
import {useState, useEffect} from "react"
import { GET_DUMMYJSON } from '../../utils/fetch'
import SuggestFriend from '../SuggestFriend/SuggestFriend'
import styles from "./SuggestFriendList.module.scss"

const SuggestFriendList = () => {

const [suggestFriendList, setSuggestFriendList] = useState([])

useEffect(() => {
  GET_DUMMYJSON("users").then(({users}) => setSuggestFriendList(users))
}, [])

  return (
    <div className={styles.SuggestFriendList}>
        <h2 className={styles.textSuggestFriendList}>Persone che potresti conoscere</h2>
        <div className={styles.containerSuggestFriendList}>
          {suggestFriendList.filter((suggestFL) => suggestFL.id < 6).map((suggestFL) => <SuggestFriend data={suggestFL} />)}
        </div>
    </div>
  )
}

export default SuggestFriendList