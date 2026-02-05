<script setup lang="ts">
import { useRouter } from 'vue-router'
import { draws } from '@/lib/data/draws'

defineProps<{
  activeId?: string
}>()

const router = useRouter()
</script>

<template>
  <div
    class="flex items-center gap-2 p-1 bg-surface-lighter/50 rounded-full border border-white/5 overflow-x-auto no-scrollbar"
  >
    <button
      v-for="draw in draws"
      :key="draw.id"
      @click="router.push(`/draw/${draw.id}`)"
      class="px-4 py-2 text-xs font-bold rounded-full whitespace-nowrap transition-all"
      :class="
        activeId === draw.id
          ? 'bg-primary text-white shadow-lg shadow-primary/20'
          : 'text-white/60 hover:text-white hover:bg-white/5'
      "
    >
      {{ draw.title }}
    </button>
  </div>
</template>
