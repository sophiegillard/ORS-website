<script>
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

  let y
  $: {
    isMobile = innerWidth && innerWidth <= 480
    isTablet = innerWidth && innerWidth <= 850
  }
</script>

<svelte:window bind:innerWidth bind:innerHeight bind:scrollY="{y}" />
<div class="">
  {#if !isMobile && !isTablet}
    <TopNav bind:nav_height scrollY="{y}" />
  {:else}
    <MobileNav scrollY="{y}" bind:mobile_nav_height bind:isMenuOpen />
  {/if}

  <div
    class="app relative"
    class:z-negative="{isMenuOpen}"
    style="{`top: ${!isMobile && !isTablet ? nav_height + 90 : mobile_nav_height}px;`}"
  >
    <main class="p-8 px-6 lg:pt-20">
      <slot {isMobile} {isTablet} />
    </main>

    <Footer {isMobile} {isTablet} />
  </div>
</div>

<style>
  :global(body) {
    background-image: url("/src/lib/assets/img/Fonds/Fond_Web.svg");
    background-size: cover;
    background-repeat: no-repeat;
  }

  @media (max-width: 480px) {
    :global(body) {
      background-image: url("/src/lib/assets/img/Fonds/Fond_Mobile.svg");
    }
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
    max-width: 75rem;
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

  @media (min-width: 768px) {
  }
</style>
