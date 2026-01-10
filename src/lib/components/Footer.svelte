<script lang="ts">
  const currentYear = new Date().getFullYear();
</script>

<footer class="py-12 border-t border-surface0">
  <div class="max-w-3xl mx-auto px-6">
    <div class="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-sm text-overlay0">
      <p>
        <span class="text-overlay1 italic">/*</span>
        <span class="text-subtext0"> {currentYear} </span>
        <span class="text-overlay1 italic">*/</span>
      </p>

      <p class="flex items-center gap-2">
        <span class="text-mauve">built</span>
        <span class="text-subtext0">with</span>
        <a
          href="https://svelte.dev"
          target="_blank"
          rel="noopener noreferrer"
          class="text-peach hover:text-yellow transition-colors"
        >
          Svelte
        </a>
        <span class="text-subtext0">+</span>
        <a
          href="https://tailwindcss.com"
          target="_blank"
          rel="noopener noreferrer"
          class="text-sky hover:text-sapphire transition-colors"
        >
          Tailwind
        </a>
      </p>
    </div>
  </div>
</footer>
