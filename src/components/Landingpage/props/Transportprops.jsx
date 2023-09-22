import React from 'react'
import Image from 'next/image'

const Transportprops = ({image, heading, paragraph, image2, image3, image4, paragraph2, paragraph3, paragraph4, heading2, heading3, heading4}) => {
  return (
    <div className='lg:px-[10%] gap-4 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1'>
        <div className='flex flex-col gap-5'>
            <Image width={350} height={350} src={image} />
            <h1 className='text-2xl font-bold'>{heading}</h1>
            <p>{paragraph}</p>
        </div>
        <div className='flex flex-col gap-5'>
            <Image width={350} height={350} src={image2} />
            <h1 className='text-2xl font-bold'>{heading2}</h1>
            <p>{paragraph2}</p>
        </div>
        <div className='flex flex-col gap-5'>
            <Image width={350} height={350} src={image3} />
            <h1 className='text-2xl font-bold'>{heading3}</h1>
            <p>{paragraph3}</p>
        </div>
        <div className='flex flex-col gap-5'>
            <Image width={350} height={350} src={image4} />
            <h1 className='text-2xl font-bold'>{heading4}</h1>
            <p>{paragraph4}</p>
        </div>
    </div>
  )
}

export default Transportprops