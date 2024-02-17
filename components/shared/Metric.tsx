import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props {
  imgUrl: string
  alt: string
  title: string
  value?: string | number
  textStyles: string
  isAuthor?: boolean
  href?: string
}
const Metric = ({
  imgUrl,
  alt,
  title,
  value,
  textStyles,
  isAuthor,
  href
}: Props) => {
  const metricContent = (
    <>
      <Image
        src={imgUrl}
        alt={alt}
        width={isAuthor ? 20 : 16}
        height={isAuthor ? 20 : 16}
        className={`object-contain ${href ? 'rounded-full border' : ''}`}
      />

      <p className={`${textStyles} flex h-fit items-center gap-1`}>
        <span className={`${isAuthor ? 'capitalize' : ''}`}>{value}</span>
        <span className={`${isAuthor ? 'small-regular max-sm:hidden' : ''}`}>
          {title}
        </span>
      </p>
    </>
  )

  if (href) {
    return (
      <Link className="flex w-fit items-center gap-1" href={href}>
        {metricContent}
      </Link>
    )
  }

  return <div className="flex w-fit items-center gap-1">{metricContent}</div>
}

export default Metric
