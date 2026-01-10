<script lang="ts">
  interface Props {
    lines: string[];
    filename?: string;
    startLine?: number;
    showLineNumbers?: boolean;
  }

  let { lines, filename = '', startLine = 1, showLineNumbers = true }: Props = $props();
</script>

<div class="bg-bg-code border border-gray-800 rounded-lg overflow-hidden font-mono text-sm">
  <div class="flex items-center gap-2 px-4 py-3 bg-bg-tertiary border-b border-gray-800">
    <span class="w-3 h-3 rounded-full bg-red-500"></span>
    <span class="w-3 h-3 rounded-full bg-yellow-500"></span>
    <span class="w-3 h-3 rounded-full bg-green-500"></span>
    {#if filename}
      <span class="ml-4 text-gray-500 text-sm">{filename}</span>
    {/if}
  </div>
  <pre class="p-0 m-0 overflow-x-auto"><code class="block py-4">{#each lines as line, i}<span class="block px-4 leading-7 hover:bg-white/[0.03]">{#if showLineNumbers}<span class="inline-block w-8 text-right pr-4 text-gray-600 select-none">{startLine + i}</span>{/if}<span class="text-gray-200">{@html line}</span></span>{/each}</code></pre>
</div>

<style>
  :global(.keyword) { color: var(--color-syntax-keyword); }
  :global(.string) { color: var(--color-syntax-string); }
  :global(.number) { color: var(--color-syntax-number); }
  :global(.comment) { color: var(--color-syntax-comment); font-style: italic; }
  :global(.function) { color: var(--color-syntax-function); }
  :global(.property) { color: var(--color-syntax-property); }
</style>
