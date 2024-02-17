import QuestionCard from '@/components/cards/QuestionCard'
import HomeFilter from '@/components/screens/home/HomeFilter'
import HomeTopBar from '@/components/screens/home/HomeTopBar'
import Filter from '@/components/shared/Filter'
import NoResult from '@/components/shared/NoResult'
import LocalSearchBar from '@/components/shared/search/LocalSearchBar'
import { HomePageFilters } from '@/constants/filters'

export default function Home () {
  const questions = [
    {
      _id: '1',
      title: 'Testing the dummy post data',
      author: {
        name: 'qavi',
        avatar: '/assets/icons/avatar.svg',
        _id: '1'
      },
      tags: [
        {
          _id: '1',
          name: 'JavaScript'
        },
        {
          _id: '2',
          name: 'Next.js'
        },
        {
          _id: '3',
          name: 'React.js'
        }
      ],
      createdAt: new Date(),
      votes: 1,
      answers: [],
      views: 100
    },
    {
      _id: '2',
      title: 'Testing the dummy post data',
      author: {
        name: 'qavi',
        avatar: '/assets/icons/avatar.svg',
        _id: '1'
      },
      tags: [
        {
          _id: '1',
          name: 'JavaScript'
        },
        {
          _id: '2',
          name: 'Next.js'
        },
        {
          _id: '3',
          name: 'React.js'
        }
      ],
      createdAt: new Date('2024-02-16T13:55:00.000Z'),
      votes: 1,
      answers: [],
      views: 1950000
    },
    {
      _id: '3',
      title: 'Testing the dummy post data',
      author: {
        name: 'qavi',
        avatar: '/assets/icons/avatar.svg',
        _id: '1'
      },
      tags: [
        {
          _id: '1',
          name: 'JavaScript'
        },
        {
          _id: '2',
          name: 'Next.js'
        },
        {
          _id: '3',
          name: 'React.js'
        }
      ],
      createdAt: new Date('2024-02-16T13:55:00.000Z'),
      votes: 1,
      answers: [],
      views: 1950000
    }
  ]

  return (
    <>
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

      <div className="mt-11 grid gap-6">
        {questions.length > 0
          ? (
              questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              views={question.views}
              votes={question.votes}
              answers={question.answers}
              createdAt={question.createdAt}
            />
              ))
            )
          : (
          <NoResult
            title="There’s no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
            )}
      </div>
    </>
  )
}
