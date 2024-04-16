import styles from './Post.module.css'

export function Post(props) {
   return (
    <article className={styles.post}>
        <header>
            <div className={styles.author}>
                <img className={styles.avatar}  src="https://avatars.githubusercontent.com/u/10768462?v=4" />
                <div className={styles.authorInfo}>
                    <strong> Michelle  Pacheco </strong>
                    <span>Web Develop</span>
                </div>
            </div>

            <time dateTime='2022-05-11 10:57:10'>Publicado há 1h</time>

        </header> 
    </article>
 )
}

