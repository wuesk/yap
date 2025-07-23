<script lang="ts">
    let { children, class: className = '' } = $props();
</script>

<div class="color-amber-500 border-2 border-solid border-amber-500 bg-yellow-400 m-1 pl-3 pr-3 pt-2 pb-2 relative shadow-[4px_4px_0px_0px_rgb(180,83,9)] {className}">
    {@render children()}
</div>