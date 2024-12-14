import React from 'react'
import Navbar from '@/app/components/Navbar'


const layout = ({children}:Readonly<{children:React.ReactNode}>) => {
  return (
    <main className='font-work-sans'>
        <Navbar />
        {children}
    </main>
  )
}

export default layout