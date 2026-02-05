<script setup lang="ts">
/**
 * MainDrawCard: Detail view of the draw.
 */
</script>

<template>
  <div class="p-6 rounded-3xl bg-[#130722] border border-white/5 shadow-xl">
    <h3 class="text-xl font-bold text-white mb-6 text-center">15 Minute Draw</h3>

    <!-- Timer Circles -->
    <div class="flex items-center justify-center gap-4 mb-8">
      <div class="flex flex-col items-center gap-2">
        <div
          class="flex items-center justify-center w-16 h-16 rounded-2xl bg-surface-lighter border border-white/10"
        >
          <span class="text-2xl font-bold font-mono text-white">03</span>
        </div>
        <span class="text-[10px] font-bold text-secondary-muted uppercase tracking-wider"
          >Minutes</span
        >
      </div>
      <div class="text-2xl font-bold text-white/20">:</div>
      <div class="flex flex-col items-center gap-2">
        <div
          class="flex items-center justify-center w-16 h-16 rounded-2xl bg-surface-lighter border border-white/10"
        >
          <span class="text-2xl font-bold font-mono text-white">54</span>
        </div>
        <span class="text-[10px] font-bold text-secondary-muted uppercase tracking-wider"
          >Seconds</span
        >
      </div>
    </div>

    <!-- Prize -->
    <div class="flex flex-col items-center mb-8 space-y-1">
      <span class="text-xs font-medium text-secondary-muted">Total Prize</span>
      <span class="text-4xl font-black text-accent-gold tracking-tight shadow-glow-gold"
        >₺17,650</span
      >
    </div>

    <!-- Progress Bar -->
    <div class="space-y-2">
      <div class="h-3 w-full bg-surface-lighter rounded-full overflow-hidden">
        <div
          class="h-full bg-primary w-[82%] rounded-full shadow-[0_0_10px_rgba(217,70,239,0.5)]"
        ></div>
      </div>
      <div class="flex justify-between text-xs font-medium px-1">
        <span class="text-white/60">220 tickets sold</span>
        <span class="text-primary">82% filled</span>
      </div>
    </div>
  </div>
</template>
