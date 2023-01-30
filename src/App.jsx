import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import StoriesList from './components/StoriesList/StoriesList';
import MQSuggestFriendList from './components/MQSuggestFriendList/MQSuggestFriendList';
import NewPost from './components/NewPost/NewPost';
import TrendPostList from './components/TrendPostList/TrendPostList';
import PostList from './components/PostList/PostList';
import SuggestFriendList from './components/SuggestFriendList/SuggestFriendList';
import FriendList from './components/FriendList/FriendList';
import Login from './components/Login/Login';
import Account from './components/Account/Account';
import MQNavBar from './components/MQNavBar/MQNavBar';
import ModalTrendPost from './components/ModalTrendPost/ModalTrendPost';
import ModalNewPost from './components/ModalNewPost/ModalNewPost';
import ModalFriendList from './components/ModalFriendList/ModalFriendList';
import ModalSuggestFriend from './components/ModalSuggestFriend/ModalSuggestFriend';
import Footer from './components/Footer/Footer';
import styles from './App.module.scss';

// <FriendList />

function App() {

  const [user, setUser] = useState();
  const [openModalNewPost, setOpenModalNewPost] = useState(false)
  const [openModalTrendPost, setOpenModalTrendPost] = useState(false)
  const [openModalFriendList, setOpenModalFriendList] = useState(false)
  const [openModalSuggestFriend, setOpenModalSuggestFriend] = useState(false)

  useEffect(() => {
    if (localStorage.getItem("username")) {
      setUser(JSON.parse(localStorage.getItem("username")).username);
    }
  }, []);

  return user ? (
    <div className={styles.App}>

      <section className={styles.containerHeader}>
        <Header />
      </section>
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

      <section className={styles.containerMQNavBar}>
        <MQNavBar
        openModalTrendPost={openModalTrendPost} 
        setOpenModalTrendPost={setOpenModalTrendPost} 
        openModalNewPost={openModalNewPost} 
        setOpenModalNewPost={setOpenModalNewPost}
        openModalFriendList={openModalFriendList} 
        setOpenModalFriendList={setOpenModalFriendList}
        openModalSuggestFriend={openModalSuggestFriend} 
        setOpenModalSuggestFriend={setOpenModalSuggestFriend}
        />
      </section>
      
      {openModalNewPost && <ModalNewPost openModalNewPost={openModalNewPost} setOpenModalNewPost={setOpenModalNewPost}/>}
      {openModalTrendPost && <ModalTrendPost openModalTrendPost={openModalTrendPost} setOpenModalTrendPost={setOpenModalTrendPost}/>}
      {openModalFriendList && <ModalFriendList openModalFriendList={openModalFriendList} setOpenModalFriendList={setOpenModalFriendList}/>}
      {openModalSuggestFriend && <ModalSuggestFriend openModalSuggestFriend={openModalSuggestFriend} setOpenModalSuggestFriend={setOpenModalSuggestFriend}/>}
      
    </div>) : (<>
      <Login />
    </>)
}

export default App;
