'use client'
import Image from 'next/image'
import React from 'react'
import { Input } from '../../ui/input'

interface CustomInputProps {
  route: string
  iconPosition: string
  imgSrc: string
  placeholder: string
  otherClasses?: string
}

const LocalSearchBar = ({
  route,
  iconPosition,
  imgSrc,
  placeholder,
  otherClasses
}: CustomInputProps) => {
  return (
      <div
        className={`background-light800_darkgradient flex min-h-[56px] grow items-center gap-4 rounded-xl px-4 ${otherClasses}`}
      >
        {iconPosition === 'left' && (
          <Image src={imgSrc} alt="Global Search" width={24} height={24} />
        )}

        <Input
          type="text"
          placeholder={placeholder}
          onChange={() => {}}
          className="paragraph-regular no-focus placeholder border-none bg-transparent shadow-none outline-none"
        />

        {iconPosition === 'right' && (
          <Image
            src={'/assets/icons/search.svg'}
            alt="Global Search"
            width={24}
            height={24}
          />
        )}
      </div>
  )
}

export default LocalSearchBar
