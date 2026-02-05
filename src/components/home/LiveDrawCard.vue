<script setup lang="ts">
import { Clock } from 'lucide-vue-next'
import { useRouter } from 'vue-router'

const router = useRouter()

function goToDetail() {
  router.push('/draw/15min')
}

/**
 * LiveDrawCard: The primary "Fast Draw" card.
 */
</script>

<template>
  <div
    @click="goToDetail"
    class="relative w-full p-5 overflow-hidden rounded-3xl bg-secondary/20 border border-secondary/30 backdrop-blur-sm shadow-xl shadow-secondary/10 cursor-pointer hover:border-secondary/50 transition-all active:scale-[0.98]"
  >
    <!-- Background Gradient Decoration -->
    <div class="absolute -top-10 -right-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl"></div>

    <!-- Header -->
    <div class="flex items-center justify-between mb-3">
      <span class="text-xs font-bold tracking-widest text-secondary-muted uppercase"
        >Fast Draw</span
      >
      <div
        class="flex items-center gap-1.5 px-2 py-1 rounded-full bg-red-500/10 border border-red-500/20"
      >
        <span class="relative flex w-2 h-2">
          <span
            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"
          ></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
        </span>
        <span class="text-[10px] font-bold text-red-400 uppercase">Live</span>
      </div>
    </div>

    <!-- Title -->
    <h3 class="text-xl font-bold text-white mb-4">15 MINUTE DRAW</h3>

    <!-- Info Row -->
    <div class="grid grid-cols-2 gap-4 mb-5">
      <!-- Time -->
      <div class="flex flex-col">
        <span class="text-xs font-medium text-secondary-muted mb-1">Time Remaining</span>
        <div class="flex items-center gap-2">
          <Clock class="w-5 h-5 text-accent-gold" />
          <span class="text-2xl font-bold text-accent-gold font-mono tracking-wider">03:54</span>
        </div>
      </div>
      <!-- Prize -->
      <div class="flex flex-col items-end">
        <span class="text-xs font-medium text-secondary-muted mb-1">Total Prize</span>
        <span class="text-2xl font-bold text-white tracking-tight">₺12,450</span>
      </div>
    </div>

    <!-- CTA Area -->
    <div
      class="flex items-center justify-between p-1 pl-4 bg-black/20 rounded-2xl border border-white/5"
    >
      <div class="flex flex-col">
        <span class="text-[10px] font-medium text-white/50">80% Winner Share</span>
        <span class="text-lg font-bold text-primary">₺9,960</span>
      </div>

      <button
        class="px-6 py-3 font-bold text-white bg-gradient-to-r from-primary to-purple-600 rounded-xl hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-primary/25"
      >
        Buy Ticket
      </button>
    </div>
  </div>
</template>
