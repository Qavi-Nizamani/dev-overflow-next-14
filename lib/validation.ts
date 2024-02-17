import { z } from 'zod'

export const questionSchema = z.object({
  title: z.string().min(5),
  explanation: z.string().min(100),
  tags: z.array(z.string().min(3).max(20)).min(1).max(3)
})
