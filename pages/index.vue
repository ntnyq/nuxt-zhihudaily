<script lang="ts" setup>
useSeoMeta({
  title: '知乎日报',
})

const { data: latest } = await useFetch('/api/latest')
</script>

<template>
  <main
    flex="~ col"
    max-w="xl"
    mx="auto"
  >
    <h1
      text="4xl center"
      p-4
      mb-1
    >
      {{ latest?.date }}
    </h1>
    <ul>
      <li
        v-for="item in latest?.stories ?? []"
        :key="item.id"
        border="b"
        flex="~"
        items-center
        p2
        m4
      >
        <img
          :src="item.images[0]"
          :alt="item.title"
          w="[100px]"
          md:w="[150px]"
          mr-4
        />
        <NuxtLink :to="`/news/${item.id}`">
          {{ item.title }}
        </NuxtLink>
      </li>
    </ul>
  </main>
</template>
