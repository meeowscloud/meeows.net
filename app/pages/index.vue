<template>
  <div class="flex-1 flex flex-col justify-center space-y-16">
    <div class="text-center space-y-8 mt-12 mb-16">
      <div class="space-y-6">
        <h1
          class="text-6xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent mb-8"
        >
          meeows collective
        </h1>

        <h2
          class="text-2xl md:text-4xl text-gray-200 font-light tracking-wide mb-8 max-w-4xl mx-auto leading-tight"
        >
          dream it. build it. we back it.
        </h2>

        <p class="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          we built this weird little corner of the internet for the dreamers.
          the folks with fire in their bellies and ideas that keep them up at
          night. no fancy degrees needed, no insider connections, no bullshit
          gatekeeping. just raw creativity and the guts to do something with it.
        </p>
      </div>
    </div>

    <section class="grid md:grid-cols-2 gap-12 my-16">
      <div class="space-y-6">
        <h3
          class="text-2xl font-semibold text-white border-l-4 border-purple-500 pl-4"
        >
          what we're about
        </h3>
        <ul class="space-y-4">
          <li class="flex gap-3 items-start">
            <div
              class="w-6 h-6 rounded-full bg-purple-600/30 flex items-center justify-center flex-shrink-0 mt-1"
            >
              <Icon name="lucide:check" :size="14" class="text-purple-400" />
            </div>
            <p class="text-gray-300">
              <span class="text-white font-medium"
                >open source is a vibe, not just code</span
              >
              — it's our rebellion against closed systems. it's about making
              shit weirder, better, and putting it back into the world for
              everyone to mess with
            </p>
          </li>
          <li class="flex gap-3 items-start">
            <div
              class="w-6 h-6 rounded-full bg-purple-600/30 flex items-center justify-center flex-shrink-0 mt-1"
            >
              <Icon name="lucide:check" :size="14" class="text-purple-400" />
            </div>
            <p class="text-gray-300">
              <span class="text-white font-medium"
                >we don't do secrets here</span
              >
              — everything's on the table. our code, our decisions, our fuckups.
              radical transparency isn't just talk, it's how we breathe
            </p>
          </li>
          <li class="flex gap-3 items-start">
            <div
              class="w-6 h-6 rounded-full bg-purple-600/30 flex items-center justify-center flex-shrink-0 mt-1"
            >
              <Icon name="lucide:check" :size="14" class="text-purple-400" />
            </div>
            <p class="text-gray-300">
              <span class="text-white font-medium"
                >egos can fuck right off</span
              >
              — we're not here to compete, we're here to make each other's shit
              better. when one of us wins, we all win. full stop.
            </p>
          </li>
          <li class="flex gap-3 items-start">
            <div
              class="w-6 h-6 rounded-full bg-purple-600/30 flex items-center justify-center flex-shrink-0 mt-1"
            >
              <Icon name="lucide:check" :size="14" class="text-purple-400" />
            </div>
            <p class="text-gray-300">
              <span class="text-white font-medium">no suits allowed</span> — we
              don't answer to silicon valley bros, venture capitalists, or
              anyone in a tie. your vision, your rules, forever and always.
            </p>
          </li>
        </ul>
      </div>

      <div
        class="p-1 border border-gray-800 rounded-lg bg-gradient-to-br from-purple-500/10 to-blue-500/10"
      >
        <div
          class="p-6 border border-gray-800 rounded-lg bg-black/50 backdrop-blur-sm h-full"
        >
          <div class="text-sm text-gray-500 mb-3 font-mono">
            // why the hell we exist
          </div>
          <div class="text-xl text-white font-light leading-relaxed">
            <p class="mb-4">
              because the world's drowning in critics but starving for makers
            </p>
            <p class="mb-4">
              because brilliant ideas die every day in the "someday" graveyard
            </p>
            <p class="mb-6">
              because we're tired of watching amazing people get ignored because
              they don't fit someone else's mold
            </p>
            <p class="text-purple-400">everyone deserves their shot</p>
            <p class="text-purple-300 font-medium mt-2">
              this one's yours. take it.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="grid md:grid-cols-3 gap-8 my-16">
      <div
        class="group p-6 rounded-xl border border-gray-800 bg-gray-900/30 hover:bg-gray-900/50 transition-all duration-300 hover:border-purple-700/50"
      >
        <div
          class="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-600/30 transition-colors"
        >
          <Icon name="lucide:lightbulb" :size="24" class="text-purple-400" />
        </div>
        <h3 class="text-lg font-semibold text-white mb-2">bring your chaos</h3>
        <p class="text-gray-400 text-sm leading-relaxed">
          the stranger your idea, the better. we're not looking for the next
          cookie-cutter startup. we want the shit that makes people tilt their
          heads and say "wait, what?" those are the projects worth backing.
        </p>
      </div>

      <div
        class="group p-6 rounded-xl border border-gray-800 bg-gray-900/30 hover:bg-gray-900/50 transition-all duration-300 hover:border-purple-700/50"
      >
        <div
          class="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600/30 transition-colors"
        >
          <Icon name="lucide:code" :size="24" class="text-blue-400" />
        </div>
        <h3 class="text-lg font-semibold text-white mb-2">find your crew</h3>
        <p class="text-gray-400 text-sm leading-relaxed">
          staring at a screen alone sucks. bring your coding questions,
          half-baked projects, or just your caffeine-fueled self to our hack
          nights and gaming sessions. we're better together than doom-scrolling
          alone.
        </p>
      </div>

      <div
        class="group p-6 rounded-xl border border-gray-800 bg-gray-900/30 hover:bg-gray-900/50 transition-all duration-300 hover:border-purple-700/50"
      >
        <div
          class="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-600/30 transition-colors"
        >
          <Icon
            name="lucide:heart-handshake"
            :size="24"
            class="text-green-400"
          />
        </div>
        <h3 class="text-lg font-semibold text-white mb-2">own your shit</h3>
        <p class="text-gray-400 text-sm leading-relaxed">
          whatever we build together belongs to everyone. steal it, twist it,
          break it, rebuild it. no legal bullshit or corporate speak here—just
          simple promises we actually intend to keep.
        </p>
      </div>
    </section>

    <section class="max-w-5xl mx-auto w-full my-10 px-4">
      <div class="p-6 border border-gray-800 bg-black/30 rounded-lg">
        <h3 class="text-xl font-semibold text-white mb-4">
          shit we're working on
        </h3>
        <ul class="space-y-3 text-gray-300">
          <li class="flex items-center gap-2">
            <Icon
              name="lucide:arrow-right"
              :size="16"
              class="text-yellow-400"
            />
            becoming a registered nonprofit - because we're not in this for
            lambos and stock options
          </li>
          <li class="flex items-center gap-2">
            <Icon
              name="lucide:arrow-right"
              :size="16"
              class="text-yellow-400"
            />
            getting our own autonomous system number - only true ones will
            understand why that's cool
          </li>
          <li class="flex items-center gap-2">
            <Icon
              name="lucide:arrow-right"
              :size="16"
              class="text-yellow-400"
            />
            whatever wild idea you bring to the table - this whole thing is
            community-powered, so tell us what to build next
          </li>
        </ul>
      </div>
    </section>

    <section class="my-16 text-center">
      <div
        class="border border-gray-800 rounded-lg bg-black/50 p-12 relative overflow-hidden"
      >
        <div
          class="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-30"
        ></div>
        <div class="relative z-10">
          <h3 class="text-3xl font-bold text-white mb-4">
            ready to get weird with us?
          </h3>
          <p class="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            let's build the kind of future that doesn't just think outside the
            box—it burns the damn box.
          </p>
          <a
            href="https://github.com/meeowscloud"
            class="inline-flex items-center px-8 py-3 bg-white text-black rounded-md hover:bg-purple-200 transition-all duration-300 font-medium"
          >
            i'm in
            <Icon name="lucide:arrow-right" :size="18" class="ml-2" />
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
