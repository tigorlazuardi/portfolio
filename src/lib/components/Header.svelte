<script lang="ts">
  import { profile } from '../data/content';

  const navLinks = [
    { href: '#about', label: 'about' },
    { href: '#experience', label: 'experience' },
    { href: '#projects', label: 'projects' },
    { href: '#skills', label: 'skills' },
    { href: '#contact', label: 'contact' },
  ];
</script>

<header class="fixed top-0 left-0 right-0 z-50 bg-base/80 backdrop-blur-md border-b border-surface0">
  <nav class="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
    <a href="/" class="font-mono text-lg text-text hover:text-green transition-colors">
      <span class="text-overlay1">~/</span>{profile.name.toLowerCase().replace(' ', '-')}
    </a>
    <ul class="flex items-center gap-6">
      {#each navLinks as link}
        <li>
          <a
            href={link.href}
            class="font-mono text-sm text-subtext0 hover:text-green transition-colors"
          >
            .{link.label}()
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</header>
