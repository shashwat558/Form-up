"use client"
import { Tabs, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import { MoonIcon, SunIcon } from 'lucide-react';
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
        <TabsList>
            <TabsTrigger value="light"
            onClick={() => setTheme("light")}
            >
                <SunIcon className='h-[1.21rem] w-[1.21rem]' />

            </TabsTrigger>
            <TabsTrigger value='dark'
            onClick={() => setTheme("dark")}
            
            >
                <MoonIcon className='h-[1.21rem] w-[1.21rem]'/>


            </TabsTrigger>
        </TabsList>
    </Tabs>
  )
}

export default ThemeSwitcher