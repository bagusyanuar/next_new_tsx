
import React from 'react'
import { Metadata } from 'next'
import LandingPage from '../components/pages/landing-page'

export const metadata: Metadata = {
  title: 'Teman Belajar',
  description: 'Platform les privat offline atau online terpercaya seluruh indonesia',
  other: {
    pinterest: 'nopin',
  }
}

function Home() {
  return (
    <LandingPage />
  );
}

export default Home;
