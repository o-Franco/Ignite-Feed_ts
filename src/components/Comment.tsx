import styles from './Comment.module.css';
import { Avatar } from './Avatar'
import { Trash, ThumbsUp } from '@phosphor-icons/react'
import { useState } from 'react';

interface CommentProps {
    content: string;
    onDeleteComment:(comment: string) => void;
}
export function Comment({content, onDeleteComment}:CommentProps){
    const [likeCount, setLikeCount] = useState(0);

    function handleLikeComment(){
        setLikeCount(likeCount + 1);
    }

    function handleDeleteComment(){

        onDeleteComment(content)
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} 
                src="https://github.com/o-Franco.png" 
                alt=""
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Gabriel Franco</strong>
                            <time title="11 de Maio as 08:13h">Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                    
                </footer>
            </div>
        </div>

    )
}