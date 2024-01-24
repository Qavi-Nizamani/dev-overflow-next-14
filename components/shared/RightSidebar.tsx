import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const TopContent = () => {
  const hotQuestions = [
    {
      _id: 1,
      title:
        'Would it be appropriate to point out an error in another paper during a referee report?'
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
      title: 'JavaScript',
      count: 20152
    },
    {
      _id: 2,
      title: 'Next.js',
      count: 18493
    },
    {
      _id: 3,
      title: 'React.js',
      count: 16269
    },
    {
      _id: 4,
      title: 'Node.js',
      count: 15121
    },
    {
      _id: 5,
      title: 'Python',
      count: 14431
    },
    {
      _id: 6,
      title: 'Microsoft Azure',
      count: 9429
    },
    {
      _id: 7,
      title: 'PostgreSql',
      count: 9429
    },
    {
      _id: 8,
      title: 'Machine Learning',
      count: 9429
    }
  ]
  return (
    <div className="grid gap-6">
      <h3 className="text-dark200_light900 h3-bold">Popular Tags</h3>
      <div className="grid gap-5">
        {popularTags.map((tag) => {
          return (
            <Link
              key={tag._id}
              href={'/'}
              className="flex items-center justify-between gap-6"
            >
              <p className="background-light900_dark300 text-light400_light500 body-medium rounded-md px-4 py-2">{tag.title}</p>
              <p className="body-medium text-dark500_light700">{`${tag.count}+`}</p>
            </Link>
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
