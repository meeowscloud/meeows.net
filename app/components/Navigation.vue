<script lang="ts" setup>
const isMobileMenuOpen = ref(false);

const items = [{ name: "toolbox", href: "/toolbox" }];

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};
</script>
<template>
  <!-- desktop -->
  <nav
    class="hidden md:block sticky top-0 left-0 right-0 z-50 border-b bg-black border-gray-800"
  >
    <div class="max-w-6xl mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <a href="/" class="hover:underline decoration-1 underline-offset-4"
          >meeows</a
        >

        <div class="flex items-center space-x-8">
          <a
            v-for="item in items"
            :key="item.name"
            :href="item.href"
            class="hover:underline decoration-1 underline-offset-4 transition-all duration-200"
            >{{ item.name }}</a
          >
        </div>
      </div>
    </div>
  </nav>

  <!-- mobile -->
  <nav
    class="md:hidden sticky bg-black top-0 left-0 right-0 z-50 border-b border-gray-800"
  >
    <div class="px-4 py-4">
      <div class="flex items-center justify-between">
        <a
          href="/"
          class="hover:underline decoration-1 underline-offset-4"
          @click="closeMobileMenu"
          >meeows</a
        >

        <button
          @click="toggleMobileMenu"
          class="hover:underline decoration-1 underline-offset-4"
          aria-label="Toggle navigation menu"
        >
          <span v-if="isMobileMenuOpen">[close]</span>
          <span v-else>[menu]</span>
        </button>
      </div>
    </div>

    <div v-if="isMobileMenuOpen" class="border-t border-gray-800">
      <div class="px-4 py-3 space-y-2">
        <a
          v-for="item in items"
          :key="item.name"
          :href="item.href"
          @click="closeMobileMenu"
          class="block hover:underline decoration-1 underline-offset-4 transition-all duration-200"
          >→ {{ item.name }}</a
        >
      </div>
    </div>
  </nav>
  <div className="h-16 md:h-20" />
</template>
