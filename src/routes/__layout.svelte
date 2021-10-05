<script>
	import "../global.css";
</script>

<div class="container">
<header>
	<nav>
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/about">About</a></li>
			<li><a href="/contact">Contact</a></li>
		</ul>
	</nav>
</header>

	<slot />
</div>

<footer>Developed by Muhammad Yasser at the 2021</footer>

<style>
	header {
		width: 100%;
		max-width: 500px;
	}

	.container {
		/* width: 100%; */
		max-width: 500px;
		overflow: hidden;
		padding: 0 1rem;
    margin: 0 auto;
	}

	header {
		margin-bottom: 3rem;
		width: 100%;
	}

	nav ul {
		list-style-type: none;
		display: flex;
		justify-content: space-between;
		padding: 0;
	}

	li {
		padding: 0.5rem;
	}

	li a {
		text-decoration: none;
		color: inherit;
		font-size: 1.4rem;
	}

	a:hover {
		text-decoration: underline;
	}

	footer {
		text-align: center;
		margin-top: 2rem;
	}
</style>
