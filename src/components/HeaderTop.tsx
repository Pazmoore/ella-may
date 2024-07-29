import React from 'react'
import { LiaFacebookMessenger, LiaSnapchatGhost } from "react-icons/lia";
import { TfiInstagram } from "react-icons/tfi";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";


const HeaderTop = () => {
  return (
    <div className='border-b gray 200 hidden sm:block'>
        <div className="container py-4">
            <div className="flex justify-between items-center">
                <div className="hidden lg:flex gap-1">
                    <div className="header_top_icon_wapper">
                    <LiaFacebookMessenger />
                    </div>
                    <div className="header_top_icon_wapper">
                    <TfiInstagram />
                    </div>
                    <div className="header_top_icon_wapper">
                    <RiTwitterXFill />
                    </div>
                    <div className="header_top_icon_wapper">
                    <FaLinkedinIn />
                    </div>
                    <div className="header_top_icon_wapper">
                    <LiaSnapchatGhost />
                    </div>
                </div>

                <div className="text-gray-500 text-[12px]">
                    <b>FREE SHIPPING</b> THIS WEEK ORDER OVER - $55
                </div>

                <div className="flex gap-4">
                    <select 
                    className='text-gray-500 text-[12px] w-[70px]' 
                    name="currency" 
                    id="currency">
                        <option value="USD">USD $</option>
                        <option value="EUR">EUR </option>
                        <option value="NAIRA"> NAIRA #</option>
                    </select>

                    <select 
                    className='text-gray-500 text-[12px] w-[80px]' 
                    name="language" 
                    id="language">
                        <option value="English">English</option>
                        <option value="French">French</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeaderTop