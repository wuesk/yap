<script lang="ts">
	import Post from "$lib/components/Post.svelte";

    let posts = [
        "hello world",
        "nothing app",
    ]
</script>

<div class="flex flex-col items-center gap-3">
    {#if posts.length > 0}
        {#each posts.reverse() as post}
            <Post {post}/>
        {/each}
    {/if}
</div>

