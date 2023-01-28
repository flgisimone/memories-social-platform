import React from 'react'
import { GET_RANDOMUSER } from '../../utils/fetch'
import { get } from 'lodash'
import { useState, useEffect } from 'react'
import styles from "./Friend.module.scss"

const Friend = ({data}) => {

    const [user, setUser] = useState({})

    useEffect(() => {
        GET_RANDOMUSER(`api`).then((user) => setUser(user)) 
  }, [])

    return (
        <div className={styles.Friend}>
            <img src={get(user, 'results[0].picture.large')} alt={get(user, 'results[0].name.first') } />
            <div className={styles.infoFriend}>
                <h5 className={styles.completeName}>{data.firstName} {data.lastName}</h5>
                <span className={styles.username}>@{data.username}</span>
            </div>
        </div>
      )
}

export default Friend