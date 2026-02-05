<script setup lang="ts">
import AppHeader from '@/components/navigation/AppHeader.vue'
import BottomNavBar from '@/components/navigation/BottomNavBar.vue'
import DepositModal from '@/components/modals/DepositModal.vue'
</script>

<template>
  <div class="relative min-h-screen bg-background-start flex flex-col">
    <AppHeader />

    <main class="flex-1 pb-28 overview-hidden max-w-[540px] mx-auto w-full">
      <slot />
    </main>

    <BottomNavBar />

    <DepositModal />
  </div>
</template>
