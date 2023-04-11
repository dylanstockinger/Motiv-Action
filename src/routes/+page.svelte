<script>
	import Card from '../components/Card/card.svelte';

	export let data;
	let { user, error } = data;
	$: console.log(error);
</script>

<Card />

<ul>
	{#each user as u}
		<li>{u.id}</li>
	{/each}
</ul>
