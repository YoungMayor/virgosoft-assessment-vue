<script setup lang="ts">
import AppHeader from '@/components/navigation/AppHeader.vue'
import DrawHeader from '@/components/draw/DrawHeader.vue'
import MainDrawCard from '@/components/draw/MainDrawCard.vue'
import LiveChat from '@/components/draw/LiveChat.vue'
import PurchaseBar from '@/components/draw/PurchaseBar.vue'
</script>

<template>
  <div class="relative min-h-screen bg-background-start flex flex-col">
    <AppHeader />

    <div class="px-4 py-3 bg-background-start/90 border-b border-white/5">
      <DrawHeader activeTab="15 Minute Draw" />
    </div>

    <main class="flex-1 px-4 py-6 pb-32 space-y-6 overflow-y-auto">
      <MainDrawCard />

      <LiveChat />
    </main>

    <PurchaseBar />
  </div>
</template>
