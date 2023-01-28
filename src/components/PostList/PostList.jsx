import {useState, useEffect} from "react"
import React from 'react'
import {GET_DUMMYJSON} from "../../utils/fetch"
import Post from '../Post/Post'
import styles from "./PostList.module.scss"

const PostList = () => {

    const [postList, setPostList] = useState([])

    useEffect(() => {
      GET_DUMMYJSON("posts").then(({posts}) => setPostList(posts))
    }, [])

  return (
    <div className={styles.PostList}>
        {postList.map(post => <Post data={post} />)}
    </div>
  )
}

export default PostList