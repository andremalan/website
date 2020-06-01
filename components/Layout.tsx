import Head from 'next/head'
import Header from './Header'
import React from 'react'

export default function Layout({ children, pageTitle, description }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description}></meta>
        <title>{pageTitle}</title>
      </Head>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;800;900&display=swap');
      `}</style>
      <section className="layout mb-12">
        <Header />
        <div className="container mt-8 px-4">{children}</div>
      </section>
    </>
  )
}
