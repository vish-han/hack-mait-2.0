import React from 'react'
import landingimage from '../assets/landingimage2.png'
import MovingText from 'react-moving-text'
const Hero = () => {
  return (
    <div className='hero-section flex w-full '>
        <img src={landingimage} alt="" className='w-[60%] h-[82vh]' />
        <div className='text-part text-white w-[40%] flex flex-col border-red-600 border-x-4 border-y-8 justify-evenly  font-semibold'>
                <div className="headline text-5xl">The only <span className='headline font-bold text-5xl text-[#FB2576]'>NFT Platform</span> where u can <span className='running-text'>
                
                    </span></div>
                <div className="subheadline">
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad sit repellat velit inventore, deserunt natus quod maxime nisi in dicta.

                </div>
                <div className="try-button">
Try for FREE!!
                </div>
        </div>
        
    </div>

    )
}

export default Hero