<template>
  <div class="relative">
    <TemplateHeaderMain
      class="inset-0 w-full z-10"
      :class="!scrollStatus ? 'absolute bg-transparent' : 'sticky bg-white/50 backdrop-blur'"
    />

    <main>
      <slot />
    </main>

    <footer>
      <TemplateFooterMain />
    </footer>
  </div>
</template>

<script lang="ts" setup>
const { y } = useWindowScroll()

// detect if user has scrolled
const scrollStatus = computed(() => {
  return y.value > 10
})
</script>
