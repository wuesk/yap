<script lang="ts">
    let { children } = $props();
    import "../app.css";
    import { Gear, MagnifyingGlass, Plus, User } from "phosphor-svelte";
	import Box from "$lib/components/generic/Box.svelte";
</script>

<div class="min-h-screen bg-orange-100">
    <div class="flex justify-center items-center gap-4 p-4">
        <Box class="text-xl font-semibold">
            Tomodachi
        </Box>
        <Box class="flex justify-center items-center gap-2 w-[15vw]">
            <button>
                <Plus size={28} weight="bold"/>
            </button>
            <button>
                <MagnifyingGlass size={28} weight="bold" />
            </button>
            <button>
                <Gear size={28} weight="bold" />
            </button>
        </Box>
        <Box class="text-xl font-semibold flex items-center gap-2">
            <img class="h-[28px]" src="pfp.png" />
            jesx
        </Box>
    </div>
    {@render children()}
    <footer class="fixed bottom-4 left-4">
        <Box class="text-sm">
            © 2024 Tomodachi
        </Box>
    </footer>
</div>