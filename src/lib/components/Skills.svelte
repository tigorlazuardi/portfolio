<script lang="ts">
  import { skills } from '../data/content';
</script>

<section id="skills" class="py-24">
  <div class="max-w-3xl mx-auto px-6">
    <h2 class="font-mono text-overlay1 text-lg mb-8 italic">// skills</h2>

    <div class="bg-mantle border border-surface0 rounded-lg overflow-hidden">
      <div class="flex items-center gap-2 px-4 py-3 bg-crust border-b border-surface0">
        <span class="w-3 h-3 rounded-full bg-red"></span>
        <span class="w-3 h-3 rounded-full bg-yellow"></span>
        <span class="w-3 h-3 rounded-full bg-green"></span>
        <span class="ml-4 text-overlay0 text-sm font-mono">skills.json</span>
      </div>

      <div class="p-6 font-mono text-sm leading-relaxed">
        <p><span class="text-subtext0">{'{'}</span></p>

        {#each skills as category, i}
          <div class="pl-6 py-2">
            <p>
              <span class="text-teal">"{category.name.toLowerCase()}"</span><span class="text-subtext0">: [</span>
            </p>
            <div class="pl-6 flex flex-wrap gap-2 py-2">
              {#each category.items as item}
                <span class="inline-flex items-center px-3 py-1 rounded bg-surface0 border border-surface1 text-subtext1 text-xs hover:border-mauve hover:text-mauve transition-colors cursor-default">
                  {item}
                </span>
              {/each}
            </div>
            <p>
              <span class="text-subtext0">]{i < skills.length - 1 ? ',' : ''}</span>
            </p>
          </div>
        {/each}

        <p><span class="text-subtext0">{'}'}</span></p>
      </div>
    </div>
  </div>
</section>
