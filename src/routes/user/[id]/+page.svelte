<script lang="ts">
  import { page } from '$app/stores';

  let pokemon = null

  async function searchPokemon(){
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    const responseBody = await response.json()
    pokemon = responseBody
    console.log(responseBody)
  }


</script>

<svelte:head>
    <title>Profil du user {$page.params.id} </title>
    <meta property="description" content="Bonjour ceci est mon site web" />
</svelte:head>

<p>User id  : {$page.params.id}</p>

<button on:click={searchPokemon}>Click to search</button>

<style>

</style>