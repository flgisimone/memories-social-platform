import React from 'react'
import { useState, useEffect } from 'react'
import {GET, GET_RANDOMUSER} from "../../utils/fetch"
import { get } from 'lodash'
import styles from "./Post.module.scss"

const Post = ({data}) => {

    const imgUrl = "https://picsum.photos/300/300?"

    const [user, setUser] = useState({})
    const [img, setImg] = useState({})

    useEffect(() => {
        GET(`users/${data.userId}`).then(user => setUser(user))
    }, [])

    useEffect(() => {
        GET_RANDOMUSER(`api`).then(img => setImg(img)) 
    }, [])

  return (
    <div className={styles.Post}>
        <div className={styles.infoPrimary}>
        <img src={get(img, 'results[0].picture.large')} alt="" className={styles.userImage}/>
            <div className={styles.namingUser}>
                <span className={styles.username}>@{user.username}</span>
                <h4 className={styles.title}>{data.title}</h4>
            </div>
        </div>
        <div className={styles.contentPost}>
            <img src={imgUrl + data.id} alt="" className={styles.imgPost}/>
            <div className={styles.hashtagContainer}>
                {data.tags.map((tag, index) => (
                    <span key={index} className={styles.hashtag}>#{tag}</span>
                ))}
            </div>
        </div>
        <div className={styles.interaction}>
            <div className={styles.interactionContainer}>
                <i className="fa-regular fa-heart"></i>
                    <span className={styles.reactions}>{data.reactions}</span>
                </div>
            <div className={styles.btnInteraction}>
                <button><i className="fa-solid fa-heart"></i></button>
                <button><i className="fa-solid fa-bookmark"></i></button>
                <button><i className="fa-solid fa-share-nodes"></i></button>
            </div>
        </div>  
    </div>
  )
}

export default Post