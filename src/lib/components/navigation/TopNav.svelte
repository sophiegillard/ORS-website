<script>
  import { page } from "$app/stores"
  let pages = [
    { label: "accueil", value: "" },
    { label: "qui sommes-nous", value: "qui-sommes-nous" },
    { label: "nos missions", value: "nos-missions" },
    { label: "nous soutenir", value: "nous-soutenir" },
    { label: "contact", value: "contact" },
    { label: "actualités", value: "actualites" },
    { label: "n° utiles", value: "numeros-utiles" },
  ]

  export let scrollY
  export let nav_height = 0
</script>

<header class="p-6 pt-10 flex-col-center fixed w-full bg-off-white z-10">
  <div class="flex-row-center gap-4 w-full" style="{' max-width: 90rem;'}">
    {#if !(scrollY < 130 && ($page.url.pathname === "/accueil" || $page.url.pathname === "/"))}
      <a class="onglet hidden" href="/">
        <img
          src="$lib/assets/img/logo/ors-logo.png"
          alt="ORS logo"
          style="{`max-height:${nav_height}px;`}"
        />
      </a>
    {/if}

    <nav class="navbar border rounded-full w-full flex" bind:offsetHeight="{nav_height}">
      {#each pages as page, index (page)}
        <li class="nav-item py-1 m-0 p-0">
          <a class="onglet" href="/{page.value}">{page.label}</a>
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
