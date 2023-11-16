<script lang="ts">
    import '../main.css';
    import CounterButton from '../lib/CounterButton.svelte';
    import { userToken } from '../store';

    let counter: number = 10;

    $: double = counter * 2;


    let token: string | null = '' 

    userToken.subscribe((value) => token = value )

</script>


<svelte:head>
    <title>Page d'accueil</title>
    <meta property="description" content="Bonjour ceci est mon site web" />
</svelte:head>


<CounterButton bind:counter={counter} />

<p>Double : {double}</p>
<p>User token  : {token}</p>

<style>

</style>