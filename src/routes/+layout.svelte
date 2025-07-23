<script lang="ts">
    let { children } = $props();
    import { Gear, MagnifyingGlass, Plus, User } from "phosphor-svelte";
    import Box from "$lib/components/generic/Box.svelte";
    import { themeStore } from '$lib/stores/theme.svelte';
    import "../app.css";
</script>

<div class="min-h-screen {themeStore.theme.pageBg} relative">
    <div class="min-h-[50vw]">
        <div class="flex justify-center items-center gap-4 p-4">
            <Box class="text-xl font-semibold">
                Tomodachi
            </Box>
            <Box class="flex justify-center items-center gap-2 w-[25vw]">
                <button>
                    <Plus size={28} weight="bold"/>
                </button>
                <button>
                    <MagnifyingGlass size={28} weight="bold" />
                </button>
            </Box>
        </div>

        {@render children()}

        <footer class="fixed bottom-4 left-0 right-0 flex justify-between px-4">
            <Box class="text-sm left-4 h-12">
                © 2024 Tomodachi
            </Box>
            <div class="flex items-center gap-2">
                <Box class="h-12">
                    <button>
                        <Gear size={28} weight="bold" />
                    </button>
                </Box>
                <Box class="text-xl font-semibold flex items-center gap-2 h-12">
                    <img class="h-[28px]" src="pfp.png" />
                    jesx
                </Box>
            </div>
        </footer>
    </div>
</div>