<script setup lang="ts">
import type { Draw } from '@/lib/data/draws'

defineProps<{
  draw: Draw
}>()
</script>

<template>
  <div class="p-6 rounded-3xl bg-surface-lighter border border-white/5 shadow-xl">
    <h3 class="text-xl font-bold text-white mb-6 text-center">{{ draw.title }}</h3>

    <div class="grid grid-cols-2 gap-4 mb-8">
      <div class="flex flex-col items-center justify-center border-white/5 pr-2">
        <span class="font-medium text-secondary-muted mb-2"> Time Remaining </span>

        <div class="flex items-center gap-2">
          <!-- Mock timer circles for now, logic could be added per draw.timer -->
          <div class="flex flex-col items-center gap-1">
            <div
              class="flex items-center justify-center w-12 h-12 rounded-xl bg-surface-lighter border border-white/10"
            >
              <span class="text-xl font-bold font-mono text-white"> 03 </span>
            </div>

            <span class="text-xs font-bold text-secondary-muted uppercase"> Min </span>
          </div>

          <div class="text-xl font-bold text-white/20 pb-4">:</div>

          <div class="flex flex-col items-center gap-1">
            <div
              class="flex items-center justify-center w-12 h-12 rounded-xl bg-surface-lighter border border-white/10"
            >
              <span class="text-xl font-bold font-mono text-white">54</span>
            </div>

            <span class="text-xs font-bold text-secondary-muted uppercase">Sec</span>
          </div>
        </div>
      </div>

      <div class="flex flex-col items-center justify-center pl-2">
        <span class="font-medium text-secondary-muted mb-2"> Total Prize </span>

        <div class="flex flex-col items-center justify-center">
          <span class="text-2xl font-black text-accent-gold tracking-tight">
            {{ draw.prize }}
          </span>
        </div>
      </div>
    </div>

    <div class="space-y-2">
      <div class="h-3 w-full bg-surface-lighter rounded-full overflow-hidden">
        <div
          class="h-full bg-primary rounded-full shadow-[0_0_10px_rgba(217,70,239,0.5)]"
          :style="{ width: `${draw.progress}%` }"
        ></div>
      </div>

      <div class="flex justify-between text-xs font-medium px-1">
        <span class="text-white/60"> {{ draw.participants }} tickets sold </span>
        <span class="text-primary"> {{ draw.progress }}% filled </span>
      </div>
    </div>
  </div>
</template>
