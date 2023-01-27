import React from 'react'
import {useState, useEffect} from "react"
import {GET} from "../../utils/fetch"
import TrendPost from '../TrendPost/TrendPost'
import styles from "./TrendPostList.module.scss"

const TrendPostList = () => {

    const [trendPostList, setTrendPostList] = useState([])

    useEffect(() => {
        GET("posts").then(({posts}) => setTrendPostList(posts))
    }, [])

    return (
        <div className={styles.TrendPostList}>
            {trendPostList.filter((trendPL) => trendPL.reactions > 5 ).map(post => <TrendPost data={post} />)}
        </div>
      )
}

export default TrendPostList