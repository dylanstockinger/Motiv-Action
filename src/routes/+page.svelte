<script>
    import Card from "../components/Card/card.svelte"
    export let data;
    let { users } = data;
    $: console.log({ users });
</script>


<Card></Card>