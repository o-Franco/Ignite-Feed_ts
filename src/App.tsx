import './global.css'
import { Header } from './components/Header'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar'
import {Post, PostType} from './components/Post'


const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/o-Franco.png',
      name: 'Gabriel Franco',
      role: 'Dev Front-End'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋',},
      {type : 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type : 'paragraph', content: 'jane.design/doctorcare'}, 
    ],
    publishedAt: new Date('2024-03-20 23:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @ Rocketseat'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋',},
      {type : 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type : 'paragraph', content: 'jane.design/doctorcare'}, 
    ],
    publishedAt: new Date('2024-03-10 23:00:00')
  }
];



export function App() {
  return (
    <div>
      <Header/>


      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            )
          })}
        </main>

      </div>
    </div>
  )
}