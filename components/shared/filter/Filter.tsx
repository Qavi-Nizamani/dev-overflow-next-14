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
}

const Filter = ({ filters }: Props) => {
  return (
    <>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={'Select a Filter'} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup >
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
    </>
  )
}

export default Filter
