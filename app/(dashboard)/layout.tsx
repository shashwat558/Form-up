import Logo from '@/components/Logo'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import { UserButton } from '@clerk/nextjs'
import React from 'react'

const layout = ({children}:{children: React.ReactNode}) => {
  return (
    <div className='flex flex-col min-h-screen min-w-screen bg-background max-h-screen'>
      <nav className='flex w-full justify-between items-center border-b border-border h-[60px] px-8 py-2'>
        <Logo />
        <div className='flex gap-4 items-center'>
          <ThemeSwitcher />
          <UserButton />

        </div>
        

      </nav>
      <main className='flex flex-grow w-full'>{children}</main>
    </div>
  )
}

export default layout