<script>
  import '../global.css';
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

  <slot/>

</div>

<footer>
  Developed by Muhammad Yasser at the 2021
</footer>

<style>

.container {
  max-width: 500px;
  overflow: hidden;
  padding: 0 1rem;
}

header {
  margin-bottom: 3rem;
}

  nav ul {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    padding: 0;
  }

  li {
    padding: .5rem;
  }

  a {
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