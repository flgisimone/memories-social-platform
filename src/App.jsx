import styles from './App.module.scss';
import StoriesList from './components/StoriesList/StoriesList';
import NewPost from './components/NewPost/NewPost';

function App() {
  return (
    <div className={styles.App}>
      <section className={styles.containerStoriesList}>
        <StoriesList />
      </section>

      <section className={styles.main}>
        <div className={styles.leftBar}>
          <NewPost />
        </div>

        <div className={styles.body}>
          
        </div>

        <div className={styles.rightBar}>
          
        </div>
      </section>

    </div>
  );
}

export default App;
