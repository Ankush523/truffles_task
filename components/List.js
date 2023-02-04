import Image from 'next/image'
import React from 'react'
import {data} from '../components/data'

const List = () => {
  return (
    <div>
        {data.map((person) => {
            const{id,name,tfid,image,payment} = person
            return (
                <article key={id} className='flex flex-row mx-[23px]'>
                    <Image src={image} alt={name} className='w-[60px] h-[60px] rounded-full'/>
                    <div className='flex flex-col ml-[15px] w-[155px] mt-[15px]'>
                        <p className='text-black1'>{name}</p>
                        <p className='text-left text-black1 text-xs'>TFID: {tfid}</p>
                    </div>
                    <p className='text-black1 ml-[17px] w-[84px] h-[32px] text-sm mt-[15px] py-[8px]'>{payment}</p>
                </article>
            )
        })}
    </div>
  )
}

export default List