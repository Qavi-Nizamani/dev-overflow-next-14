'use client'

import { useTheme } from '@/context/ThemeProvider'
import React from 'react'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger
} from '@/components/ui/menubar'
import Image from 'next/image'

const Theme = () => {
  const { mode, setMode } = useTheme()

  return (
    <Menubar className='border-none'>
      <MenubarMenu>
        <MenubarTrigger className='cursor-pointer'>
          {mode === 'light'
            ? (
            <Image
              src="/assets/icons/sun.svg"
              width={20}
              height={20}
              alt="Light Theme"
              className='active-theme'
            />
              )
            : (
            <Image
              src="/assets/icons/moon.svg"
              width={20}
              height={20}
              alt="Light Theme"
              className='active-theme'
            />
              )}
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>New Window</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Share</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Print</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}

export default Theme
