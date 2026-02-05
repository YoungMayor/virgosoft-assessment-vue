<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  activeTab?: string
}>()

const tabs = ['15 Minute Draw', '30 Minute Draw', '1 Hour Draw']
const active = computed(() => props.activeTab || '15 Minute Draw')
</script>

<template>
  <div
    class="flex items-center gap-2 p-1 bg-surface-lighter/50 rounded-full border border-white/5 overflow-x-auto no-scrollbar"
  >
    <button
      v-for="tab in tabs"
      :key="tab"
      class="px-4 py-2 text-xs font-bold rounded-full whitespace-nowrap transition-all"
      :class="
        active === tab
          ? 'bg-primary text-white shadow-lg shadow-primary/20'
          : 'text-white/60 hover:text-white hover:bg-white/5'
      "
    >
      {{ tab }}
    </button>
  </div>
</template>
