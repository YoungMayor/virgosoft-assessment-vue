<script setup lang="ts">
import { Home, Ticket, Trophy, User, Plus } from 'lucide-vue-next'

const navItems = [
  { icon: Home, label: 'Home', active: true },
  { icon: Ticket, label: 'Draws', active: false },
  // FAB takes the middle spot, handled separately
  { icon: Trophy, label: 'Winners', active: false },
  { icon: User, label: 'Profile', active: false },
]
</script>

<template>
  <div class="fixed bottom-6 left-4 right-4 z-40">
    <nav
      class="relative flex items-center justify-between px-6 py-4 bg-[#1a0b2e]/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-black/50"
    >
      <!-- Left Items -->
      <a
        v-for="item in navItems.slice(0, 2)"
        :key="item.label"
        href="#"
        class="flex flex-col items-center gap-1 transition-colors"
        :class="item.active ? 'text-primary' : 'text-white/40 hover:text-white'"
      >
        <component :is="item.icon" class="w-6 h-6" />
      </a>

      <!-- Spacer for FAB -->
      <div class="w-12"></div>

      <!-- Right Items -->
      <a
        v-for="item in navItems.slice(2)"
        :key="item.label"
        href="#"
        class="flex flex-col items-center gap-1 transition-colors"
        :class="item.active ? 'text-primary' : 'text-white/40 hover:text-white'"
      >
        <component :is="item.icon" class="w-6 h-6" />
      </a>

      <!-- Central FAB -->
      <div class="absolute left-1/2 -translate-x-1/2 -top-6">
        <button
          class="flex items-center justify-center w-14 h-14 bg-primary hover:bg-primary-hover text-white rounded-full shadow-lg shadow-primary/40 transition-transform active:scale-95 border-4 border-[#130722]"
        >
          <Plus class="w-7 h-7" />
        </button>
      </div>
    </nav>
  </div>
</template>
