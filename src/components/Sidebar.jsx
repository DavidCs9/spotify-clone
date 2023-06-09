export function Sidebar () {
  return (
    <div className='text-spotify-font-gray'>
      <button id='logo' className='flex text-white px-6 mb-6 gap-2 pt-6 text-2xl font-semibold'>
        <svg xmlns='http://www.w3.org/2000/svg' width='36' height='36' fill='currentColor' viewBox='0 0 496 512'>
          <path d='M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z' />
        </svg>
        <h1>Spotify</h1>
      </button>

      <div id='nav-1'>
        <ul>
          <li>
            <a className='flex px-6 gap-4 py-2 text-white'>
              <svg xmlns='http://www.w3.org/2000/svg' height='20' width='20' fill='currentColor' viewBox='0 0 576 512'><path d='M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z' /></svg>
              <button className=' font-medium text-sm'>Home</button>
            </a>
          </li>
          <li>
            <a className='flex px-6 gap-4 py-2'>
              <svg xmlns='http://www.w3.org/2000/svg' height='20' width='20' fill='currentColor' viewBox='0 0 512 512'><path d='M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z' /></svg>
              <button className=' font-medium text-sm'>Search</button>
            </a>
          </li>
          <li>
            <a className='flex px-6 gap-4 py-2'>
              <svg xmlns='http://www.w3.org/2000/svg' height='20' width='20' fill='currentColor' viewBox='0 0 448 512'><path d='M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z' /></svg>
              <button className=' font-medium text-sm'>Your Library</button>
            </a>
          </li>
        </ul>
      </div>

      <div id='nav-2' className=' mt-5 h-[456px]'>
        <ul>
          <li>
            <button className='flex px-6 gap-4 py-2'>
              <svg xmlns='http://www.w3.org/2000/svg' height='20' width='20' fill='currentColor' viewBox='0 0 448 512'><path d='M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM200 344V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H248v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z' /></svg>                <p className=' font-medium text-sm'>Create Playlist</p>
            </button>
          </li>
          <li>
            <button className='flex px-6 gap-4 py-2'>
              <div className=' bg-blue-600 h-5 w-5 justify-center items-center flex rounded-sm'>
                <svg xmlns='http://www.w3.org/2000/svg' height='10' width='10' fill='currentColor' viewBox='0 0 512 512'><path d='M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z' /></svg>
              </div>
              <p className=' font-medium text-sm'>Liked Songs</p>
            </button>
          </li>
        </ul>
      </div>

      <div id='nav-3' className=' my-8'>
        <ul className='flex flex-wrap text-xs px-6'>
          <li className='h-8 mr-4'>
            <button>
              Legal
            </button>
          </li>
          <li className='h-8 mr-4'>
            <button>
              Privacy Center
            </button>
          </li>
          <li className='h-8 mr-4'>
            <button>
              Privacy Policy
            </button>
          </li>
          <li className='h-8 mr-4'>
            <button>
              Cookies
            </button>
          </li>
          <li className='h-8 mr-4'>
            <button>
              About Ads
            </button>
          </li>
          <li className='h-8 mr-4'>
            <button>
              Accessibility
            </button>
          </li>
          <li className='h-8 mr-4'>
            <button>
              Cookies
            </button>
          </li>
        </ul>
      </div>

      <div id='btn English' className=' px-6'>
        <button className='hover:bg-white hover:text-black bg-black border-[1px] rounded-full border-gray-500 h-8 px-4 text-white flex justify-center items-center gap-1 font-medium'>
          <svg xmlns='http://www.w3.org/2000/svg' height='20' width='20' fill='currentColor' viewBox='0 0 512 512'><path d='M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z' /></svg>
          English
        </button>
      </div>
    </div>
  )
}
