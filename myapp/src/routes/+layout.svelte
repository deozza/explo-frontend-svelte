<script lang="ts">
    import '../main.css';

    import WebsiteHeader from '../lib/WebsiteHeader.svelte';
</script>


<nav>
    <a href="/">Accueil</a>
    <a href="/contact">Contact</a>
    <a href="">autre</a>
    <a href="">infos</a>
</nav>
<WebsiteHeader userName={'Mike'} pageName={'accueil'}/>

<slot />

<style>
    
</style>