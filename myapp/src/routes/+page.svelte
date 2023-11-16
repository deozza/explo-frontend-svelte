<script lang="ts">
    import '../main.css';
    import CounterButton from '../lib/CounterButton.svelte';
    
    let counter: number = 10;

    $: double = counter * 2;

</script>

<CounterButton bind:counter={counter} />

<p>Double : {double}</p>

<style>

</style>