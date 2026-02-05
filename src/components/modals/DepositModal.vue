<script setup lang="ts">
import { ref } from 'vue'
import { useAppStore } from '@/stores/app'
import { Building2, Bitcoin } from 'lucide-vue-next'

const store = useAppStore()
const selectedOption = ref('bank') // 'bank' | 'crypto'

function selectOption(option: string) {
  selectedOption.value = option
}
</script>

<template>
  <div
    v-if="store.isDepositModalOpen"
    class="fixed inset-0 z-60 flex items-center justify-center p-4"
  >
    <!-- Backdrop -->
    <div
      @click="store.closeDepositModal"
      class="absolute inset-0 bg-black/60 backdrop-blur-sm"
    ></div>

    <!-- Modal Container -->
    <div
      class="relative w-full max-w-sm p-6 bg-surface border border-white/10 rounded-3xl shadow-2xl animate-in fade-in zoom-in duration-200"
    >
      <h2 class="text-xl font-bold text-center text-white mb-6">Deposit Funds</h2>

      <div class="space-y-4 mb-8">
        <!-- Bank Transfer Option -->
        <div
          @click="selectOption('bank')"
          class="flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all"
          :class="
            selectedOption === 'bank'
              ? 'bg-primary/10 border-primary'
              : 'bg-surface-lighter border-white/5 hover:bg-white/5'
          "
        >
          <div class="flex items-center gap-3">
            <div class="p-2 rounded-lg bg-primary/20 text-primary">
              <Building2 class="w-6 h-6" />
            </div>
            <div>
              <p class="font-bold text-white text-sm">Bank Transfer</p>
              <p class="text-xs text-secondary-muted">Via Turkish bank transfer</p>
            </div>
          </div>
          <div
            class="w-5 h-5 rounded-full border flex items-center justify-center"
            :class="selectedOption === 'bank' ? 'border-primary' : 'border-white/20'"
          >
            <div v-if="selectedOption === 'bank'" class="w-3 h-3 bg-primary rounded-full"></div>
          </div>
        </div>

        <!-- Crypto Option -->
        <div
          @click="selectOption('crypto')"
          class="flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all"
          :class="
            selectedOption === 'crypto'
              ? 'bg-primary/10 border-primary'
              : 'bg-surface-lighter border-white/5 hover:bg-white/5'
          "
        >
          <div class="flex items-center gap-3">
            <div class="p-2 rounded-lg bg-orange-500/20 text-orange-500">
              <Bitcoin class="w-6 h-6" />
            </div>
            <div>
              <p class="font-bold text-white text-sm">Crypto</p>
              <p class="text-xs text-secondary-muted">USDT, ETH, BTC</p>
            </div>
          </div>
          <div
            class="w-5 h-5 rounded-full border flex items-center justify-center"
            :class="selectedOption === 'crypto' ? 'border-primary' : 'border-white/20'"
          >
            <div v-if="selectedOption === 'crypto'" class="w-3 h-3 bg-primary rounded-full"></div>
          </div>
        </div>
      </div>

      <!-- Actions -->
      <div class="grid grid-cols-2 gap-4">
        <button
          @click="store.closeDepositModal"
          class="py-3 font-semibold text-white/70 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
        >
          Cancel
        </button>
        <button
          class="py-3 font-bold text-white bg-primary rounded-xl hover:bg-primary-hover shadow-lg shadow-primary/25 transition-all active:scale-95"
        >
          Continue
        </button>
      </div>
    </div>
  </div>
</template>
