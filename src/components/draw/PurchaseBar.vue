<script setup lang="ts">
import { ref } from 'vue'
import { Minus, Plus } from 'lucide-vue-next'

const ticketCount = ref(1)

function increment() {
  ticketCount.value++
}

function decrement() {
  if (ticketCount.value > 1) ticketCount.value--
}
</script>

<template>
  <div
    class="fixed bottom-0 left-0 right-0 z-40 p-4 pb-8 bg-[#1a0b2e]/95 backdrop-blur-xl border-t border-white/10"
  >
    <div class="flex items-center justify-between gap-4 max-w-lg mx-auto">
      <!-- Quantity Selector -->
      <div class="flex items-center gap-3 bg-surface-lighter rounded-xl p-1 border border-white/10">
        <button
          @click="decrement"
          class="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
        >
          <Minus class="w-5 h-5" />
        </button>
        <span class="w-16 text-center font-bold text-white"
          >{{ ticketCount }} ticket{{ ticketCount > 1 ? 's' : '' }}</span
        >
        <button
          @click="increment"
          class="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
        >
          <Plus class="w-5 h-5" />
        </button>
      </div>

      <!-- Buy Button -->
      <button
        class="flex-1 py-3.5 px-6 font-bold text-white bg-gradient-to-r from-primary to-purple-600 rounded-xl shadow-lg shadow-primary/25 hover:opacity-90 active:scale-95 transition-all text-center"
      >
        Buy Ticket – ₺{{ ticketCount * 100 }}
      </button>
    </div>
  </div>
</template>
