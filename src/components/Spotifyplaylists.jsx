import { useState, useEffect } from 'react'
import { Card } from './Card'
import { infoSpotifyPlaylists } from '../cardsinfo'

export function Spotifyplaylists () {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1600) // Ajusta el ancho máximo según tus necesidades
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className='p-6'>
      <div className='flex justify-between mb-6'>
        <h2 className='text-white text-2xl font-bold '>Spotify playlists</h2>
        <h2 className=' text-spotify-font-gray font-semibold text-sm hover:underline cursor-pointer'>Show all</h2>
      </div>
      <div className='flex justify-between flex-wrap playlist'>
        <Card {...infoSpotifyPlaylists[0]} />
        <Card {...infoSpotifyPlaylists[1]} />
        <Card {...infoSpotifyPlaylists[2]} />
        <Card {...infoSpotifyPlaylists[3]} />
        {!isMobile && <Card {...infoSpotifyPlaylists[4]} />}
        {!isMobile && <Card {...infoSpotifyPlaylists[5]} />}
        <Card {...infoSpotifyPlaylists[6]} />
      </div>
    </div>
  )
}
