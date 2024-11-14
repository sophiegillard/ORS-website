<script>
  import ContactForm from "$lib/components/ContactForm.svelte"

  import InformationItem from "$lib/components/InformationItem.svelte"
  import SectionWithTitle from "$lib/components/layout/SectionWithTitle.svelte"
</script>

<svelte:head>
  <title>Contact</title>
  <meta name="Contact" content="Contact, adresses, formulaire" />
</svelte:head>

<div class="text-column">
  <SectionWithTitle title="Contact">
    <section class="flex flex-col gap-6">
      <div class="flex flex-col sm:flex-row">
        <div class="flex flex-col sm:grow md:grow-0 md:w-1/ lg:w-auto">
          <InformationItem title="Adresse">
            <p>Rue Léon Bernus 27</p>
            <p>6000 Charleroi</p>
          </InformationItem>
          <InformationItem title="Mail">
            <p>contact@espacelibre.be</p>
          </InformationItem>
        </div>
        <div class="grow sm:hidden md:block md:w-1/3 lg:w-auto">
          <InformationItem title="Horaire">
            <p>Du lundi au jeudi : 8h30 - 17h</p>
            <div class="flex flex-row justify-center">
              <p>Vendredi : 8h30 - 16h</p>
              <p class="remarque text-xs mb-5 lg:ml-2">(possibilité d'adaptation)</p>
            </div>

            <p>Permanence téléphonique :</p>
            <p>Mardi et jeudi : 8h30 - 11h30</p>
            <p>Mercredi : 8h30 - 16h</p>
          </InformationItem>
        </div>
        <div class="lg:pr-5 sm:w-1/2 md:w-1/4 md:grow-0 lg:w-auto">
          <InformationItem title="Téléphone" custom_class="{' sm:pb-8 '}">
            <a href="tel:+3271278800">071/27.88.00</a>
          </InformationItem>
          <InformationItem title="Fax">
            <p>071/27.88.01</p>
          </InformationItem>
        </div>
      </div>
      <div class="grow hidden sm:block md:hidden">
        <InformationItem title="Horaire">
          <p>Du lundi au jeudi : 8h30 - 17h</p>
          <div class="flex flex-row justify-center">
            <p>Vendredi : 8h30 - 16h</p>
            <p class="remarque text-xs mb-5 lg:ml-2">(possibilité d'adaptation)</p>
          </div>

          <p>Permanence téléphonique :</p>
          <p>Mardi et jeudi : 8h30 - 11h30</p>
          <p>Mercredi : 8h30 - 16h</p>
        </InformationItem>
      </div>

      <div class="map bg-blue rounded-xl border"></div>

      <ContactForm></ContactForm>
    </section>
  </SectionWithTitle>
</div>

<style>
  .map {
    height: 300px;
  }
  input,
  textarea {
    background-color: theme("colors.white");
    padding: 15px 20px;
    text-align: left;
    border: 1px solid theme("colors.grey");
    border-radius: 10px;
  }

  input::placeholder,
  textarea::placeholder {
    color: theme("colors.grey");
    font-weight: 200;
  }

  p {
    text-align: center;
    padding: 0 !important;
  }
</style>
