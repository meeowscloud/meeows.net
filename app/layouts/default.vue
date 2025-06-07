<template>
  <div class="bg-black text-white font-sans min-h-screen flex flex-col">
    <Navigation />
    <main class="flex-1 flex flex-col max-w-6xl mx-auto px-6 py-12 w-full">
      <slot />
    </main>
    <Footer />
  </div>
</template>
