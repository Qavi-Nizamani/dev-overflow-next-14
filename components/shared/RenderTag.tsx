import React from 'react'
import { Badge } from '../ui/badge'
import Link from 'next/link'

type Props = {
  _id: string
  name: string
  totalQuestions?: number
  showCount?: boolean
}

function RenderTag ({ _id, name, totalQuestions, showCount }: Props) {
  return (
    <Link
      key={_id}
      href={`/tags/${_id}`}
      className="flex items-center justify-between gap-6"
    >
      <Badge className="rounded-md px-4 py-2 uppercase background-light800_dark300 text-light400_light500 subtle-medium">
        {name}
      </Badge>
      {showCount && (
        <p className="text-dark500_light700 small-medium">{`${totalQuestions}+`}</p>
      )}
    </Link>
  )
}

export default RenderTag
