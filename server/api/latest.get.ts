import * as v from 'valibot'
import { StorySchema, TopStorySchema } from '~/server/schema'

export default defineEventHandler(async () => {
  const $zd = $fetch.create({
    baseURL: 'https://news-at.zhihu.com/api/4',
  })

  const res = await $zd('/news/latest')
  const LatestSchema = v.object({
    date: v.string(),
    stories: v.array(StorySchema),
    top_stories: v.array(TopStorySchema),
  })
  const latest = v.parse(LatestSchema, res)

  return latest
})
