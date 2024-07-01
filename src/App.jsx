import './App.css'
import { DATA } from './constants/items'
import { Stream } from './components/Stream'

function App() {

  return (
    <main className='container'>
        <div>
          <h1 className='title'>Estrenos</h1>
        </div>
        {Object.entries(DATA).map(
          (item, key) => {
            console.log({item, key})
            return (
              <Stream key={item[0]} name={item[0]} info={item[1]}/>
            )
          }
        )}
    </main>
  )
}

export default App
