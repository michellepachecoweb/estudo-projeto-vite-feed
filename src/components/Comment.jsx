import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment() {

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false}  src="https://github.com/diego3g.png" />
            <div className={styles.commentBox}> 
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Michelle Pacheco</strong>
                            <time title="11 de maio de 2024'" dateTime='2024-05-11 10:57:10'>Cerca de 1h atrás</time>
                        </div>
                        <button title='Deletar'>
                            <Trash size={20}/>
                        </button>
                    </header>
                    <p>Muito bom meu querido!!!!</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp/> 
                        Aplaudir <span>20</span>
                    </button>                
                </footer>
            </div>
        </div>
    )
}