import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {

    return (
        <div className={styles.comment}>
            <img 
                className={styles.avatar} 
                src="https://avatars.githubusercontent.com/u/10768462?v=4" 
            />
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