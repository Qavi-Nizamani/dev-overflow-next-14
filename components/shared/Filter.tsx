import React from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

type Props = {
  filters: { value: string; name: string }[]
  containerClasses: string
  otherClasses?: string
}

const Filter = ({ filters, containerClasses, otherClasses }: Props) => {
  return (
    <div className={`relative ${containerClasses}`}>
      <Select>
        <SelectTrigger
          className={`body-regular light-border background-light800_dark300 text-dark500_light700 border px-5 py-2.5 ${otherClasses}`}
        >
          <SelectValue placeholder={'Select a Filter'} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {filters.map((item) => {
              return (
                <SelectItem
                  className="h-[56px]"
                  key={item.value}
                  value={item.value}
                >
                  {item.name}
                </SelectItem>
              )
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}

export default Filter
