import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

const NoResult = () => {
  return (
    <div className="mx-auto mt-28 grid max-w-md gap-8">
      <div>
        <Image
          src={'/assets/images/light-illustration.png'}
          width={270}
          height={200}
          alt="Light Illustration"
          className="mx-auto max-w-md object-contain dark:hidden"
        />
        <Image
          src={'/assets/images/dark-illustration.png'}
          width={270}
          height={200}
          alt="Light Illustration"
          className="mx-auto hidden max-w-md object-contain dark:block"
        />
      </div>

      <div className="grid gap-3.5 text-center">
        <h2 className="text-dark400_light900 h2-bold">
          There’s no question to show
        </h2>
        <p className='text-dark300_light700 body-regular'>
          Be the first to break the silence! 🚀 Ask a Question and kickstart the
          discussion. our query could be the next big thing others learn from.
          Get involved! 💡
        </p>
        <Link href={'/'}>
          <Button className="min-h-11 px-4 py-3 text-light-900 primary-gradient">Ask a Question</Button>
        </Link>
      </div>
    </div>
  )
}

export default NoResult
