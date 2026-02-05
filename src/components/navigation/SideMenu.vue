<script setup lang="ts">
import { useAppStore } from '@/stores/app'
import {
  Home,
  User,
  Trophy,
  BarChart2,
  Settings,
  HelpCircle,
  Info,
  LogOut,
  X,
} from 'lucide-vue-next'

const store = useAppStore()

const menuItems = [
  { label: 'Home', icon: Home, active: true },
  { label: 'Account', icon: User, active: false },
  { label: 'Winners', icon: Trophy, active: false },
  { label: 'Results', icon: BarChart2, active: false },
  { label: 'Settings', icon: Settings, active: false },
  { label: 'Help & Support', icon: HelpCircle, active: false },
  { label: 'About', icon: Info, active: false },
]
</script>

<template>
  <div class="fixed inset-0 z-99 flex" :class="{ 'pointer-events-none': !store.isSidebarOpen }">
    <div
      class="fixed inset-0 bg-black/60 transition-opacity duration-300"
      :class="
        store.isSidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      "
      @click="store.closeSidebar"
    ></div>

    <aside
      class="relative flex flex-col w-64 h-full bg-[#130722] border-r border-white/10 transform transition-transform duration-300 pointer-events-auto"
      :class="store.isSidebarOpen ? 'translate-x-0' : '-translate-x-full'"
    >
      <div class="flex items-center justify-between p-6 border-b border-white/5">
        <h2 class="text-xl font-bold text-white">Menu</h2>
        <button @click="store.closeSidebar" class="p-1 rounded-full hover:bg-white/5">
          <X class="w-5 h-5 text-white/70" />
        </button>
      </div>

      <div class="flex-1 overflow-y-auto py-4">
        <nav class="flex flex-col gap-1 px-4">
          <a
            v-for="item in menuItems"
            :key="item.label"
            href="#"
            class="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200"
            :class="
              item.active
                ? 'bg-primary/10 text-primary'
                : 'text-white/70 hover:bg-white/5 hover:text-white'
            "
          >
            <component :is="item.icon" class="w-5 h-5" />
            <span class="font-medium">{{ item.label }}</span>
          </a>
        </nav>
      </div>

      <div class="p-4 border-t border-white/5">
        <button
          class="flex items-center gap-3 w-full px-4 py-3 text-red-500 rounded-xl hover:bg-red-500/10 transition-colors"
        >
          <LogOut class="w-5 h-5" />
          <span class="font-medium">Log Out</span>
        </button>
      </div>

      <div class="p-6 pt-2 text-xs text-center text-white/30">
        <p>Lotogram v1.0.0</p>
        <p>© 2024 All rights reserved</p>
      </div>
    </aside>
  </div>
</template>
