<script context="module">
    import { waitLocale } from "svelte-i18n"

    export async function preload() {
        return waitLocale()
    }
</script>

{#if process.browser !== true}
    <div class="pageloader is-active">
        <span class="title">LibreLingo</span>
    </div>
{/if}

<main>
    <slot />
</main>
