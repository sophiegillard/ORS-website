<script>
  import InformationItem from "$lib/components/InformationItem.svelte"
</script>

<svelte:head>
  <title>Contact</title>
  <meta name="Contact" content="Contact, adresses, formulaire" />
</svelte:head>

<div class="text-column">
  <h2>Contact</h2>

  <section class="flex flex-col px-16 gap-6">
    <div class="flex flex-row items-center justify-around">
      <div>
        <InformationItem title="Adresse">
          <p>123 rue de la Paix</p>
          <p>75000 Paris</p>
        </InformationItem>
        <InformationItem title="Mail">
          <p>contact@espacelibre.be</p>
        </InformationItem>
      </div>
      <div>
        <InformationItem title="Horaire">
          <p>Du lundi au jeudi : 8h30 - 17h</p>
          <p>Vendredi : 8h30 - 15h</p>
          <p class="text-sm">(possibilité d'adaptation)</p>
        </InformationItem>
      </div>
      <div>
        <InformationItem title="Téléphone">
          <a href="tel:+3271278800">071/27.88.00</a>
        </InformationItem>
        <InformationItem title="Téléphone">
          <p>071/27.88.01</p>
        </InformationItem>
      </div>
    </div>

    <div class="map bg-blue rounded-xl border"></div>

    <div class="contact-form flex flex-col justify-center items-center">
      <h5>Formulaire de contact</h5>
      <form action="submit" class="w-full pt-10">
        <div class="flex flex-col gap-4">
          <div class="flex flex-col gap-2">
            <input type="text" id="nom" name="nom" placeholder="Nom" class="form-text" />
          </div>
          <div class="flex flex-col gap-2">
            <input type="email" id="email" name="email" placeholder="Email" class="form-text" />
          </div>
          <div class="flex flex-col gap-2">
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              class="form-text"
              style="min-height: 150px; "
            ></textarea>
          </div>
          <button class="bg-grey text-white text-lg rounded-lg py-2 px-4">Envoyer</button>
        </div>
      </form>
    </div>
  </section>
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
</style>
