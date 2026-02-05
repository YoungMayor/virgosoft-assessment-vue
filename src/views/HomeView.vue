<script setup lang="ts">
import MobileLayout from '@/layouts/MobileLayout.vue'
import HeroSection from '@/components/home/HeroSection.vue'
import LiveDrawCard from '@/components/home/LiveDrawCard.vue'
import DrawCardSmall from '@/components/home/DrawCardSmall.vue'
</script>

<template>
  <MobileLayout>
    <div class="flex flex-col px-4 py-2 space-y-8">
      <HeroSection />

      <LiveDrawCard />

      <div class="grid grid-cols-2 gap-4 pb-8">
        <DrawCardSmall type="30min" timer="02:45" amount="₺2,272" />
        <DrawCardSmall type="1hour" timer="14:09" amount="₺4,096" />
      </div>
    </div>
  </MobileLayout>
</template>
