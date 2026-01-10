<script lang="ts">
  import { about } from '../data/content';
</script>

<section id="about" class="py-24">
  <div class="max-w-3xl mx-auto px-6">
    <h2 class="font-mono text-overlay1 text-lg mb-8 italic">// about</h2>

    <div class="bg-mantle border border-surface0 rounded-lg overflow-hidden">
      <div class="flex items-center gap-2 px-4 py-3 bg-crust border-b border-surface0">
        <span class="w-3 h-3 rounded-full bg-red"></span>
        <span class="w-3 h-3 rounded-full bg-yellow"></span>
        <span class="w-3 h-3 rounded-full bg-green"></span>
        <span class="ml-4 text-overlay0 text-sm font-mono">about.md</span>
      </div>

      <div class="p-6">
        <p class="text-subtext1 leading-relaxed whitespace-pre-line">{about.bio}</p>

        <div class="mt-8">
          <p class="font-mono text-sm text-overlay1 mb-4 italic">/* focus areas */</p>
          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {#each about.highlights as highlight}
              <li class="flex items-center gap-3 text-subtext0 font-mono text-sm">
                <span class="text-green">$</span>
                {highlight}
              </li>
            {/each}
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
