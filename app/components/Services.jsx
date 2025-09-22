import { serviceData} from '@/assets/assets'

import Image from 'next/image'
import React from 'react'



const Services = () => {
  return (

    <div id='services' className='w-full px-[12%] py-20 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg font-Ovo'>Introduction</h4>
        <h2 className='text-center text-5xl font-Ovo'>My Services</h2>
        <h3 className=' mt-8 text-center sm-3 text-sm w-100 font-Ovo'> Here you can find all the services i provide, Here you can find all the services i provide, Here you can find all the services i provide</h3>


        <div className="flex items-center justify-center mt-12">
                
                <ul className="grid grid-cols-1 lg:grid-cols-4 gap-6 max-w-6xl">
                    {serviceData.map(({ icon, title, link, description }, index) => (
                        <li
                        key={index}
                        className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer 
                                    hover:bg-lightHover transform hover:-translate-y-1 transition duration-500 hover:shadow-black"
                        >

                        <Image src={icon} alt={title} className="w-7 mt-3" />

                        <h3 className="my-4 font-semibold text-gray-700">{title}</h3>

                        <p className="text-gray-600 text-sm">{description}</p>
                        <p className="text-gray-600 text-sm">{link}</p>
                    </li>
                ))}
                </ul>


                {/* little icons  */}
                {/* <h4 className='my-6 text-gray-700 font-Ovo'>Tools I use</h4>

                <ul className='flex items-center gap-3 sm:gap-5'>
                    {toolsData.map((tool, index)=>(
                        <li key={index} className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 transition duration-500 hover:shadow-black"'>
                            <Image src={tool} alt='Tool' className='w-5 sm:w-7'/>

                        </li>
                    ))}
                </ul> */}
            </div>

    </div>

  )
}

export default Services