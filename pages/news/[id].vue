<script lang="ts" setup>
const route = useRoute('news-id')
const id = route.params.id

const { data: story } = await useFetch(`/api/news/${id}`, {
  lazy: true,
})
</script>

<template>
  <main
    flex="~ col"
    max-w="xl"
    mx="auto"
    p4
  >
    <div v-html="story?.body"></div>
  </main>
</template>
