<script setup lang="ts">
import { Clock, RefreshCw } from 'lucide-vue-next'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps<{
  type: '30min' | '1hour'
  timer: string
  amount: string
}>()

const router = useRouter()
const title = computed(() => (props.type === '30min' ? '30 Minute Draw' : '1 Hour Draw'))
const isPurple = computed(() => props.type === '30min')

function handleClick() {
  router.push(`/draw/${props.type}`)
}
</script>

<template>
  <div
    @click="handleClick"
    class="flex flex-col p-4 bg-surface-lighter/50 border border-white/5 rounded-2xl backdrop-blur-sm hover:border-white/10 transition-all cursor-pointer active:scale-95"
  >
    <!-- Header -->
    <div class="flex items-center justify-between mb-3">
      <div
        class="p-2 rounded-full"
        :class="isPurple ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'"
      >
        <Clock v-if="type === '30min'" class="w-5 h-5" />
        <RefreshCw v-else class="w-5 h-5" />
      </div>
      <span class="text-sm font-bold font-mono text-white/80">{{ timer }}</span>
    </div>

    <!-- Content -->
    <h4 class="text-sm font-bold text-white mb-1">{{ title }}</h4>
    <span class="text-xs text-secondary-muted mb-0.5">Prize</span>
    <span class="text-lg font-bold" :class="isPurple ? 'text-primary' : 'text-white'">{{
      amount
    }}</span>

    <!-- CTA -->
    <button
      class="mt-3 w-full py-2 text-xs font-bold rounded-lg transition-all border"
      :class="
        isPurple
          ? 'border-primary text-primary hover:bg-primary hover:text-white'
          : 'border-white/20 text-white hover:bg-white/10'
      "
    >
      Join
    </button>
  </div>
</template>
