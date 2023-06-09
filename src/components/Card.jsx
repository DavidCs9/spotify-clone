export function Card ({ img, title, description, ...props }) {
  return (
    <button className=' text-white bg-cards-bg w-[200px] p-2 pb-5 rounded-sm flex flex-col justify-center hover:bg-opacity-40'>
      <img src={img} alt='piano' className='rounded-lg' />
      <div className='flex flex-col gap-1 mt-2'>
        <h4 className='font-semibold text-md'>
          {title}
        </h4>
        <p className=' text-xs text-spotify-font-gray'>
          {description}
        </p>
      </div>
    </button>
  )
}
