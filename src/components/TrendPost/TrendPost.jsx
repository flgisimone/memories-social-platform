import React from 'react'
import { useState, useEffect } from 'react'
import { get } from 'lodash'
import {GET_DUMMYJSON, GET_RANDOMUSER} from "../../utils/fetch"
import styles from "./TrendPost.module.scss"

const TrendPost = ({data}) => {

    const imgUrl = "https://picsum.photos/300/300?"

    const [user, setUser] = useState({})
    const [img, setImg] = useState({})

    useEffect(() => {
        GET_DUMMYJSON(`users/${data.userId}`).then(user => setUser(user))
    }, [])

    useEffect(() => {
        GET_RANDOMUSER(`api`).then(img => setImg(img)) 
    }, [])
    
  return (
    <div className={styles.TrendPost}>
        <div className={styles.infoPrimaryTrend}>
            <img src={get(img, 'results[0].picture.large')} alt="" className={styles.userImageTrend}/>
            <div className={styles.namingUserTrend}>
                <h5 className={styles.usernameTrend}>@{user.username}</h5>
                <span className={styles.titleTrend}>{data.title}</span>
            </div>
        </div>
        <div className={styles.contentPostTrend}>
            <img src={imgUrl + data.id} alt="" className={styles.imgPostTrend}/>
            <div className={styles.interactionTrend}>
                <div className={styles.hashtagContainerTrend}>
                    {data.tags.map((tag, index) => (
                        <span key={index} className={styles.hashtagTrend}>#{tag} </span>
                    ))}
                    <div className={styles.interactionContainerTrend}>
                        <i className="fa-solid fa-heart"></i>
                        <span className={styles.reactionsTrend}>{data.reactions}</span>
                    </div>
                </div>
                <div className={styles.btnInteractionTrend}>
                    <button><i className="fa-solid fa-heart"></i></button>
                    <button><i className="fa-solid fa-bookmark"></i></button>
                    <button><i className="fa-solid fa-share-nodes"></i></button>
                </div>
            </div>  
        </div>

    </div>
  )
}

export default TrendPost