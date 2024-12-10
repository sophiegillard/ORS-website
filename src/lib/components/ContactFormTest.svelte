<script>
  import { onMount } from "svelte"
  import Spinner from "$lib/components/Spinner.svelte"
  let loading = true
  let name = ""
  let email = ""
  let phone = ""
  let message = ""
  let subject = ""
  let success = false
  let error = null
  let errors = {}
  let event = ""

  let mail_sending = false

  onMount(() => {
    const params = new URLSearchParams(window.location.search)
    event = params.get("title")
  })

  $: if (event) {
    subject = `Demande d'information - ${event}`
  } else {
    subject = "Demande d'information - ORS Charleroi Website"
  }
  $: console.log("event", event)

  const handleSubmit = async (e) => {
    e.preventDefault()
    error = null
    errors = {}

    // Basic client-side validation
    if (!name) {
      error =
        "*Il est nécessaire de mentionner votre nom ainsi qu’un numéro de téléphone ou une adresse mail"
      errors["name"] = true
      return
    }

    if (!email && !phone) {
      error =
        "*Il est nécessaire de mentionner votre nom ainsi qu’un numéro de téléphone ou une adresse mail"
      errors["email"] = true
      errors["phone"] = true
      return
    }

    if (message.length < 10) {
      error = "*Merci d’indiquer l’objet de votre demande"
      errors["message"] = true
      return
    }

    mail_sending = true

    // Send data to the server
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone, message, subject }),
    })

    if (response.ok) {
      success = true
      mail_sending = false
      name = email = phone = message = "" // Clear form
    } else {
      success = true
      error = "Failed to send message. Please try again later."
    }
  }
</script>

<div class="contact-form flex flex-col justify-center items-center pt-10">
  <h5>Formulaire de contact</h5>
  <fieldset class="w-full pt-10">
    <form on:submit|preventDefault="{handleSubmit}" class="">
      <div class="flex flex-col gap-8">
        <input
          type="text"
          id="nom"
          name="nom"
          placeholder="Nom"
          class="form-text"
          bind:value="{name}"
          class:error="{errors.name}"
        />

        <input
          type="email"
          id="email"
          name="email"
          placeholder="Mail"
          class="form-text"
          bind:value="{email}"
          class:error="{errors.email}"
        />

        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="N°de téléphone"
          class="form-text"
          bind:value="{phone}"
          class:error="{errors.phone}"
        />

        <textarea
          id="message"
          name="body"
          placeholder="Message"
          class="form-text"
          style="min-height: 150px; "
          bind:value="{message}"
          class:error="{errors.message}"
        ></textarea>

        <button
          type="submit"
          class="{success
            ? 'bg-dark-blue'
            : 'bg-grey'} text-white text-lg rounded-lg py-2 px-4 w-100"
        >
          {#if mail_sending}
            <Spinner />
            <p class="invisible">Envoyer</p>
          {:else if success}
            <p>C'est envoyé</p>
          {:else}
            <p>Envoyer</p>
          {/if}
        </button>
        {#if error}
          <p class="error_message mt-4">{error}</p>
        {/if}
      </div>
    </form>
  </fieldset>
</div>

<style>
  .map {
    height: 300px;
  }

  :global(.ol-viewport) {
    border-radius: 0.75rem !important;
  }

  .marker {
    font-size: 2rem;
    transform: translate(-50%, -50%);
    pointer-events: none; /* Prevent interference with map interactions */
  }

  input,
  textarea {
    background-color: theme("colors.white");
    padding: 15px 20px;
    text-align: center;
    border: 1px solid theme("colors.grey");
    border-radius: 10px;
  }

  input::placeholder,
  textarea::placeholder {
    font-weight: 300;
  }

  input.error::placeholder,
  textarea.error::placeholder {
    color: theme("colors.dark-blue") !important;
  }

  input.error,
  textarea.error {
    border-color: theme("colors.dark-blue");
    color: theme("colors.dark-blue") !important;
  }

  p {
    text-align: center;
    padding: 0 !important;
  }
</style>
