<script>
  let pages = ["Accueil", "Qui sommes nous", "Nos Missions", "Contact", "Nous aider", "Actualités"]
</script>

<header class="p-10 flex-col-center">
  <nav class="navbar border rounded-full px-4">
    {#each pages as page, index (page)}
      <li class="nav-item uppercase py-1 px-4">
        <a href="/{page.toLowerCase().split(' ').join('-')}">{page}</a>
      </li>
      {#if index !== pages.length - 1}
        <span class="flex justify-center items-center">|</span>
      {/if}
    {/each}
  </nav>
</header>

<style>
  .navbar {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }
  .nav-item {
    list-style: none;
  }
</style>
