<script setup lang="ts">
import MobileLayout from '@/layouts/MobileLayout.vue'
import DrawHeader from '@/components/draw/DrawHeader.vue'
import MainDrawCard from '@/components/draw/MainDrawCard.vue'
import LiveChat from '@/components/draw/LiveChat.vue'
import PurchaseBar from '@/components/draw/PurchaseBar.vue'
</script>

<template>
  <div class="min-h-screen bg-background-start flex flex-col">
    <!-- Using a simplified layout or just styles as this overrides standard MobileLayout navs perhaps?
         Spec says: "Top Tabs", "Bottom Purchase Bar (Fixed)".
         It implies a slightly different layout than Home.
         But typically we keep the TopBar.
         However, the purchase bar might conflict with BottomNavBar.
         Let's assume this view HAS its own navigation flow or replaces parts.
         But to be safe and consistent, we can wrapp it.
         The Purchase Bar says "Fixed at bottom", so it probably replaces the BottomNavBar in this view.
    -->

    <!-- Custom Top Bar for Detail? Or reuse? Spec just says "Top Tabs". -->
    <!-- Let's keep TopNavBar from MobileLayout but hide BottomNavBar? -->

    <!-- For simplicity, I'll build the page content.
         If I use MobileLayout, I get BottomNavBar.
         The PurchaseBar is likely overlaying or replacing it.
         I'll not use MobileLayout here, but rebuild the necessary parts or custom layout.
         Actually, let's include TopNavBar manually.
    -->
    <header
      class="sticky top-0 z-30 px-4 py-3 bg-[#1a0b2e]/90 backdrop-blur-md border-b border-white/5"
    >
      <DrawHeader activeTab="15 Minute Draw" />
    </header>

    <main class="flex-1 px-4 py-6 pb-32 space-y-6 overflow-y-auto">
      <MainDrawCard />
      <LiveChat />
    </main>

    <PurchaseBar />
  </div>
</template>
