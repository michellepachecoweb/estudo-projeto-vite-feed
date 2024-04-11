import './App.css'
import { Header } from './components/Header'
import { Post } from './components/Post'
import './styles.css'

export function App() {

  return ( 
    <div> 
      <Header />
      <Post 
        author="Michelle Pacheco" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae laudantium libero blanditiis nobis maiores veniam, necessitatibus suscipit exercitationem molestiae. Delectus natus cumque minus deleniti sequi voluptas magnam accusamus officia enim!"
      />
      <Post 
        author="Dolores Fernandes da Silva" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
      </div>
  )
}
 
