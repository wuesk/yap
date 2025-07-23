<script lang="ts">
    import { themes, type ColorTheme } from '$lib/themes';
    import { themeStore } from '$lib/stores/theme.svelte';
    
    let { children, class: className = '', color = themeStore.current }: {
        children?: any,
        class?: string,
        color?: ColorTheme
    } = $props();
    
    const variant = $derived(themes[color]);
</script>

<div class="{variant.bg} {variant.border} {variant.text} {variant.shadow} border-2 border-solid m-1 pl-3 pr-3 pt-2 pb-2 relative {className}">
    {@render children()}
</div>