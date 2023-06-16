import { useState, useEffect } from 'react'
import { Card } from './Card'
import { infoFocus } from '../cardsinfo'

export function Focus () {
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
        <h2 className='text-white text-2xl font-bold '>Focus</h2>
        <h2 className=' text-spotify-font-gray font-semibold text-sm hover:underline cursor-pointer'>Show all</h2>
      </div>
      <div className='flex justify-between flex-wrap playlist'>
        <Card {...infoFocus[0]} />
        <Card {...infoFocus[1]} />
        <Card {...infoFocus[2]} />
        <Card {...infoFocus[3]} />
        {!isMobile && <Card {...infoFocus[4]} />}
        {!isMobile && <Card {...infoFocus[5]} />}
        <Card {...infoFocus[6]} />
      </div>
    </div>
  )
}
