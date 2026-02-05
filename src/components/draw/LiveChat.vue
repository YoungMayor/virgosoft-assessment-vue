<script setup lang="ts">
import { Smile } from 'lucide-vue-next'

const messages = [
  { id: 1, user: 'Emre_06', text: 'Good luck everyone!', type: 'user' },
  { id: 2, user: 'System', text: 'Emre_06 bought 30 tickets', type: 'system' },
  { id: 3, user: 'AyseK', text: 'Hoping for the big win today! 🤞', type: 'user' },
  { id: 4, user: 'Mehmet', text: 'Almost time!', type: 'user' },
]
</script>

<template>
  <div class="bg-surface-lighter p-6 rounded-3xl bg-card border border-white/5 shadow-xl">
    <div class="flex flex-col h-[400px]">
      <div class="flex items-center justify-between mb-4 px-2">
        <div class="flex items-center gap-2">
          <span class="relative flex w-2 h-2">
            <span
              class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
            ></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span class="text-sm font-bold text-white"> Live Chat </span>
        </div>
        <span class="text-xs font-medium text-white/50"> 1,245 Active Users </span>
      </div>

      <div class="flex-1 overflow-y-auto space-y-3 px-2 mb-4 scrollbar-hide">
        <template v-for="msg in messages" :key="msg.id">
          <div v-if="msg.type === 'system'" class="flex justify-center my-2">
            <div class="px-3 py-1 bg-primary/20 text-primary text-xs font-bold rounded-full">
              {{ msg.text }}
            </div>
          </div>

          <div v-else class="flex flex-col items-start max-w-[80%]">
            <div
              class="px-4 py-2 bg-surface-lighter rounded-2xl rounded-tl-none border border-white/5 text-sm text-white/90"
            >
              <span class="block text-[10px] font-bold text-white/40 mb-0.5">
                {{ msg.user }}
              </span>

              <span>
                {{ msg.text }}
              </span>
            </div>
          </div>
        </template>
      </div>

      <div class="relative mt-auto">
        <input
          type="text"
          placeholder="Send a message"
          class="w-full pl-4 pr-12 py-3 bg-surface-lighter/50 border border-white/10 rounded-xl text-sm text-white placeholder-white/30 focus:outline-none focus:border-primary/50 transition-colors"
        />

        <div class="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
          <button class="p-1.5 text-white/40 hover:text-white transition-colors">
            <Smile class="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
