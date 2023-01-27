import React, { useEffect, useState } from 'react'
import Stories from '../Stories/Stories'
import { GET } from '../../utils/fetch'
import styles from "./StoriesList.module.scss"

const StoriesList = () => {

    const [storiesList, setStoriesList] = useState([])

    useEffect(() => {
        GET("users").then(({users}) => setStoriesList(users))
    }, [])

  return (
    <section className={styles.StoriesList}>
        {
            storiesList.map((stories, index) => <Stories data={stories} key={index}/>)
        }
    </section>
  )
}

export default StoriesList