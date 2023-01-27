import React from 'react'
import {useState, useEffect} from "react"
import { GET_RANDOMUSER } from '../../utils/fetch'
import { get } from 'lodash'
import styles from "./Stories.module.scss"

const Stories = ({data}) => {

    const [user, setUser] = useState({})

    useEffect(() => {
        GET_RANDOMUSER("api").then(user => setUser(user))
    }, [])

  return (
    <div className={styles.Stories}>
       <img src={get(user, 'results[0].picture.large')} alt="" className={styles.imgUserStories}/>
        <span className={styles.nameUser}>{get(data, 'username')}</span>
    </div>
  )
}

export default Stories