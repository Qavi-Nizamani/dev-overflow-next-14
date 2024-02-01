import HomeFilter from '@/components/screens/home/HomeFilter'
import HomeTopBar from '@/components/screens/home/HomeTopBar'
import Filter from '@/components/shared/Filter'
import PostCard from '@/components/shared/PostCard'
import LocalSearchBar from '@/components/shared/search/LocalSearchBar'
import { HomePageFilters } from '@/constants/filters'
import { PostCardProps } from '@/types'

export default function Home () {
  const post: PostCardProps = {
    _id: 'dummy',
    title: 'Testing the dummy post data',
    user: {
      name: 'qavi',
      avatar: '/assets/icons/avatar.svg'
    },
    date: new Date().toUTCString(),
    tags: [
      {
        _id: '1',
        name: 'JavaScript',
        totalQuestions: 20152
      },
      {
        _id: '2',
        name: 'Next.js',
        totalQuestions: 18493
      },
      {
        _id: '3',
        name: 'React.js',
        totalQuestions: 16269
      }
    ],
    votes: 1,
    views: 100,
    answers: 2
  }

  return (
    <div className="md:px-12">
      <HomeTopBar />

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchBar
          route="/"
          imgSrc="/assets/icons/search.svg"
          iconPosition="left"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />

        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>

      <HomeFilter filters={HomePageFilters} />

      <div className="mt-11">
        <PostCard {...post} />
      </div>
    </div>
  )
}
