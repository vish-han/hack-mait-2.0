import React from 'react'
import landingimage from '../assets/landingimage2.png'
import MovingText from 'react-moving-text'
const Hero = () => {
  return (
    <div className='hero-section flex w-full justify-around'>
        <div className='hero-image w-[60%]'>
        <img src={landingimage} alt="" className='' />
        </div>
        <div className='text-part text-white flex flex-col justify-evenly  font-semibold'>
                <div className="headline text-6xl">The only <span className='headline font-bold text-6xl text-fuchsia-500'>NFT Platform</span> where u can <span className='running-text'>
                
                    </span></div>
                <div className="subheadline text-m font-normal">
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad sit repellat velit inventore, deserunt natus quod maxime nisi in dicta.
                </div>
                <div className="try-button  bg-fuchsia-500 text-2xl font-bold text-center w-[200px] mx-auto p-2 rounded-2xl hover:bg-fuchsia-400 hover:cursor-pointer text-black">    
                Try for FREE!!
                </div>
        </div>
        
    </div>

    )
}

export default Hero