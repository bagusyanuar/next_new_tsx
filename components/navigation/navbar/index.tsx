import React from 'react'
import Image from 'next/image'

function Index() {
    return (
        <div className='flex h-16 pl-10 pr-10 items-center'>
            <div className='grow flex items-center'>
                <div className='flex items-center mr-20'>
                    <Image src={`/assets/icons/logo-blue.png`} height={10} width={40} alt='logo' className='mr-3 rounded-md' />
                    <span className='font-bold text-[#FD661F]'>E</span>
                    <span className='font-bold tracking-wider'>-Learn</span>
                </div>

                <a href='#' className='mr-5 py-1 text-sm border-b-[3px] border-[#FD661F]'>Start</a>
                <a href='#' className='mr-5 py-1 text-sm'>Courses</a>
                <a href='#' className='mr-5 py-1text-sm'>Pricing</a>
                <a href='#' className='mr-5 py-1 text-sm'>About</a>
                <a href='#' className='mr-5 py-1 text-sm'>Contact</a>
            </div>
            <div>
                <button className='text-sm rounded-md text-white bg-[#1F1F1E] hover:bg-[#0c0c0c] py-2 px-6 transition-colors ease-in duration-200'>
                    Sign In
                </button>
            </div>
        </div>
    )
}

export default Index