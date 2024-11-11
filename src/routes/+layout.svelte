<script>
  import TopNav from "$lib/components/navigation/TopNav.svelte"
  import MobileNav from "$lib/components/navigation/MobileNav.svelte"
  import Footer from "$lib/components/navigation/Footer.svelte"
  import "$lib/styles/styles.css"

  let mobile_nav_height = 0
  let isMobile = false
  let isTablet = false
  let innerWidth
  let innerHeight

  $: {
    isMobile = innerWidth && innerWidth <= 480
    isTablet = innerWidth && innerWidth <= 768
  }
</script>

<svelte:window bind:innerWidth bind:innerHeight />
<div class="">
  {#if !isMobile && !isTablet}
    <TopNav />
  {:else}
    <MobileNav bind:nav_height="{mobile_nav_height}" />
  {/if}

  <div class="app relative" style="{`top: ${mobile_nav_height}px; z-index: -1`}">
    <main>
      <slot />
    </main>

    <Footer />
  </div>
</div>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.off-white);
  }
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    max-width: 80rem;
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
</style>
