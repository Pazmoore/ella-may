import React from 'react'
import { TiThMenuOutline } from "react-icons/ti";
import { PiShoppingBagDuotone } from "react-icons/pi";
import { AiTwotoneHome } from "react-icons/ai";
import { TiHeart } from "react-icons/ti";
import { LiaAppStoreIos } from "react-icons/lia";

const MobNavbar = () => {
  return (
    <div className='lg:hidden fixed bottom-0 w-full bg-black left-[50%] -translate-x-[50%] max-w-[500px] mob_navbar px-8'>
        <div className="flex justify-between text-[28px] py-2">
            <TiThMenuOutline />
            <div className="relative">
                <PiShoppingBagDuotone />
                <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-black grid place-items-center translate-x-1 translate-y-1">
                    0
                </div>
            </div>
            <AiTwotoneHome />

            <div className="relative">
                <TiHeart />
                <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-black grid place-items-center translate-x-1 translate-y-1">
                 0
                </div>
            </div>
            <LiaAppStoreIos />
        </div>
    </div>
  )
}

export default MobNavbar