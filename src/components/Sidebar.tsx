import { PencilLine } from '@phosphor-icons/react'
import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1561883088-039e53143d73?q=40&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Foto de capa do usuario" />

            <div className={styles.profile}>
                <Avatar src="https://github.com/o-Franco.png"/>


                <strong>Gabriel Franco</strong>
                <span>Dev Front-End</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size='20'/>
                    Editar seu perfil
                </a>
            </footer>

        </aside>
    );

}

