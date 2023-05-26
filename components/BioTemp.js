import React from 'react'
import Image from 'next/image'

const BioTemp = ({bio,border,company,website,mobile,text1,text2}) => {
  return (
    <div className={`${border} rounded-[10px] p-2`}>
         <div className={`text-[12px] ${text2} `}>Bio</div>
        <div className='mt-3 text-[12px]'>
        <textarea className={`bg-transparent w-full resize-none ${text1}`}
          placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis eleifend arcu in fringilla. " 
           value={bio}
        //   onChange={handleChange}
        />
        </div>
        <div className="mt-[26px] grid grid-cols-2 gap-y-3">
<div className='flex'>
    <Image src={'/log.png'} alt='log' width={27} height={22} /><p className='text-[10px] ml-1.5 tracking-[-0.5px] '> 
    <input className={`bg-transparent ${text2}`}
          type="text" 
          placeholder="company Name" 
           value={company}
        //   onChange={handleChange}
        /></p>
</div>
<div className='flex ml-[40px] '>
    <Image src={'/phone.png'} alt='phone' width={22} height={22} /><p className='text-[10px] ml-[1px] tracking-[-0.5px]'>
    <input className={`bg-transparent ${text2}`}
          type="text" 
          placeholder="+919833XXXXXX" 
           value={mobile}
        //   onChange={handleChange}
        />
        </p>
</div>
<div className='flex'>
    <Image src={'/website.png'} alt='website' width={22} height={22} /><p className='text-[10px] ml-1.5 tracking-[-0.5px]'>
    <input className={`bg-transparent ${text2}`}
          type="text" 
          placeholder=" www.alphamintlabs.com" 
           value={website}
        //   onChange={handleChange}
        />
       </p>
</div>

        </div>
    </div>
  )
}

export default BioTemp