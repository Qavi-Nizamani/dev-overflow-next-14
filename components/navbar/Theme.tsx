'use client'

import { useTheme } from '@/context/ThemeProvider'
import React from 'react'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger
} from '@/components/ui/menubar'
import Image from 'next/image'
import { themes } from '@/constants'

const Theme = () => {
  const { mode, setMode } = useTheme()

  return (
    <Menubar className="border-none">
      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer">
          {mode === 'light'
            ? (
            <Image
              src="/assets/icons/sun.svg"
              width={20}
              height={20}
              alt="Light Theme"
              className="active-theme"
            />
              )
            : (
            <Image
              src="/assets/icons/moon.svg"
              width={20}
              height={20}
              alt="Light Theme"
              className="active-theme"
            />
              )}
        </MenubarTrigger>
        <MenubarContent className="background-light900_dark200 absolute right-[-3rem] border-none">
          {themes.map((theme) => {
            return (
              <MenubarItem
                key={theme.value}
                className="text-dark200_light800 hover:background-light900_dark200 min-w-[130px] cursor-pointer gap-5"
                onClick={() => {
                  localStorage.setItem('theme', theme.value)
                  setMode(theme.value)
                }}
              >
                <Image
                  src={theme.icon}
                  width={20}
                  height={20}
                  alt={`${theme.label} theme`}
                  className={theme.value === mode ? 'active-theme' : ''}
                />
                {theme.label}
              </MenubarItem>
            )
          })}
          {/* <MenubarItem>
            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>New Window</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Share</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Print</MenubarItem> */}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}

export default Theme
