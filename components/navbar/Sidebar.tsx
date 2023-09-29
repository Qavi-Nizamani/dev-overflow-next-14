import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger
} from '@/components/ui/sheet'
import { SignedOut } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'

const NavContent = () => {
  return <div></div>
}
const Sidebar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/assets/icons/hamburger.svg"
          width={36}
          height={36}
          alt="Menu"
          className="invert-colors sm:hidden"
        />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="background-light900_dark200 border-none"
      >
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/assets/images/site-logo.svg"
            height={23}
            width={23}
            alt="Dev Flow"
          />

          <p className="h2-bold text-dark100_light900 font-spaceGrotesk">
            Dev <span className="text-primary-500">Overflow</span>
          </p>
        </Link>
        <div>
          <SheetClose asChild>
            <NavContent />
          </SheetClose>
        </div>

        <SignedOut>
          <div className="flex h-full flex-col gap-3">

            <SheetClose asChild>
              <Link href={'/sign-in'}>
                <Button className='small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none'>
                  <span className="primary-text-gradient">Log in</span>
                </Button>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href={'/sign-up'}>
                <Button className='small-medium btn-tertiary light-border-2 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none'>
                  <span className="text-dark400_light900">Sign Up</span>
                </Button>
              </Link>
            </SheetClose>
          </div>
        </SignedOut>
      </SheetContent>
    </Sheet>
  )
}

export default Sidebar
