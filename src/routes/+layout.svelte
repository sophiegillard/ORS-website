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

  $: {
    isMobile = innerWidth && innerWidth <= 480
    isTablet = innerWidth && innerWidth <= 768
  }
</script>

<svelte:window bind:innerWidth bind:innerHeight />
<div class="">
  {#if !isMobile && !isTablet}
    <TopNav bind:nav_height />
  {:else}
    <MobileNav bind:mobile_nav_height bind:isMenuOpen />
  {/if}

  <div
    class="app relative"
    class:z-negative="{isMenuOpen}"
    style="{`top: ${!isMobile && !isTablet ? nav_height + 90 : mobile_nav_height}px;`}"
  >
    <main class="p-8 px-10">
      <slot {isMobile} {isTablet} />
    </main>

    <Footer {isMobile} {isTablet} />
  </div>
</div>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.off-white);
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
    max-width: 65rem;
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
