import './App.css'
import Fire from './assets/fire.jpg'
import Star from './assets/glowingstar.png'
import Party from './assets/partyface.jpg'
import MovieList from './component/MovieList/MovieList'
import Navbar from './component/Navbar/Navbar'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>

      <MovieList type="popular" title="Popular" emoji={Fire}/>
      <MovieList type="top_rated" title="Top Rated" emoji={Star}/>
      <MovieList type="upcoming" title="Upcoming" emoji={Party}/>
    </div>
  )
}

export default App