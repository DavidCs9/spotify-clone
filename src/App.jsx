import { Nav } from './components/Nav'
import { Sidebar } from './components/Sidebar'
import { Preview } from './components/Preview'
import { Focus } from './components/Focus'
import { Spotifyplaylists } from './components/Spotifyplaylists'
import { Footer } from './components/Footer'

export default function App () {
  return (
    <div className='flex'>
      <div id='sidebar' className='w-1/6 fixed h-screen bg-black'>
        <Sidebar />
      </div>
      <div id='main' className='w-5/6 ml-auto bg-spotify-bg'>
        <header className='fixed top-0 right-0 w-5/6'>
          <Nav />
        </header>
        <main id='playlist' className='mt-16'>
          <Focus />
          <Spotifyplaylists />
          <Footer />
          <div className='pb-60 px-8 py-8'>
            <p className=' text-spotify-font-gray'>© 2023 Spotify AB</p>
          </div>
        </main>
      </div>
      <Preview />
    </div>
  )
}
