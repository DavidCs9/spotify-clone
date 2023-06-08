export function Card ({ img, title, description, ...props }) {
  return (
    <div className=' text-white bg-black bg-opacity-40 w-[200px] p-2 pb-5 rounded-lg flex flex-col justify-center'>
      <img src={img} alt='piano' className='rounded-lg' />
      <div className='flex flex-col gap-1 mt-2'>
        <h4 className='font-semibold text-md'>
          {title}
        </h4>
        <p className=' text-xs text-spotify-font-gray'>
          {description}
        </p>
      </div>
    </div>
  )
}
