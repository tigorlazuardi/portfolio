<script lang="ts">
  import { profile } from '../data/content';
</script>

<section id="contact" class="py-24">
  <div class="max-w-3xl mx-auto px-6">
    <h2 class="font-mono text-overlay1 text-lg mb-8 italic">// contact</h2>

    <div class="bg-mantle border border-surface0 rounded-lg overflow-hidden">
      <div class="flex items-center gap-2 px-4 py-3 bg-crust border-b border-surface0">
        <span class="w-3 h-3 rounded-full bg-red"></span>
        <span class="w-3 h-3 rounded-full bg-yellow"></span>
        <span class="w-3 h-3 rounded-full bg-green"></span>
        <span class="ml-4 text-overlay0 text-sm font-mono">contact.sh</span>
      </div>

      <div class="p-6 font-mono text-sm">
        <p class="text-overlay1 italic"># Let's connect!</p>
        <p class="text-overlay1 italic"># Feel free to reach out via email or LinkedIn</p>
        <p class="mt-4">&nbsp;</p>

        <div class="space-y-4">
          <a
            href="mailto:{profile.email}"
            class="flex items-center gap-4 p-4 rounded-lg bg-surface0 border border-surface1 hover:border-green transition-colors group"
          >
            <span class="text-green">$</span>
            <span class="text-subtext0">echo</span>
            <span class="text-green">"{profile.email}"</span>
            <span class="text-subtext0">|</span>
            <span class="text-blue">mail</span>
            <svg width="16" height="16" class="shrink-0 ml-auto text-overlay0 group-hover:text-green transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
            </svg>
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-4 p-4 rounded-lg bg-surface0 border border-surface1 hover:border-blue transition-colors group"
          >
            <span class="text-green">$</span>
            <span class="text-blue">open</span>
            <span class="text-green">"linkedin/tigor-hutasuhut"</span>
            <svg width="16" height="16" class="shrink-0 ml-auto text-overlay0 group-hover:text-blue transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
            </svg>
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-4 p-4 rounded-lg bg-surface0 border border-surface1 hover:border-lavender transition-colors group"
          >
            <span class="text-green">$</span>
            <span class="text-blue">git clone</span>
            <span class="text-green">"github.com/tigorlazuardi"</span>
            <svg width="16" height="16" class="shrink-0 ml-auto text-overlay0 group-hover:text-lavender transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
