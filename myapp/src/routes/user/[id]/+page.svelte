<script lang="ts">
  import { page } from '$app/stores';

  import { userToken } from '../../../store';

  let token: string | null = '' 

  userToken.subscribe((value) => token = value )

  function updateToken() {
    userToken.set('fbdhfbedfhbed')
  }


</script>


<svelte:head>
    <title>Profil du user {$page.params.id} </title>
    <meta property="description" content="Bonjour ceci est mon site web" />
</svelte:head>

<p>User id  : {$page.params.id}</p>
<p>User token  : {token}</p>


<button on:click={updateToken} >click to update button</button>

<style>

</style>