<button
  on:click="{() => (window.location.href = '/contact')}"
  class=" bg-brown hover:bg-brown-hover rounded-full text-off-white px-8 py-1 mb-6 mt-8 sm:mb-4 lg:px-12 lg:py-2 lg:my-16 font-light"
>
  <p>Nous contacter</p>
</button>

<style>
  p {
    font-family: "Epilogue", sans-serif;
    font-size: 29px;
    font-weight: 400;
    text-align: center;
  }

  @media (max-width: 1024px) {
    p {
      font-size: 18px !important;
      line-height: 25px !important;
    }
  }

  @media (max-width: 480px) {
    p {
      font-size: 18px !important;
      line-height: 17px !important;
    }
  }
</style>
