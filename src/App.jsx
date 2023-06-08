import { Nav } from './components/Nav'
import { Sidebar } from './components/Sidebar'
import { Preview } from './components/Preview'
import { Focus } from './components/Focus'

export default function App () {
  return (
    <div className='flex'>

      <Sidebar />
      <div id='main' className='w-full bg-spotify-bg '>
        <Nav />
        <div id='playlist'>
          <Focus />
        </div>
      </div>
      <Preview />
    </div>
  )
}
