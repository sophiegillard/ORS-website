<script>
  let nom = ""
  let email = ""
  let phone = ""
  let message = ""
  let errorMessage = ""
  let errors = []
  let recaptchaToken = ""

  // const site_key = import.meta.env.RECAPTCHA_SECRET

  function handleSubmit(event) {
    event.preventDefault()

    // Check reCAPTCHA response
    // recaptchaToken = grecaptcha.getResponse()
    // if (!recaptchaToken) {
    //   errorMessage = "*Please complete the CAPTCHA"
    //   return
    // }

    if (!nom) {
      errorMessage =
        "*Il est nécessaire de mentionner votre nom ainsi qu’un numéro de téléphone ou une adresse mail"
      errors["nom"] = true
      return
    }

    if (!email && !phone) {
      errorMessage =
        "*Il est nécessaire de mentionner votre nom ainsi qu’un numéro de téléphone ou une adresse mail"
      errors["email"] = true
      errors["phone"] = true
      return
    }

    if (message.length < 10) {
      errorMessage = "*Merci d’indiquer l’objet de votre demande"
      errors["message"] = true
      return
    }

    // Submit form logic here
  }
</script>

<div class="contact-form flex flex-col justify-center items-center pt-10">
  <h5>Formulaire de contact</h5>
  <form on:submit="{handleSubmit}" class="w-full pt-10">
    <div class="flex flex-col gap-8">
      <div class="flex flex-col gap-">
        <input
          type="text"
          id="nom"
          name="nom"
          placeholder="Nom"
          class="form-text"
          class:error_input="{errors['nom']}"
          bind:value="{nom}"
          on:input="{() => {
            errors['nom'] = false
            errorMessage = ''
          }}"
        />
      </div>
      <div class="flex flex-col gap-2">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Mail"
          class="form-text"
          class:error_input="{errors['email']}"
          bind:value="{email}"
          on:input="{() => {
            errors['email'] = false
            errorMessage = ''
          }}"
        />
      </div>
      <div class="flex flex-col gap-2">
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="N°de téléphone"
          class="form-text"
          class:error_input="{errors['phone']}"
          bind:value="{phone}"
          on:input="{() => {
            errors['phone'] = false
            errorMessage = ''
          }}"
        />
      </div>
      <div class="flex flex-col gap-2">
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          class="form-text"
          style="min-height: 150px; "
          class:error_input="{errors['message']}"
          bind:value="{message}"
          on:input="{() => {
            errors['message'] = false
            errorMessage = ''
          }}"
        ></textarea>
      </div>
      <!--  reCAPTCHA widget here -->
      <!-- <div class="g-recaptcha" data-sitekey="{site_key}"></div> -->

      <button type="submit" class="bg-grey text-white text-lg rounded-lg py-2 px-4">Envoyer</button>
    </div>
    {#if errorMessage}
      <p class="error_message mt-4">{errorMessage}</p>
    {/if}
  </form>
</div>

<style>
  .map {
    height: 300px;
  }
  input,
  textarea {
    background-color: theme("colors.off-white");
    padding: 15px 25px;
    text-align: center;
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
  .error_input {
    border: 1px solid theme("colors.dark-blue");
    color: theme("colors.dark-blue") !important;
  }

  .error_input::placeholder {
    color: theme("colors.dark-blue") !important;
  }
</style>
