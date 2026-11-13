<script setup lang="ts">
// Ícones em SVG: caracteres como ↗ e ⇄ viram emoji ou mudam de fonte no celular (principalmente no iPhone).
import type { IconName } from '../content/types'

defineProps<{ name: IconName }>()

const paths: Record<IconName, string> = {
  'arrow-up-right': 'M7 17 17 7M8 7h9v9',
  'arrow-down': 'M12 5v14M6 13l6 6 6-6',
  'arrow-up': 'M12 19V5M6 11l6-6 6 6',
  pin: 'M12 21s-6-5.6-6-11a6 6 0 1 1 12 0c0 5.4-6 11-6 11zM12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z',
  swap: 'M4 8h14M14 4l4 4-4 4M20 16H6M10 12l-4 4 4 4',
  nodes: 'M6 6h4v4H6zM14 14h4v4h-4zM14 6h4v4h-4zM10 8h4M16 10v4M8 10v6h6',
  target: 'M12 3v4M12 17v4M3 12h4M17 12h4M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
  braces: 'M9 4c-2 0-3 1-3 3v2c0 1.5-1 2.5-2 3 1 .5 2 1.5 2 3v2c0 2 1 3 3 3M15 4c2 0 3 1 3 3v2c0 1.5 1 2.5 2 3-1 .5-2 1.5-2 3v2c0 2-1 3-3 3',
  code: 'M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16',
}
</script>

<template>
  <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
    <path :d="paths[name]" />
  </svg>
</template>
