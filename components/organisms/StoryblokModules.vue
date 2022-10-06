<template>
  <component v-for="blok in modules" :is="blok.component" :key="blok._uid" :blok="blok" v-editable="blok"/>
</template>

<script lang="ts">
export default defineComponent({
  props: {
    modules: {
      type: Array,
      default: () => []
    }
  },
  components: {
  }
})
</script>
