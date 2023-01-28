import { useState, useEffect } from 'react';
import StoriesList from './components/StoriesList/StoriesList';
import NewPost from './components/NewPost/NewPost';
import TrendPostList from './components/TrendPostList/TrendPostList';
import PostList from './components/PostList/PostList';
import SuggestFriendList from './components/SuggestFriendList/SuggestFriendList';
import FriendList from './components/FriendList/FriendList';
import Login from './components/Login/Login';
import Account from './components/Account/Account';
import Footer from './components/Footer/Footer';
import styles from './App.module.scss';

// <FriendList />

function App() {

  const [user, setUser] = useState();

  useEffect(() => {
    if (localStorage.getItem("username")) {
      setUser(JSON.parse(localStorage.getItem("username")).username);
    }
  }, []);

  return user ? (
    <div className={styles.App}>
      <section className={styles.containerStoriesList}>
        <StoriesList />
      </section>

      <section className={styles.main}>
        <div className={styles.leftBar}>
          <h1 className={styles.nameSocial}>Memories - Share Your Moment</h1>
          <NewPost />
          <TrendPostList />
        </div>

        <div className={styles.body}>
          <PostList />
        </div>

        <div className={styles.rightBar}>
          <Account />
          <FriendList />
          <SuggestFriendList />
          <Footer />
        </div>
      </section>

    </div>) : (<>
      <Login />
    </>)
}

export default App;
