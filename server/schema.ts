import * as v from 'valibot'

export const StorySchema = v.object({
  id: v.number(),
  title: v.string(),
  url: v.string(),
  type: v.number(),
  images: v.array(v.string()),
  body: v.optional(v.string()),
})

export const TopStorySchema = v.object({})
