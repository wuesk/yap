<script lang="ts">
	import Box from "./generic/Box.svelte";
    import { Heart, ChatCircle, ShareNetwork } from "phosphor-svelte";


    let { post = null } = $props();
</script>

<Box class="w-[30vw] min-h-[100px] flex flex-col justify-between p-4">
    <div class="flex items-center gap-2 mb-2">
        <div class="w-6 h-6 bg-amber-600 x-2 border-2 border-amber-700">
            <img src="pfp.png" />
        </div>
        <span class="text-sm font-bold text-amber-700">@yapper123</span>
    </div>
    
    <div class="flex-1 mb-3">
        {post}
    </div>
    
    <div class="flex items-center gap-6">
        <button class="flex items-center gap-1 hover:text-red-500 transition-colors">
            <Heart size={24} weight="bold" />
            <span class="text-sm font-bold">42</span>
        </button>
        
        <button class="flex items-center gap-1 hover:text-blue-500 transition-colors">
            <ChatCircle size={24} weight="bold" />
            <span class="text-sm font-bold">12</span>
        </button>
        
        <button class="flex items-center gap-1 hover:text-green-500 transition-colors">
            <ShareNetwork size={24} weight="bold" />
            <span class="text-sm font-bold">5</span>
        </button>
    </div>
</Box>