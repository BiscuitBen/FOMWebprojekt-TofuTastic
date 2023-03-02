import React from 'react'
import Link from 'next/link'


const Footer = () => {
  return (
    <div>
      <div className='bg-white border-red-700 border-t-2 border-b-2 text-center font-semibold fixed bottom-0 left-0 right-0'>
        Disclaimer: Diese Webanwendung wurde im Rahmen eines Hochschulprojektes in dem Modul Webtechnologien erstellt und wird derzeit nur für diesen Zweck verwendet.   
      </div>
      <div className='container mx-auto text-center  bottom-0'>
      <Link href='../datenschutzerklearung'>
        <span className='mx-10' >
        Datenschutz
        </span>
      </Link>
      <Link href='../impressum'>
        <span className='mx-10'>
        Impressum
        </span>
      </Link>
      </div>
    </div>

  )
}

export default Footer