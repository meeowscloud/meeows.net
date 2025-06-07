<template>
  <footer class="border-t border-gray-800 bg-black/50 backdrop-blur-sm">
    <div class="max-w-6xl mx-auto px-6 py-16">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div class="space-y-4">
          <h4
            class="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4"
          >
            meeows
          </h4>
          <nav class="space-y-2">
            <a
              href="#"
              class="block text-sm text-gray-400 hover:text-purple-400 transition-colors duration-200"
            >
              manifesto
            </a>
            <a
              href="#"
              class="block text-sm text-gray-400 hover:text-purple-400 transition-colors duration-200"
            >
              branding
            </a>
          </nav>
        </div>

        <div class="space-y-4">
          <h4
            class="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4"
          >
            resources
          </h4>
          <nav class="space-y-2">
            <a
              href="/toolbox"
              class="block text-sm text-gray-400 hover:text-purple-400 transition-colors duration-200"
            >
              toolbox
            </a>
            <a
              href="https://github.com/meeowscloud/.github/blob/main/CODE_OF_CONDUCT.md"
              target="_blank"
              rel="noopener noreferrer"
              class="block text-sm text-gray-400 hover:text-purple-400 transition-colors duration-200"
            >
              code of conduct
            </a>
          </nav>
        </div>

        <div
          class="space-y-4 flex flex-col justify-center items-center md:items-center h-full"
        >
          <div class="flex items-center gap-6 pt-4 md:pt-8">
            <a
              href="https://github.com/meeowscloud"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-400 hover:text-purple-400 transition-colors duration-200"
            >
              <Icon name="lucide:github" :size="24" />
            </a>
            <a
              href="mailto:hi@meeows.net"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-400 hover:text-purple-400 transition-colors duration-200"
            >
              <Icon name="lucide:mail" :size="24" />
            </a>
          </div>
        </div>
      </div>
      <div class="pt-8 border-t border-gray-800">
        <div
          class="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div class="text-sm text-gray-400">
            &copy; {{ new Date().getFullYear() }} meeows collective
          </div>
          <div class="flex items-center gap-2 text-sm text-gray-400">
            <span>built with</span>
            <Icon name="lucide:heart" :size="14" class="text-purple-400" />
            <span>and an unhealthy amount of</span>
            <Icon name="lucide:coffee" :size="14" class="text-yellow-400" />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
