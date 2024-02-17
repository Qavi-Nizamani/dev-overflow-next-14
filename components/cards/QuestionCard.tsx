import React from 'react'
import RenderTag from '../shared/RenderTag'
import Link from 'next/link'
import Metric from '../shared/Metric'
import { formatNumber, getTimestamp } from '@/lib/utils'

interface QuestionProps {
  _id: string
  title: string
  author: {
    _id: string
    name: string
    avatar: string
  }
  tags: {
    _id: string
    name: string
  }[]
  createdAt: Date
  votes: number
  answers: Array<object>
  views: number
}

const QuestionCard = ({
  _id,
  title,
  author,
  tags,
  createdAt,
  votes,
  answers,
  views
}: QuestionProps) => {
  return (
    <div className="card-wrapper grid gap-6 rounded-lg px-11 py-9">
      <div>
        <div>
          <span className="flex text-dark400_light700 subtle-regular sm:hidden">
            {getTimestamp(createdAt)}
          </span>
          <Link href={`/questions/${_id}`}>
            <h3 className="line-clamp-2 flex-1 text-dark200_light900 base-semibold sm:h3-semibold">
              {title}
            </h3>
          </Link>
        </div>
        <div className="mt-3 flex flex-wrap gap-3">
          {tags.map((tag) => {
            return <RenderTag key={tag._id} _id={tag._id} name={tag.name} />
          })}
        </div>
      </div>

      <div className="flex flex-wrap justify-between gap-4">
        <div className="flex items-center gap-2">
          <Metric
            imgUrl={author.avatar}
            alt="Profile Photo"
            value={author.name}
            title={`- asked ${getTimestamp(createdAt)}`}
            isAuthor
            textStyles="body-medium text-dark400_light700"
            href={`/profile/${author._id}`}
          />
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:min-w-fit lg:ml-auto">
          <Metric
            imgUrl={'/assets/icons/like.svg'}
            alt="Like"
            title="Votes"
            value={formatNumber(votes)}
            textStyles="small-medium text-dark400_light800"
          />
          <Metric
            imgUrl={'/assets/icons/message.svg'}
            alt="Message"
            title="Answers"
            value={formatNumber(answers.length)}
            textStyles="small-medium text-dark400_light800"
          />
          <Metric
            imgUrl={'/assets/icons/eye.svg'}
            alt="Views"
            title="Views"
            value={formatNumber(views)}
            textStyles="small-medium text-dark400_light800"
          />
        </div>
      </div>
    </div>
  )
}

export default QuestionCard
