import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

interface Props {
  title: string
  description: string
  link: string
  linkTitle: string
}

const NoResult = ({ title, description, link, linkTitle }: Props) => {
  return (
    <div className="mx-auto mt-28 grid max-w-md gap-8">
      <div>
        <Image
          src={'/assets/images/light-illustration.png'}
          width={270}
          height={200}
          alt="Light Illustration"
          className="max-w-md object-contain dark:hidden"
        />
        <Image
          src={'/assets/images/dark-illustration.png'}
          width={270}
          height={200}
          alt="Light Illustration"
          className="hidden max-w-md object-contain dark:block"
        />
      </div>

      <div className="grid gap-3.5 text-center">
        <h2 className="text-dark200_light900 h2-bold">{title}</h2>
        <p className="text-dark500_light700 body-regular">{description}</p>
        <Link href={link}>
          <Button className="mt-1.5 min-h-11 rounded-lg bg-primary-500 px-4 py-3 text-light-900 paragraph-medium hover:bg-primary-500 dark:bg-primary-500 dark:text-light-900">
            {linkTitle}
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default NoResult
