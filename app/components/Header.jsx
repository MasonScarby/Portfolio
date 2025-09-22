import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='w-11/12 max-w-3x1 text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
        <div>
            <Image src={assets.headshot} alt='' className='rounded-full w-32' />
            
        </div>

            <h3 className='flex items-end gap-2 text-xl md:text-2x1 mb-3 font-Ovo'> 
                    Hi Im Mason Scarborough <Image src={assets.hand_icon} alt='' className=' w-6' />
            </h3>
            
            <h1 className='text- 3x1 sm:text-6x1 lg:text-[66px] font-Ovo'>
                Full Stack Developer in Lacaster, PA
            </h1>

            <p className="max-2-2x1 mx-auto font-Ovo"> 
                hi i am a full stack devloper who enjoys learning new languages and challenging himself
            </p>

        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <a href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'> 
            Contact Me <Image src={assets.right_arrow_white} alt='' className='w-4' /></a>

            <a href="/Resume_MasonScarborough.pdf" download="Resume_MasonScarborough.pdf" className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'> 
            My Resume <Image src={assets.download_icon} alt='' className='w-4' /></a>
        </div>
    </div>
  )
}

export default Header