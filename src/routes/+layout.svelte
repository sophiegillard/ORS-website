<script>
  import { page } from "$app/stores"

  import TopNav from "$lib/components/navigation/TopNav.svelte"
  import MobileNav from "$lib/components/navigation/MobileNav.svelte"
  import Footer from "$lib/components/navigation/Footer.svelte"
  import "$lib/styles/styles.css"

  let nav_height = 0
  let mobile_nav_height = 0
  let isMobile = false
  let isTablet = false
  let innerWidth
  let innerHeight
  let isMenuOpen = false
  let content_height
  let footer_height

  $: content_height = innerHeight - (isMobile ? mobile_nav_height : nav_height) - 40
  let y
  $: {
    isMobile = innerWidth && innerWidth <= 480
    isTablet = innerWidth && innerWidth <= 900
  }

  $: console.log("location.pathname", $page.url, $page.url.pathname.includes("accueil/"))
</script>

<svelte:window bind:innerWidth bind:innerHeight bind:scrollY="{y}" />
<div class="">
  {#if isMobile === undefined}
    <div></div>
  {:else if !isMobile && !isTablet}
    <TopNav bind:nav_height scrollY="{y}" />
  {:else}
    <MobileNav scrollY="{y}" bind:mobile_nav_height bind:isMenuOpen />
  {/if}

  <div
    class="app relative"
    class:accueil="{$page.url.pathname.includes('accueil/')}"
    class:z-negative="{isMenuOpen}"
    style="{`top: ${!isMobile && !isTablet ? nav_height + 90 : mobile_nav_height}px; min-height: ${content_height}px;`}"
  >
    <main class=" main p-8 sm:px-12 lg:pt-15">
      <slot {isMobile} {isTablet} />
    </main>

    <Footer {isMobile} {isTablet} bind:footer_height />
  </div>
</div>

<style>
  :global(body) {
    background-image: url("/src/lib/assets/img/Fonds/Fond_Web.svg");
    background-size: cover;
    background-repeat: no-repeat;
  }

  @media (max-width: 850px) {
    :global(body) {
      background-image: url("/src/lib/assets/img/Fonds/Fond_Mobile.svg");
    }
  }

  .accueil {
    background-color: theme("colors.off-white") !important;
    background-image: none !important;
  }

  .app {
    display: flex;
    flex-direction: column;
  }
  .z-negative {
    z-index: -1;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: 90rem;
    margin: 0 auto;
    box-sizing: border-box;
  }

  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px;
  }

  footer a {
    font-weight: bold;
  }

  @media (min-width: 480px) {
    footer {
      padding: 12px 0;
    }
  }

  @media (min-width: 900px) {
    /* .app {
      padding: 20px;
    } */
  }
</style>
