import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
  const isSidebarOpen = ref(false)
  const isDepositModalOpen = ref(false)
  const userBalance = ref(1250.5)

  function toggleSidebar() {
    isSidebarOpen.value = !isSidebarOpen.value
  }

  function closeSidebar() {
    isSidebarOpen.value = false
  }

  function openDepositModal() {
    isDepositModalOpen.value = true
  }

  function closeDepositModal() {
    isDepositModalOpen.value = false
  }

  return {
    isSidebarOpen,
    isDepositModalOpen,
    userBalance,
    toggleSidebar,
    closeSidebar,
    openDepositModal,
    closeDepositModal,
  }
})
