import React from 'react'
import { TbArrowLeft, TbArrowRight } from 'react-icons/tb'

const Gallery = () => {
    return (
        <div>
            <div>
                <p>Gallery</p>
                <div>
                    <p className='p-4 rounded-full bg-[grey] text-black'><TbArrowLeft /></p>
                    <p className='p-4 rounded-full bg-[orange] text-white' ><TbArrowRight /></p>
                </div>
            </div>
            <div>
                <Image></Image>
                <div>
                    <div></div>
                </div>
            </div>

        </div>
    )
}

export default Gallery