import React from 'react'

const Navbar = () => {
  return (
    <div className=' flex flex-row  w-full py-4 text-fuchsia-500 font-bold text-xl justify-evenly items-center'>
                <div className='w-[20%]'>
                <h1 className='hover:text-fuchsia-400 hover:cursor-pointer'>NAME</h1>
                </div>
                <div className='nav-list w-[50%]'>
                <ul className='flex'>
                  <li className='hover:text-fuchsia-400 hover:cursor-pointer mx-14'>About Us</li>
                  <li className='hover:text-fuchsia-400 hover:cursor-pointer mx-14'>Marketplace</li>
                <li className='hover:text-fuchsia-400 hover:cursor-pointer mx-14'>Create</li>
                </ul>
                </div>
                  <div className='connect-button bg-fuchsia-500 text-2xl flex text-black rounded-xl h-[40px]  p-2 text-center hover:bg-fuchsia-400 hover:cursor-pointer font-bold justify-center items-center'>Connect Wallet</div>
                
    </div>
  )
}

export default Navbar