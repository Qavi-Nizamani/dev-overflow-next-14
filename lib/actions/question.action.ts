'use server'

import Question from '../../database/models/user.model'
import { connectToDatabase } from '../../database/mongoose'

type Props = {
  title: string
  explanation: string
  tags: string[]
}
export async function createQuestion ({
  title,
  explanation: question,
  tags
}: Props) {
  try {
    await connectToDatabase()
    await Question.create({ title, question, tags })
  } catch (error) {
    console.log(error)
  }
}
