<script setup>
useHead({
  title: "toolbox",
});
</script>

<template>
  <div class="flex-1 flex flex-col justify-center space-y-16">
    <div class="text-center space-y-6 mt-8 mb-12">
      <h1
        class="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-yellow-200 to-yellow-400 bg-clip-text text-transparent"
      >
        meeows toolbox
      </h1>
      <p class="text-lg text-gray-300 max-w-2xl mx-auto">
        all the shit you need to turn your fever dreams into actual things. no
        hidden catches, just pure creative chaos unleashed.
      </p>
    </div>

    <section id="resources" class="max-w-5xl mx-auto w-full">
      <div class="grid md:grid-cols-3 gap-8">
        <div class="p-6 border border-gray-800 bg-black/30 rounded-lg">
          <div
            class="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-600/30 transition-colors"
          >
            <Icon name="lucide:sticker" :size="24" class="text-purple-400" />
          </div>
          <h3 class="text-lg font-semibold text-white mb-2">stickers</h3>
          <p class="text-gray-400 mb-4">
            slap some meeows stickers on everything you own. your laptop
            deserves to look as cool as your code. show the world you're one of
            the weird ones.
          </p>
          <div class="mt-4">
            <span
              class="px-3 py-1 bg-gray-800 text-gray-400 text-sm rounded-full"
              >coming soon-ish</span
            >
          </div>
        </div>

        <div class="p-6 border border-gray-800 bg-black/30 rounded-lg">
          <div
            class="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600/30 transition-colors"
          >
            <Icon name="lucide:globe" :size="24" class="text-blue-400" />
          </div>
          <h3 class="text-lg font-semibold text-white mb-2">dns</h3>
          <p class="text-gray-400 mb-4">
            grab yourself a free meeows.net subdomain because your batshit
            brilliant project deserves better than a generic netlify url. plant
            your flag in our digital soil.
          </p>
          <div class="mt-4">
            <a
              href="https://github.com/meeowscloud/dns"
              target="_blank"
              rel="noopener noreferrer"
              class="px-3 py-1 bg-blue-700/30 hover:bg-blue-700/50 text-blue-300 hover:text-blue-200 text-sm rounded-full transition-colors"
            >
              yoink one now
            </a>
          </div>
        </div>

        <div class="p-6 border border-gray-800 bg-black/30 rounded-lg">
          <div
            class="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-600/30 transition-colors"
          >
            <Icon name="lucide:pizza" :size="24" class="text-red-400" />
          </div>
          <h3 class="text-lg font-semibold text-white mb-2">pizza money</h3>
          <p class="text-gray-400 mb-4">
            ship something and we'll toss you 5€ for pizza. because nobody
            should code hungry and we all know the best commits happen at 2am
            with grease on your keyboard.
          </p>
          <div class="mt-4">
            <span
              class="px-3 py-1 bg-red-700/30 hover:bg-red-700/50 text-red-300 hover:text-red-200 text-sm rounded-full transition-colors"
            >
              for the cool ones
            </span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
