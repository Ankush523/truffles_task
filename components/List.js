import Image from 'next/image'
import React from 'react'
import {data} from '../components/data'
import red from '../images/red1.svg';
import green from '../images/green1.svg';
const List = () => {
  return (
    <div>
        {data.map((person) => {
            const{id,name,tfid,image,payment} = person
            return (
                <article key={id} className='flex flex-row mx-[23px]'>
                    {
                        (id == 1 ||  id == 4) ? <Image src={red} alt={name} className='mt-[19px] h-[40px] w-[40px] rounded-full'/> : <Image src={green} alt={name} className='mt-[19px] h-[40px] w-[40px] rounded-full'/>
                    }
                    <div className='flex flex-col ml-[15px] w-[155px] mt-[15px]'>
                        <p className='text-black1'>{name}</p>
                        <p className='text-left text-black1 text-xs'>TFID: {tfid}</p>
                    </div>
                    <p className='text-black1 ml-[47px] w-[84px] h-[32px] text-sm mt-[15px] py-[8px]'>{payment}</p>
                </article>
            )
        })}
    </div>
  )
}

export default List