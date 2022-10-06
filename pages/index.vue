<template>
  <div>
    <h1>Storyblok Content</h1>
    {{state}}
  </div>
</template>

<script setup>
const api = useStoryblokApi()
const {data} = await useAsyncData('home', async () => api.get('cdn/stories/home', {version: 'draft'}))

const state = reactive({story: data.value.data.story})

onMounted(() => {
  useStoryblokBridge(state.story.id, (story) => (state.story = story))
})
</script>
