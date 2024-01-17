import Navbar from '@/components/navbar/Navbar'
import Sidebar from '@/components/navbar/Sidebar'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="background-light850_dark100 relative">
      <Navbar />
      <div className="flex">
        <Sidebar/>
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
          {children}
        </section>
        right sidebar
      </div>
    </main>
  )
}

export default layout
