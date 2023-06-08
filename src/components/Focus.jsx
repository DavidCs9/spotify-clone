import { Card } from './Card'
import { infoFocus } from '../cardsinfo'

export function Focus () {
  return (
    <div className='p-6'>
      <h2 className='text-white text-3xl font-semmibold mb-6'>Focus</h2>
      <div className='flex justify-between flex-wrap'>
        {infoFocus.map((entry, index) => (
          <Card key={index} {...entry} />
        ))}
      </div>
    </div>
  )
}
