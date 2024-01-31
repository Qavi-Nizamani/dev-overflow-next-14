import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import RenderTag from './RenderTag'

const TopContent = () => {
  const hotQuestions = [
    {
      _id: 1,
      title: 'Would it be appropriate to point out an error in another paper during a referee report?'
    },
    {
      _id: 2,
      title: 'How can an airconditioning machine exist?'
    },
    {
      _id: 3,
      title: 'Interrogated every time crossing UK Border as citizen'
    },
    {
      _id: 4,
      title: 'Low digit addition generator'
    },
    {
      _id: 5,
      title: 'What is an example of 3 numbers that do not make up a vector?'
    }
  ]
  return (
    <div>
      <h3 className="text-dark200_light900 h3-bold">Hot Network</h3>
      <div className="mt-6 grid gap-5">
        {hotQuestions.map((question) => {
          return (
            <Link
              key={question._id}
              href={'/'}
              className="flex items-start justify-between gap-6 "
            >
              <p className="text-dark500_light700 body-medium">
                {question.title}
              </p>
              <Image
                src={'/assets/icons/chevron-right.svg'}
                alt="arrow right"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          )
        })}
      </div>
    </div>
  )
}

const BottomContent = () => {
  const popularTags = [
    {
      _id: 1,
      name: 'JavaScript',
      totalQuestions: 20152
    },
    {
      _id: 2,
      name: 'Next.js',
      totalQuestions: 18493
    },
    {
      _id: 3,
      name: 'React.js',
      totalQuestions: 16269
    },
    {
      _id: 4,
      name: 'Node.js',
      totalQuestions: 15121
    },
    {
      _id: 5,
      name: 'Python',
      totalQuestions: 14431
    },
    {
      _id: 6,
      name: 'Microsoft Azure',
      totalQuestions: 9429
    },
    {
      _id: 7,
      name: 'PostgreSql',
      totalQuestions: 9429
    },
    {
      _id: 8,
      name: 'Machine Learning',
      totalQuestions: 9429
    }
  ]
  return (
    <div className="grid gap-6">
      <h3 className="text-dark200_light900 h3-bold">Popular Tags</h3>
      <div className="grid gap-5">
        {popularTags.map((tag) => {
          return (
            <RenderTag
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              totalQuestions={tag.totalQuestions}
              showCount
            />
          )
        })}
      </div>
    </div>
  )
}

const RightSidebar = () => {
  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky left-0 top-0 flex h-screen flex-col gap-16 overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden xl:w-[330px]">
      <TopContent />
      <BottomContent />
    </section>
  )
}

export default RightSidebar
