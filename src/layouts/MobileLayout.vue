<script setup lang="ts">
import TopNavBar from '@/components/navigation/TopNavBar.vue'
import BottomNavBar from '@/components/navigation/BottomNavBar.vue'
import SideMenu from '@/components/navigation/SideMenu.vue'
import DepositModal from '@/components/modals/DepositModal.vue'

/**
 * MobileLayout: The main shell for the application.
 * Includes TopBar, SideDrawer, and Floating BottomBar.
 */
</script>

<template>
  <div class="relative min-h-screen bg-background-start flex flex-col">
    <TopNavBar />

    <SideMenu />

    <main class="flex-1 pb-28 overview-hidden">
      <slot />
    </main>

    <BottomNavBar />

    <DepositModal />
  </div>
</template>
