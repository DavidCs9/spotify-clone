export function Preview () {
  return (
    <footer id='preview' className='fixed bottom-0 left-0 right-0 flex justify-between px-6 py-3'>
      <div className='text-white'>
        <h3 className='text-sm font-light'>PREVIEW OF SPOTIFY</h3>
        <p className=' text-base font-semibold text-preview'>Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</p>
      </div>
      <button className=' text-preview bg-slate-200 hover:bg-black hover:text-white text-gray-950 px-7 py-2 rounded-full font-bold shadow-md '>Sign up free</button>
    </footer>
  )
}
