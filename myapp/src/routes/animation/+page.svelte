<script lang="ts">

import { slide } from 'svelte/transition'

let animate = false

     const catImageSource = 'https://images.unsplash.com/flagged/photo-1557427161-4701a0fa2f42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
</script>


<label>
    <input type="checkbox" bind:checked={animate} />
    Animate
</label>

{#if animate}
  <img transition:slide src="{catImageSource}" alt="">
{/if}
