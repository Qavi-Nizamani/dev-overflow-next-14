"use server"

import Tag, { ITag } from "@/database/models/tag.model"
import Question from "../../database/models/user.model"
import { connectToDatabase } from "../../database/mongoose"
import { IQuestion } from "@/database/models/question.model"

type Props = {
  title: string
  content: string
  tags: string[]
  author: string
  path: string
}

export async function createQuestion({
  title,
  content,
  tags,
  author,
  path
}: Props) {
  try {
    // Establish a connection to the database
    connectToDatabase()

    // Create a new question document in the database with the provided title, content, and author
    const question: IQuestion = await Question.create({
      title,
      content,
      author
    })

    // Initialize an empty array to store tag documents

    // Process the provided tags and associate them with the newly created question
    const tagDocuments: string[] = await processTags(tags, question)

    // Update the question by adding the processed tags to its tags array
    await Question.findByIdAndUpdate(question._id, {
      // Use $push with $each to add multiple tags at once
      $push: { tags: { $each: tagDocuments } }
    })
  } catch (error) {
    console.log(error)
  }
}

// Function to process tags and associate them with a question
async function processTags(tags: string[], question: IQuestion) {
  const processedTags = [] // Array to store the results of processed tags
  // Iterate over each tag in the tags array
  for (const tag of tags) {
    // Search for an existing tag with a name that matches the current tag (case-insensitive)
    const existingTag: ITag = await Tag.findOneAndUpdate(
      {
        // Match the tag name, ignoring case
        name: { $regex: new RegExp(`^${tag}$`, "i") }
      },
      {
        // Set the tag name if it's a new tag, add the question ID to the tag's questions array
        $setOnInsert: { name: tag },
        $push: { questions: question._id }
      },
      {
        // Create a new tag if no match is found
        upsert: true,
        // Return the updated or newly created tag
        new: true
      }
    )

    // Check if the existing tag was found or created
    if (existingTag) {
      console.log(`Tag processed: ${existingTag.name}`)
      processedTags.push(existingTag._id)
    }
  }

  // Return the array of processed tags
  return processedTags
}
