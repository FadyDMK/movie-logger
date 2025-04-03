<script lang="ts">
    import "../app.postcss";
    import NavBar from "$lib/components/NavBar.svelte";
	export let children: () => any;
	import { isAuthed } from "$lib/stores/stores.ts";
    export let data: { isAuthed: boolean }; // Data returned from the server

	$: isAuthed.set(data.isAuthed);

</script>

<NavBar />

{@render children()}