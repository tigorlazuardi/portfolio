<script lang="ts">
  import { experiences } from '../data/content';
</script>

<section id="experience" class="py-24">
  <div class="max-w-3xl mx-auto px-6">
    <h2 class="font-mono text-overlay1 text-lg mb-8 italic">// experience</h2>

    <div class="space-y-6">
      {#each experiences as exp, i}
        <div class="bg-mantle border border-surface0 rounded-lg overflow-hidden">
          <div class="flex items-center gap-2 px-4 py-3 bg-crust border-b border-surface0">
            <span class="w-3 h-3 rounded-full bg-red"></span>
            <span class="w-3 h-3 rounded-full bg-yellow"></span>
            <span class="w-3 h-3 rounded-full bg-green"></span>
            <span class="ml-4 text-overlay0 text-sm font-mono">experience[{i}].ts</span>
          </div>

          <div class="p-6 font-mono text-sm leading-relaxed">
            <p>
              <span class="text-mauve">const</span>
              <span class="text-blue"> role</span>
              <span class="text-subtext0"> = </span>
              <span class="text-subtext0">{'{'}</span>
            </p>
            <p class="pl-6">
              <span class="text-teal">company</span><span class="text-subtext0">:</span>
              <span class="text-green"> "{exp.company}"</span><span class="text-subtext0">,</span>
            </p>
            <p class="pl-6">
              <span class="text-teal">title</span><span class="text-subtext0">:</span>
              <span class="text-green"> "{exp.role}"</span><span class="text-subtext0">,</span>
            </p>
            <p class="pl-6">
              <span class="text-teal">period</span><span class="text-subtext0">:</span>
              <span class="text-green"> "{exp.period}"</span><span class="text-subtext0">,</span>
            </p>
            <p class="pl-6">
              <span class="text-teal">highlights</span><span class="text-subtext0">: [</span>
            </p>
            {#each exp.highlights as highlight}
              <p class="pl-12">
                <span class="text-green">"{highlight}"</span><span class="text-subtext0">,</span>
              </p>
            {/each}
            <p class="pl-6"><span class="text-subtext0">],</span></p>
            <p><span class="text-subtext0">{'}'};</span></p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
