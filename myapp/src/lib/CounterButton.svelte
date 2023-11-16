<script lang="ts">

    export let counter: number = 0;

    function increment() {
        counter = counter + 1;
    }

    function decrement() {
        counter = counter -1;
    }

</script>



<button on:click={increment}> appuie sur le bouton incrementer {counter}</button>
<button on:click={decrement}> appuie sur le bouton pour decrementer {counter}</button>

<style>

</style>