import React from 'react'
import Image from 'next/image'
import { ImQuotesLeft } from "react-icons/im";

const Testimonial = () => {
  return (
    <div>
        <div className="container pt-16 pb-16 grid-cols-2">
            <h2 className='font-medium text-2xl pb-4' > Testimonials</h2>
            <div className="grid lg:grid-cols-[300px,1fr] gap-4">
              <div className="border border-gray-300 rounded-2xl grid place-items-center p-6 lg:p-0">
                <Image
                className='rounded-full inline-block'
                src='/14.jpg'
                width={80}
                height={80}
                alt='dp' 
                />
                <h2 className='text-gray-500 font-black text-[20px]'>Elsa Ella</h2>
                <p>CEO & Founder Invision</p>
                <ImQuotesLeft />
                {/* <Image
                className='inline-block py-2'
                src={<ImQuotesLeft />}
                width={30}
                height={30}
                alt='quotes'
                /> */}
                <p className='max-w-[200px] text-gray-500'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, dignissimos fuga eum ea quod blanditiis.
                </p>
              </div>

              <div className="bg-red-600 bg-[url(/15.jpg)] bg-cover h-[500px] rounded-2xl grid place-items-center">
              <div className="bg-[#fff] min-w-[270px] sm:min-w-[300px] md:min-w-[500px] rounded-xl py-8 sm:px-8 px-2 grid place-items-center gap-3">
                <button className='bg-black text-white p-2 rounded-md'>
                  2% DISCOUNT
                </button>
                <h2 className='font-extrabold text-2xl text-[#272727]'>Summer Collection</h2>
                <p className='text-gray-500 text-[20px] '>Starting @ $20 <b>Shop Now</b> </p>
              </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial