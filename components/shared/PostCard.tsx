import React from 'react'
import RenderTag from './RenderTag'
import Image from 'next/image'
import Link from 'next/link'
import { PostCardProps } from '@/types'

const PostCard = ({
  _id,
  title,
  user,
  tags,
  date,
  votes,
  answers,
  views
}: PostCardProps) => {
  return (
    <div className="background-light900_dark200 px-11 py-9">
      <div>
        <Link href={`/questions/${_id}`}>
          <h3 className="text-dark400_light900">{title}</h3>
        </Link>

        <div className="mt-3 flex flex-wrap gap-3">
          {tags.map((tag) => {
            return <RenderTag key={tag._id} _id={tag._id} name={tag.name} />
          })}
        </div>
      </div>

      <div className="mt-6 flex justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Image
              src={user.avatar}
              alt="avatar"
              width={20}
              height={20}
              className="invert-colors"
            />
            <p className="capitalize">satheesh</p>
          </div>
          <ul className="pl-5">
            <li className="list-disc">{`asked at ${date}`}</li>
          </ul>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Image
              src={'/assets/icons/like.svg'}
              alt="Like"
              width={16}
              height={16}
            />
            <span>1.2k Votes</span>
          </div>
          <div className="flex items-center gap-1">
            <Image
              src={'/assets/icons/message.svg'}
              alt="Message"
              width={16}
              height={16}
            />
            <span>1.2k Answers</span>
          </div>
          <div className="flex items-center gap-1">
            <Image
              src={'/assets/icons/eye.svg'}
              alt="Eye"
              width={16}
              height={16}
            />
            <span>1.2k Views</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostCard
