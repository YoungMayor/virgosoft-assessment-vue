<script setup lang="ts">
import TopNavBar from '@/components/navigation/TopNavBar.vue'
import SideMenu from '@/components/navigation/SideMenu.vue'

/**
 * AppHeader: Wrapper for the Top Navigation and the Side Drawer.
 * Reusable across layouts that need the standard header/nav context.
 */
</script>

<template>
  <div class="sticky top-0">
    <TopNavBar />

    <SideMenu />
  </div>
</template>
