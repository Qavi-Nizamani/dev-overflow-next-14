'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '../ui/button'
import { questionSchema } from '@/lib/validation'

export function QuestionForm () {
  // 1. Define your form.
  const form = useForm<z.infer<typeof questionSchema>>({
    resolver: zodResolver(questionSchema),
    defaultValues: {
      title: '',
      explanation: '',
      tags: []
    }
  })

  // 2. Define a submit handler.
  function onSubmit (values: z.infer<typeof questionSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-9 space-y-8">

        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-dark400_light800 paragraph-semibold">
                Question Title <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl className="!mt-3.5">
                <Input
                  className="no-focus min-h-14 border background-light800_dark300 text-dark300_light700 light-border-2 paragraph-regular"
                  {...field}
                />
              </FormControl>
              <FormDescription className="mt-2.5 text-light-500 body-regular">
                Be specific and imagine you&apos;re asking a question to another
                person.
              </FormDescription>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="explanation"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-dark400_light800 paragraph-semibold">
                Detailed explanation of your problem{' '}
                <span className="text-red-500">*</span>
              </FormLabel>
              {/* <FormControl className="!mt-3.5">
                <Input
                  className="no-focus min-h-14 border background-light800_dark300 text-dark300_light700 light-border-2 paragraph-regular"
                  {...field}
                />
              </FormControl> */}
              <FormDescription className="mt-2.5 text-light-500 body-regular">
                Introduce the problem and expand on what you put in the title.
                Minimum 100 characters.
              </FormDescription>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-dark400_light800 paragraph-semibold">
                Tags <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl className="!mt-3.5">
                <Input
                  placeholder="Add Tags..."
                  className="no-focus min-h-14 border background-light800_dark300 text-dark300_light700 light-border-2 paragraph-regular"
                  {...field}
                />
              </FormControl>
              <FormDescription className="mt-2.5 text-light-500 body-regular">
                Add up to 5 tags to describe what your question is about. Start
                typing to see suggestions.
              </FormDescription>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        <Button
          className="!mt-16 ml-auto flex w-44 text-light-900 primary-gradient"
          type="submit"
        >
          Ask a Question
        </Button>
      </form>
    </Form>
  )
}

export default QuestionForm
