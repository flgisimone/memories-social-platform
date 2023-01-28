import React from 'react'
import { useState, useEffect } from 'react'
import { GET_RANDOMUSER } from '../../utils/fetch'
import { get } from 'lodash'
import styles from "./SuggestFriend.module.scss"

const SuggestFriend = () => {

    const [user, setUser] = useState({})

    useEffect(() => {
      GET_RANDOMUSER(`api`).then(user => setUser(user)) 
    }, [])
    

  return (
    <div className={styles.SuggestFriend}>
        <img src={get(user, 'results[0].picture.large')} alt="" className={styles.imgSuggestFriend}/>
        <div className={styles.infoUser}>
          <h5>@{get(user, "results[0].login.username")}</h5>
          <span className={styles.completeName}>{get(user, "results[0].name.first")} {get(user, "results[0].name.last")}</span>
        </div>
        
    </div>
  )
}

export default SuggestFriend