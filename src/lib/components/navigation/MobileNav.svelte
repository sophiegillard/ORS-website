<script>
  import { slide } from "svelte/transition"

  let pages = [
    "Accueil",
    "Qui sommes-nous",
    "Nos Missions",
    "Nous soutenir",
    "Contact",
    "Actualités",
    "N° utiles",
  ]

  export let mobile_nav_height = 0
  export let isMenuOpen = false

  function toggleMenu() {
    isMenuOpen = !isMenuOpen
  }
</script>

<div
  class="bg-off-white flex justify-between px-6 py-5 fixed w-full"
  bind:offsetHeight="{mobile_nav_height}"
>
  <img
    src="$lib/assets/img/logo/ors-logo.png"
    class=""
    alt="ORS logo"
    style="{`max-height:40px;`}"
  />

  <button class="menu-button nav-onglet" on:click="{toggleMenu}"> Menu </button>

  {#if isMenuOpen}
    <div class="menu bg-off-white z-10" style="{`top: ${mobile_nav_height}px`}" transition:slide>
      {#each pages as page, index}
        <a class="menu-item nav-onglet" href="/{page.toLowerCase().split(' ').join('-')}">{page}</a>
        {#if index !== pages.length - 1}
          <hr class="menu-divider" />
        {/if}
      {/each}
    </div>
  {/if}
</div>

<style>
  .menu-button {
    top: 0;
    right: 0;
    padding-inline: 25px;
    border-radius: 50px;
    border: 0.7px solid grey;
  }

  .menu {
    position: fixed;
    left: 0;
    width: 100%;
    padding: 20px;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: end;
    animation: slideDown 0.5s ease-in-out;
  }

  .menu-item {
    padding: 10px;
    text-align: right;
    width: inherit;
  }

  .menu-divider {
    border:
      0,
      7px solid grey;
    max-width: 200px;
    width: inherit;
  }
</style>
