"use client"
import { Tabs, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import {DesktopIcon, MoonIcon, SunIcon} from '@radix-ui/react-icons'
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react'

const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const {theme, setTheme} = useTheme();

    useEffect(() => {
        setMounted(true);
    },[]);

    if(!mounted) return null;
  return (

    <Tabs value={theme}>
        <TabsList className='border flex gap-3 p-3 rounded-md'>
            <TabsTrigger value="light"
            onClick={() => setTheme("light")}
            >
                <SunIcon className='h-[1.21rem] w-[1.21rem] rotate-90 transition-all duration-300 ease-in-out' />

            </TabsTrigger>
            <TabsTrigger value='dark'
            onClick={() => setTheme("dark")}
            
            >
                <MoonIcon className='h-[1.21rem] w-[1.21rem] rotate-90 transition-all duration-200 dark:rotate-0'/>


            </TabsTrigger>
            <TabsTrigger value='system' onClick={() => setTheme("system")}>
                
                <DesktopIcon className='h-[1.21rem] w-[1.21rem]'/>

            </TabsTrigger>
        </TabsList>
    </Tabs>
  )
}

export default ThemeSwitcher