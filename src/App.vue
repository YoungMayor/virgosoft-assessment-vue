<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useHead } from '@unhead/vue'

useHead({
  titleTemplate: (title) => (title ? `${title} | Lotogram` : 'Lotogram - Premium Fintech & Gaming'),
  meta: [
    { name: 'description', content: 'Experience the future of gaming and finance with Lotogram.' },
    { name: 'theme-color', content: '#1a0b2e' },
  ],
})
</script>

<template>
  <RouterView />
</template>
