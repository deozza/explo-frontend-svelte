<script lang="ts">
    import '../main.css';
    import CounterButton from '../lib/CounterButton.svelte';

    let counter: number = 10;

    $: double = counter * 2;


</script>


<svelte:head>
    <title>Page d'accueil</title>
    <meta property="description" content="Bonjour ceci est mon site web" />
</svelte:head>


<CounterButton bind:counter={counter} />

<p>Double : {double}</p>

<style>

</style>