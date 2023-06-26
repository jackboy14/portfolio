import React from "react";
import Me from "../assets/moi.svg";

const Image = () => {
    return (
        <div name='Image' className='block lg:hidden w-full h-[380px] md:h-screen  bg-[#273347]'>
            <div className='moi  flex-col lg:hidden justify-center items-center'>
                <img className='block sm:hidden' src={Me} alt='jackboy-digital-craft' style={{width: "380px"}}/>
            </div>
        </div>
    )
}
export default Image