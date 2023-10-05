/* eslint-disable react/prop-types */
import { BsStarFill } from 'react-icons/bs';
import { BsStarHalf } from 'react-icons/bs';
import { BsStar } from 'react-icons/bs';

import { useState } from "react";

export default function Course({image, topic, heading, star, price}) {
    const [toggleButton, setToggleButton] = useState(false);

    return(
        <div className="snap-start shrink-0 flex flex-col gap-y-[10px] items-center w-[236px] p-[15px]" onMouseOver={()=>setToggleButton(true)} onMouseLeave={()=>setToggleButton(false)}>
            <img src={image} className="w-[206px] h-[150px] rounded-[8px]" />
            <div className=" flex flex-col text-center w-[166px] items-center h-full gap-y-[10px] justify-between">
                <div className='flex flex-col text-center w-[166px] items-center gap-y-[10px]'>
                    <p className="text-[13px] font-[400] text-[#4d5e6f] leading-[16px]">{topic}</p>
                    <h4 className="text-[#001931] text-[15px] font-[500] leading-[18px]">{heading}</h4>
                </div>

                <div className='flex flex-col text-center w-[166px] items-center gap-y-[10px] '>
                    <div className='flex gap-x-[5px] my-[5px]'>
                        <div className='flex'>
                            {
                                (star.split('.')[0] != '0') &&
                                [ ...Array(Number(star.split('.')[0]))].map((e, i) => <BsStarFill className='text-[16px] text-[#ffa800]' key={i} />)
                            }
                            {(star.split('.')[1] == '5') && <BsStarHalf className='text-[16px] text-[#ffa800]' />}
                            {   
                                (star.split('.')[0] != '5') &&
                                [ ...Array(5-Math.ceil(Number(star)))].map((e, i) => <BsStar className='text-[16px] text-[#ffa800]' key={i} />)
                            }
                        </div>
                        <p className="text-[14px] text-[#4d5e6f] font-[400] leading-[18px]">{star}</p>
                    </div>
                    <div className="border-b-[1px] border-[#dbe0e9] h-0 w-[166px]" />
                    {
                        (toggleButton) ?
                            <button className="h-[54px] w-[166px] text-white text-[14px] flex items-center justify-center bg-[#205EC8] rounded-[5px] hover:bg-[#227aff]" >Preview this course</button>
                        :
                            <p className="text-[#205EC8] h-[54px] w-[166px] text-[15px] flex items-center justify-center font-[700]">{price}</p>
                    }
                </div>
            </div>
        </div>
    );
}