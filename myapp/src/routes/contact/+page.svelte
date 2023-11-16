<script lang="ts">
        import '../../main.css';

        let contacts: Array<object> = [
            {
                email: 'test@gmail.com',
                age: 18,
                subject: 'mon premier email',
                content: 'Bonjour je vous écris un email'
            },
            {
                email: 'test2@gmail.com',
                age: 81,
                subject: 'demande de contact',
                content: 'je veux vous contacter'
            },
        ];

        let email: string = ''
        let age: number = 0
        let subject: string = ''
        let content: string = ''

        let buttonIsClicked: boolean = false;

        function onContactSubmit(e: any) {
            buttonIsClicked = true;

            const form: HTMLFormElement = e.target as HTMLFormElement
    		const formData: FormData = new FormData(form)
            let contact: object = {};
            formData.forEach((value: any, key: any) => (contact[key] = value));

            contacts = [...contacts, contact];

            buttonIsClicked = false;
        }

        function onContactSubmitWithVariables(e: any) {
            buttonIsClicked = true;

            const contact: object = {
                email: email,
                age: age,
                subject: subject,
                content: content,
            }
            contacts = [...contacts, contact];

            buttonIsClicked = false;
        }
</script>

<form on:submit|preventDefault={(e) => onContactSubmitWithVariables(e)}>
    <div class="flex flex-r">
        <label for="email">Email</label>
        <input type="text" id="email" name="email" bind:value={email}>    
    </div>

    <div class="flex flex-r">
        <label for="age">Votre age</label>
        <input type="number" id="age" name="age"  bind:value={age}>
    </div>

    <div class="flex flex-r">
        <label for="subject">Sujet de l'email</label>
        <input type="text" id="subject"  name="subject" bind:value={subject}>
    </div>

    <div class="flex flex-r">
        <label for="content">Contenu de l'email</label>
        <textarea name="content" id="content" cols="30" rows="10"  bind:value={content}></textarea>
    </div>

    {#if buttonIsClicked === false}
        <button type="submit">Envoyer</button>
    {:else}
        <button>Veuillez patienter</button>
    {/if}

</form>

{#each contacts as contact}
<p>Email : {contact.email}</p>
<p>Age : {contact.age}</p>
<p>Sujet : {contact.subject}</p>
<p>Contenu : {contact.content}</p>

<hr>
{/each}




<style>

    form {
        background-color: grey;
        padding: 20px;
        width: auto;
    }

    .flex{
        display: flex;
    }
    
    .flex-r{
        flex-direction: row;
    }

    button {
        background-color: green;
        padding: 10px 5px;
        color: white
    }
</style>