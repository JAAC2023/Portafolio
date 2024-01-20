import './App.css'
import video from '../../material/fondo2.mp4'
import Presentation from './components/Presentation'

function App() {

  return (
    <div className='app'>
        <video autoPlay loop muted className= "video-fondo">
        <source src={video} type="video/mp4" />
      </video>
    </div>
  )
}

export default App
