import React, { useState, useEffect } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import { GET_DUMMYJSON } from '../../utils/fetch'
import Friend from "../Friend/Friend"
import styles from "./FriendList.module.scss"

const FriendList = () => {

      const [friendsList, setFriendsList] = useState([])
      const [filterState, setFilterState] = useState("")

      useEffect(() => {
        GET_DUMMYJSON("users").then((data) => setFriendsList(data.users));
    }, [])
    
  return (
    <div className={styles.FriendList}>
        <h2 className={styles.textFriendList}>Cerca i tuoi amici</h2>
        <SearchBar setFilterState={setFilterState}/>
        <div className={styles.containerFiendlist}>
        {
        friendsList.filter((friend) => friend.firstName.toLowerCase().includes(filterState.toLowerCase()))
        .map((friend) => (
            <Friend
              data={friend}
              key={friend.id}
            />
          ))
        }
      </div>
    </div>
  )
}

export default FriendList