'use client'

import React, { Component } from 'react'
import Image from 'next/image'
import BaseButton from '../form/button'
import Navbar from '../navigation/navbar'
import { Margarine } from 'next/font/google'

const margarine = Margarine({
    weight: "400",
    subsets: ['latin'],
    display: 'swap'
})

export class LandingPage extends Component {
    render() {
        return (
            <>
                <Navbar />
                <main className='px-10'>
                    <div className='hero h-[34rem] rounded-lg bg-[#3F6745] px-10 py-5 flex items-center'>
                        <div className='w-1/2 pr-20'>
                            <h1 className={`text-white text-5xl ${margarine.className} mb-10`}>
                                Lets Grow Your Education Level up With E-Learn
                            </h1>
                            <p className='text-white text-lg tracking-wider'>Learn anytime anywhere with expert.</p>
                        </div>

                    </div>
                    {/* <div className='hero h-[30rem] bg-main flex justify-center items-center pl-28 pr-28'>
                        <div className='bg-green-400 h-full w-full'>
                            <div className='w-full flex justify-center mb-5'>
                                <Image src={`/assets/icons/logo.png`} height={50} width={200} alt='logo' className='' />
                            </div>
                            <h1 className='text-white text-3xl mb-3'>Find Your Best Private Tutor Now</h1>
                            <div className='w-full flex justify-center'>
                                <BaseButton onClick={(e) => { }}>

                                    <span>FIND NOW</span>
                                    <span className="material-icons ml-3">
                                        search
                                    </span>
                                </BaseButton>
                            </div>

                        </div>
                    </div> */}
                </main>
            </>
        )
    }
}

export default LandingPage