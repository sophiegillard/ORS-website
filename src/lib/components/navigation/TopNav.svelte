<script>
  let pages = [
    "Accueil",
    "Qui sommes nous",
    "Nos Missions",
    "Nous soutenir",
    "Contact",
    "Actualités",
    "N° utiles",
  ]

  export let nav_height = 0
</script>

<header class="p-6 pt-10 flex-col-center fixed w-full bg-off-white z-10">
  <div class="flex-row-center gap-4 w-full" style="{' max-width: 80rem;'}">
    <img
      src="$lib/assets/img/logo/ors-logo.png"
      class=""
      alt="ORS logo"
      style="{`max-height:${nav_height + 20}px;`}"
    />
    <nav class="navbar border rounded-full w-full flex" bind:offsetHeight="{nav_height}">
      {#each pages as page, index (page)}
        <li class="nav-item uppercase py-1">
          <a class="onglet" href="/{page.toLowerCase().split(' ').join('-')}">{page}</a>
        </li>
        {#if index !== pages.length - 1}
          <span class="flex justify-center items-center">|</span>
        {/if}
      {/each}
    </nav>
  </div>
</header>

<style>
  .navbar {
    display: flex;
    justify-content: space-evenly;
    margin: 0 auto;
  }
  .nav-item {
    list-style: none;
  }

  @media (min-width: 640px) and (max-width: 1023px) {
    img {
      max-height: 40px !important;
    }
  }
</style>
