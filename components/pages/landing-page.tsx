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
                <main className='px-16 mt-3'>
                    <div className='hero h-[40rem] rounded-lg bg-[#3F6745] px-16 py-5 flex items-center'>
                        <div className='w-1/2'>
                            <div className='w-fit h-10 rounded-full bg-[#36583d] py-1.5 px-1.5 flex mb-7 items-center'>
                                <div className='h-full px-3 rounded-full bg-[#ffc34b] text-white flex items-center'>
                                    New
                                </div>
                                <div className='grow text-white ml-2 mr-2'>
                                    <span>Get 20% off in every course in july 2023</span>
                                </div>
                            </div>
                            <h1 className={`text-white text-6xl ${margarine.className} mb-10`}>
                                Lets Grow Your Education Level up With E-Learn
                            </h1>
                            <p className='text-white text-xl tracking-wider mb-12'>Learn anytime anywhere with expert.</p>
                            <div className='rounded-md px-2 py-3 w-5/6 h-16 bg-white flex items-center'>
                                <div className='grow px-5'>
                                    <span className='text-slate-400'>Type Your Course</span>
                                </div>
                                <div className='h-12 w-12 bg-[#FD661F] rounded-md flex items-center justify-center'>
                                    <span className='material-icons text-white text-3xl'>search</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5 w-full grid grid-cols-2 gap-5'>
                        <div className='grid grid-cols-2 gap-3 px-5 py-5'>
                            <div className='text-center'>
                                <p className='text-6xl font-bold text-center'>10k</p>
                                <div className='flex items-center'>
                                    <span className='material-icons text-[#ff523d]'>favorite</span>
                                    <span className='material-icons text-[#ff523d]'>favorite</span>
                                    <span className='material-icons text-[#ff523d]'>favorite</span>
                                    <span className='material-icons text-[#ff523d]'>favorite</span>
                                    <span className='material-icons text-[#ff523d]'>favorite</span>
                                </div>
                            </div>
                            <div></div>
                        </div>
                        <div className='h-5 bg-blue-500'></div>
                    </div>
                    <div className='pros'>
                        <h2 className='text-3xl text-center'>
                            Find Your Best Private Tutor Now
                        </h2>
                    </div>
                </main>
            </>
        )
    }
}

export default LandingPage