import styles from './App.module.scss';
import StoriesList from './components/StoriesList/StoriesList';
import NewPost from './components/NewPost/NewPost';
import TrendPostList from './components/TrendPostList/TrendPostList';
import PostList from './components/PostList/PostList';

function App() {
  return (
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
          
        </div>
      </section>

    </div>
  );
}

export default App;
