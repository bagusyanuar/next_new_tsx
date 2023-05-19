import Image from 'next/image'
import Head from 'next/head'
import React from 'react'
import { Metadata, GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'


export const metadata: Metadata = {
  title: 'Homepage',
  description: 'Desc',
  openGraph: {
    images: ['/assets/image/logo.png']
  },
  other: {
    pinterest: 'nopin'
  }
}

function IndexPage({ token }: PageProps) {
  console.log(token);
  
  return (
    <div>
      <p>Hello world!</p>
    </div>
  );
}

type PageProps = {
  token: string;
}

export const getServerSideProps: GetServerSideProps<{ pageProps: PageProps }> = async (context: GetServerSidePropsContext) => {
  // ...
  const pageProps: PageProps = {
    token: 'mytoken'
  }
  return {
    props: { pageProps },
  }
};
export default IndexPage;
