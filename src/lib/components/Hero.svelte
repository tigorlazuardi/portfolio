<script lang="ts">
  import { profile } from '../data/content';
</script>

<section class="min-h-screen flex items-center justify-center pt-16">
  <div class="max-w-3xl mx-auto px-6 py-20">
    <div class="bg-mantle border border-surface0 rounded-lg overflow-hidden font-mono">
      <!-- Terminal header -->
      <div class="flex items-center gap-2 px-4 py-3 bg-crust border-b border-surface0">
        <span class="w-3 h-3 rounded-full bg-red"></span>
        <span class="w-3 h-3 rounded-full bg-yellow"></span>
        <span class="w-3 h-3 rounded-full bg-green"></span>
        <span class="ml-4 text-overlay0 text-sm">profile.ts</span>
      </div>

      <!-- Code content -->
      <div class="p-6 text-sm leading-relaxed">
        <p class="text-overlay1 italic">// {profile.tagline}</p>
        <p class="mt-4">
          <span class="text-mauve">const</span>
          <span class="text-blue"> developer</span>
          <span class="text-subtext0"> = </span>
          <span class="text-subtext0">{'{'}</span>
        </p>
        <p class="pl-6">
          <span class="text-teal">name</span><span class="text-subtext0">:</span>
          <span class="text-green"> "{profile.name}"</span><span class="text-subtext0">,</span>
        </p>
        <p class="pl-6">
          <span class="text-teal">role</span><span class="text-subtext0">:</span>
          <span class="text-green"> "{profile.role}"</span><span class="text-subtext0">,</span>
        </p>
        <p class="pl-6">
          <span class="text-teal">available</span><span class="text-subtext0">:</span>
          <span class="text-peach"> true</span><span class="text-subtext0">,</span>
        </p>
        <p><span class="text-subtext0">{'}'};</span></p>
      </div>
    </div>

    <!-- Social links -->
    <div class="flex items-center justify-center gap-6 mt-8">
      <a
        href={profile.github}
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center gap-2 text-subtext0 hover:text-green transition-colors font-mono text-sm"
      >
        <svg width="20" height="20" class="shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
        github
      </a>
      <a
        href={profile.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center gap-2 text-subtext0 hover:text-blue transition-colors font-mono text-sm"
      >
        <svg width="20" height="20" class="shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
        linkedin
      </a>
      <a
        href="mailto:{profile.email}"
        class="flex items-center gap-2 text-subtext0 hover:text-peach transition-colors font-mono text-sm"
      >
        <svg width="20" height="20" class="shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
        email
      </a>
    </div>
  </div>
</section>
