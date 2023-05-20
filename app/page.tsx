import React from 'react'
import ReactDom from 'react-dom'
import { Metadata } from 'next'
import Image from 'next/image'
import BaseButton from '../components/form/button'
import Head from 'next/head'
export const metadata: Metadata = {
  title: 'Teman Belajar',
  description: 'Platform les privat offline atau online terpercaya seluruh indonesia',
  // openGraph: {
  //   images: ['/assets/image/logo.png']
  // },
  other: {
    pinterest: 'nopin',

  }
}

export function clickButton(e: any) {

}


function IndexPage() {
  return (
    <main>
      <div className='hero h-[32rem] bg-main flex justify-center items-center'>
        <div>
          <div className='w-full flex justify-center mb-5'>
            <Image src={`/assets/icons/logo.png`} height={50} width={200} alt='logo' className='' />
          </div>
          <h1 className='text-white text-3xl mb-3'>Find Your Best Private Tutor Now</h1>
          <div className='w-full flex justify-center'>
            <BaseButton>
              <span>FIND NOW</span>
              <span className="material-symbols-outlined text-slate-600">
                arrow_right_alt
              </span>
            </BaseButton>
          </div>

        </div>
      </div>
    </main>
  );
}

export default IndexPage;
