'use client'

import React, { useRef } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { ControllerRenderProps, useForm } from 'react-hook-form'
import { z } from 'zod'
import { Editor } from '@tinymce/tinymce-react'
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
import { Badge } from '../ui/badge'
import Image from 'next/image'

export function QuestionForm () {
  const editorRef = useRef(null)

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

  const handlerInputKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    field: ControllerRenderProps<
      {
        title: string
        explanation: string
        tags: string[]
      },
      'tags'
    >
  ) => {
    if (e.key === 'Enter') {
      e.preventDefault() // Prevents the default behavior of the 'Enter' key in the input field

      const tagInput = e.target as HTMLInputElement
      const tagValue = tagInput.value.trim()

      if (tagValue !== '') {
        if (tagValue.length >= 15) {
          return form.setError('tags', {
            type: 'required',
            message: 'Tag must be less than 15 characters.'
          })
        }

        if (!field.value.includes(tagValue)) {
          form.setValue('tags', [...field.value, tagValue])
          tagInput.value = ''
          form.clearErrors('tags')
        } else {
          return form.setError('tags', {
            type: 'required',
            message: 'Tag value already exist.'
          })
        }
      } else {
        form.trigger()
      }
    }
  }

  const handleTagRemove = (
    tag: string,
    field: ControllerRenderProps<
      {
        title: string
        explanation: string
        tags: string[]
      },
      'tags'
    >
  ) => {
    const filterValues = field.value.filter((value) => value !== tag)

    form.setValue('tags', filterValues)
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
              <Editor
                apiKey="y0qh1q1n0jrmesjyx8vusivk9cef9rdepldt1pymfrwfexh7"
                onInit={(evt, editor) => {
                  // @ts-ignore
                  editorRef.current = editor
                }}
                initialValue="<p>This is the initial content of the editor.</p>"
                init={{
                  height: 500,
                  menubar: false,
                  plugins: [
                    'advlist',
                    'autolink',
                    'lists',
                    'link',
                    'image',
                    'charmap',
                    'preview',
                    'anchor',
                    'searchreplace',
                    'visualblocks',
                    'fullscreen',
                    'insertdatetime',
                    'media',
                    'codesample'
                  ],
                  toolbar:
                    'undo redo | codesample | casechange blocks | bold italic backcolor | ' +
                    'alignleft aligncenter alignright alignjustify | ' +
                    'bullist numlist checklist outdent indent | removeformat',
                  content_style:
                    'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                }}
                {...field}
              />
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
                  // {...field}
                  onKeyDown={(e) => handlerInputKeyDown(e, field)}
                />
              </FormControl>
              {field.value.length > 0 && (
                <div className="flex-start !mt-3 gap-2.5">
                  {field.value.map((tag: string) => {
                    return (
                      <Badge
                        key={tag}
                        className="flex cursor-pointer items-center justify-center gap-2 rounded-md px-4 py-2 uppercase background-light800_dark300 text-light400_light500 subtle-medium"
                        onClick={() => handleTagRemove(tag, field)}
                      >
                        {tag}
                        <Image
                          src="/assets/icons/close.svg"
                          alt="Close icon"
                          width={12}
                          height={12}
                          className="object-contain invert-0 dark:invert"
                        />
                      </Badge>
                    )
                  })}
                </div>
              )}
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
