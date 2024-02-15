import RenderTag from '@/components/shared/RenderTag'
import { Button } from '@/components/ui/button'
import React from 'react'

type Props = { filters: { value: string; name: string }[] }

const HomeFilter = ({ filters }: Props) => {
  const isActive = 'newest'

  return (
    <div className="mt-10 flex flex-wrap gap-4 max-md:hidden">
      {filters.map((filter) => {
        return (
          <Button
            key={filter.value}
            className={`body-medium rounded-lg px-6 py-3 capitalize shadow-none ${isActive === filter.value ? 'bg-primary-100 text-primary-500' : 'bg-light-800 text-light-500 hover:bg-light-700 dark:bg-dark-300 dark:text-light-500 hover:dark:bg-dark-200'}`}
          >
            {filter.name}
          </Button>
        )
      })}
    </div>
  )
}

export default HomeFilter
