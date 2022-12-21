import React from 'react'

const Navbar = () => {
  return (
    <div className='h-[120px] flex flex-row  w-full py-4 text-[#FB2576] font-bold text-xl justify-evenly'>
                <div className='w-[20%]'>
                <h1 className='hover:text-white hover:cursor-pointer'>NAME</h1>
                </div>
                <div className='nav-list w-[50%]'>
                <ul className='flex'>
                  <li className='hover:text-white hover:cursor-pointer mx-14'>About Us</li>
                  <li className='hover:text-white hover:cursor-pointer mx-14'>Marketplace</li>
                <li className='hover:text-white hover:cursor-pointer mx-14'>Create</li>
                </ul>
                </div>
                  <div className='connect-button bg-[#3F0071] text-2xl rounded-xl h-[40px] p-2 text-center hover:text-white hover:cursor-pointer font-bold'>Connect Wallet</div>
                
    </div>
  )
}

export default Navbar