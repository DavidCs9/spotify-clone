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
      <h2 className='text-white text-3xl font-semmibold mb-6'>Focus</h2>
      <div className='flex justify-between flex-wrap'>
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
