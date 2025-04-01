<script lang="ts">
	import "../app.postcss";
	import NavBar from "$lib/components/NavBar.svelte";
	export let children: () => any;
	import { user } from "$lib/stores/stores.ts";
	console.log($user)

</script>

<NavBar isAuthed={false} />

{@render children()}
