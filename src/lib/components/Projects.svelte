<script lang="ts">
  import { projects } from '../data/content';

  const statusColors: Record<string, string> = {
    active: 'text-green border-green',
    maintained: 'text-blue border-blue',
    archived: 'text-overlay0 border-overlay0',
  };

  const statusLabels: Record<string, string> = {
    active: 'actively developing',
    maintained: 'maintained',
    archived: 'archived',
  };
</script>

<section id="projects" class="py-24">
  <div class="max-w-3xl mx-auto px-6">
    <h2 class="font-mono text-overlay1 text-lg mb-8 italic">// projects</h2>

    <div class="space-y-6">
      {#each projects as project}
        <div class="bg-mantle border border-surface0 rounded-lg overflow-hidden">
          <div class="flex items-center gap-2 px-4 py-3 bg-crust border-b border-surface0">
            <span class="w-3 h-3 rounded-full bg-red"></span>
            <span class="w-3 h-3 rounded-full bg-yellow"></span>
            <span class="w-3 h-3 rounded-full bg-green"></span>
            <span class="ml-4 text-overlay0 text-sm font-mono">{project.name.toLowerCase().replace(/\s+/g, '-')}/</span>
          </div>

          <div class="p-6 font-mono text-sm">
            <div class="flex items-start justify-between gap-4 mb-4">
              <div>
                <h3 class="text-text text-lg font-medium">{project.name}</h3>
                <p class="text-subtext0 mt-1">{project.description}</p>
              </div>
              <span class="shrink-0 px-2 py-1 text-xs border rounded {statusColors[project.status]}">
                {statusLabels[project.status]}
              </span>
            </div>

            <div class="flex flex-wrap gap-2 mb-4">
              {#each project.tech as tech}
                <span class="px-2 py-1 text-xs bg-surface0 text-subtext1 rounded">
                  {tech}
                </span>
              {/each}
            </div>

            <div class="flex items-center gap-4 pt-4 border-t border-surface0">
              {#if project.github}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center gap-2 text-subtext0 hover:text-green transition-colors"
                >
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  <span class="text-green">git clone</span>
                </a>
              {/if}
              {#if project.url}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center gap-2 text-subtext0 hover:text-blue transition-colors"
                >
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                  <span class="text-blue">open</span>
                </a>
              {/if}
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
