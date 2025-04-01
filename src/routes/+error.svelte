<script lang='ts'>
	export let error;
</script>

<svelte:head>
	<title>404 - Page Not Found</title>
</svelte:head>

<main class="error-container">
	<h1>Oops! Page Not Found</h1>
	<p>{error?.message || "The page you're looking for does not exist."}</p>
	<a href="/" class="back-home">Go Back Home</a>
</main>

<style>
	.error-container {
        margin-top: 200px;
		text-align: center;
		padding: 50px;
	}
	h1 {
		color: #ff6b6b;
        font-size: 3em;
	}
	.back-home {
		display: inline-block;
		margin-top: 20px;
		padding: 10px 20px;
		background-color: var(--secondary-color);
		color: white;
		text-decoration: none;
		border-radius: 5px;
	}
</style>
