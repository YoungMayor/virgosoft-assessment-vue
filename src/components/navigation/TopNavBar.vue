<script setup lang="ts">
import { Menu, Bell } from 'lucide-vue-next'
import { useAppStore } from '@/stores/app'

const store = useAppStore()
</script>

<template>
  <header
    class="sticky top-0 z-30 flex items-center justify-between px-4 py-3 bg-background-start/90 backdrop-blur-md border-b border-white/5"
  >
    <div class="flex items-center gap-3">
      <button
        @click="store.toggleSidebar"
        class="flex items-center justify-center w-10 h-10 rounded-full bg-linear-to-br from-primary/20 to-primary/5 active:scale-95 transition-transform"
      >
        <Menu class="w-6 h-6 text-white" />
      </button>
      <h1 class="text-xl font-bold tracking-tight text-white">Lotogram</h1>
    </div>

    <div class="flex items-center gap-3">
      <div
        class="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-lighter/50 border border-white/5"
      >
        <span class="text-xs font-medium text-secondary-muted">Balance:</span>

        <span class="text-sm font-bold text-white">
          ₺{{ store.userBalance.toLocaleString() }}
        </span>
      </div>

      <button class="relative p-2 rounded-full border border-white/10 hover:bg-white/5">
        <Bell class="w-5 h-5 text-white" />

        <span
          class="absolute top-1 right-1 flex items-center justify-center w-4 h-4 text-[10px] font-bold text-white bg-red-500 rounded-full"
        >
          2
        </span>
      </button>
    </div>
  </header>
</template>
