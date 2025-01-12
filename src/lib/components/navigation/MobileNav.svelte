<script>
  import { slide } from "svelte/transition"
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
  export let mobile_nav_height = 0
  export let isMenuOpen = true

  function toggleMenu() {
    isMenuOpen = !isMenuOpen
  }
</script>

<div
  class="bg-off-white flex justify-between md:px-6 py-5 fixed w-full z-10 p-10 pt-10 md:pb-5"
  bind:offsetHeight="{mobile_nav_height}"
>
  <a class="onglet" href="/">
    <img
      src="$lib/assets/img/logo/ors-logo.png"
      class=""
      alt="ORS logo"
      style="{`max-height:40px;`}"
      class:invisible="{scrollY < 130 && $page.url.pathname === '/'}"
    />
  </a>

  <button class="menu-button" on:click="{toggleMenu}">
    <p class="py-0 menu-button-p">menu</p>
  </button>

  {#if isMenuOpen}
    <div class="menu bg-off-white" style="{`top: ${mobile_nav_height}px`}" transition:slide>
      {#each pages as page, index}
        <a class="menu-item nav-onglet" href="/{page.value}" on:click="{() => (isMenuOpen = false)}"
          >{page.label}</a
        >
        {#if index !== pages.length - 1}
          <hr class="menu-divider" />
        {/if}
      {/each}
    </div>
  {/if}
</div>

<style>
  /* .menu-button {
    top: 0;
    right: 0;
    padding-inline: 25px;
    border-radius: 50px;
    border: 0.7px solid grey;
  } */

  .menu {
    position: fixed;
    left: 0;
    width: 100%;
    padding-inline: 40px;
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
    max-width: 150px;
    width: inherit;
  }
</style>
