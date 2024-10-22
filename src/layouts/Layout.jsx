import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Book App</h1>
        <p><a href="https://google.com">google</a> | reactjs developer</p>
      </header>
      {children}
      <footer className={styles.footer}><p>Developed by bakhtiarmahmoodi</p></footer>
    </>
  );
}

export default Layout;
