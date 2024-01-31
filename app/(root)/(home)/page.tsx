import Filter from '@/components/shared/filter/Filter'
import LocalSearchBar from '@/components/shared/search/LocalSearchBar'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home () {
  return (
    <>
      <div className="flex w-full  flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Link href={'/ask-question'} className="flex justify-end">
          <Button className="primary-gradient min-h-11 px-4 py-3 text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchBar
          route="/"
          imgSrc="/assets/icons/search.svg"
          iconPosition="left"
          placeholder="Search for questions"
        />

        <Filter
          filters={[
            { value: '1', name: 'Newest' },
            { value: '2', name: 'Recommended' },
            { value: '3', name: 'Frequent' },
            { value: '4', name: 'Unanswered' }
          ]}
        />
      </div>
    </>
  )
}
