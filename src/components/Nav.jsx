export function Nav () {
  return (
    <nav id='nav' className='bg-black bg-opacity-90 flex items-center justify-between h-16 px-6'>
      <div id='leftbar' className=' text-spotify-font-gray  flex justify-between w-28 px-6'>
        <button className='hover:text-white'>
          <svg xmlns='http://www.w3.org/2000/svg' height='20' width='20' fill='currentColor' viewBox='0 0 320 512'><path d='M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z' /></svg>
        </button>
        <button className='hover:text-white'>
          <svg xmlns='http://www.w3.org/2000/svg' height='20' width='20' fill='currentColor' viewBox='0 0 320 512'><path d='M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z' /></svg>
        </button>
      </div>
      <div id='rightbar' className='text-white flex gap-6 font-semibold'>
        <button className=' text-slate-200 hover:text-white'>Sign up</button>
        <button className=' bg-slate-200 hover:bg-white text-gray-950 px-7 py-2 rounded-full'>Log in</button>
      </div>
    </nav>
  )
}
