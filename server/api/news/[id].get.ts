import * as v from 'valibot'
import { StorySchema } from '~/server/schema'

export default defineEventHandler(async event => {
  const id = getRouterParam(event, 'id')
  const $zd = $fetch.create({
    baseURL: 'https://news-at.zhihu.com/api/4',
  })

  const res = await $zd(`/news/${id}`)
  const story = v.parse(StorySchema, res)
  return story
})
