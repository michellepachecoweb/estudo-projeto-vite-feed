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

            <time title="11 de maio de 2024'" dateTime='2024-05-11 10:57:10'>Publicado há 1h</time>

        </header> 
        <div className={styles.content}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <p>Ad dolorem omnis nesciunt, soluta consectetur cumque tenetur facilis. </p>
            <p>Delectus modi ducimus aperiam? Odio laboriosam aliquid, nostrum officia officiis inventore? Accusantium, eveniet?</p>
            <a href='#'> {''} #teste</a>
        </div>
    </article>
 )
}

