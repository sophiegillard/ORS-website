<script>
  import { onMount } from 'svelte';
  import ContactForm from "$lib/components/ContactForm.svelte";
  import InformationItem from "$lib/components/InformationItem.svelte";
  import SectionWithTitleMain from "$lib/components/layout/SectionWithTitleMain.svelte";

  import 'ol/ol.css'; // Import OpenLayers default styles
  import Map from 'ol/Map';
  import View from 'ol/View';
  import TileLayer from 'ol/layer/Tile';
  import OSM from 'ol/source/OSM';
  import { fromLonLat } from 'ol/proj';
  import Overlay from 'ol/Overlay';

  let map;
  let marker;

  let formData = {
        name: '',
        email: '',
        message: '',
    };
    let status = '';

    async function handleSubmit() {
        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                status = 'Email sent successfully!';
                formData = { name: '', email: '', message: '' }; // Reset form
            } else {
                status = 'Failed to send email. Try again later.';
            }
        } catch (error) {
            console.error(error);
            status = 'An error occurred. Please try again.';
        }
    }

  // Coordinates for 27 Rue Léon Bernus, 6000 Charleroi
  const coordinates = fromLonLat([4.449926368761656, 50.414745108157106]); // [longitude, latitude]


  onMount(() => {
    // Initialize the map
    map = new Map({
      target: 'map', // Target div ID
      layers: [
        new TileLayer({
          source: new OSM(), // OpenStreetMap tiles
        }),
      ],
      view: new View({
        center: coordinates,
        zoom: 17,
      }),
    });

    // Create a marker element
    const markerElement = document.createElement('div');
    markerElement.className = 'marker';
    markerElement.innerHTML = '📍';

    // Create and add the overlay (marker)
    marker = new Overlay({
      position: coordinates,
      positioning: 'center-center',
      element: markerElement,
      stopEvent: false,
    });
    map.addOverlay(marker);
  });

  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=50.406573,4.444029`; // Redirect to Google Maps
</script>

<svelte:head>
  <title>Contact</title>
  <meta name="Contact" content="Contact, adresses, formulaire" />
</svelte:head>

<div class="text-column">
  <SectionWithTitleMain title="Contact">
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
            <div class="flex flex-col justify-center">
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

      <!-- Map Section -->
        
        <div id="map" class="map rounded-xl border w-full h-full"></div>

      <!-- Google Maps Redirect -->
      <div class="text-center">
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          class="text-blue-500 underline hover:text-blue-700"
        >
          Open in Google Maps
        </a>
      </div>

      <ContactForm></ContactForm>
    </section>
  </SectionWithTitleMain>


  <form on:submit|preventDefault={handleSubmit}>
    <label>
        Name:
        <input type="text" bind:value={formData.name} required />
    </label>
    <label>
        Email:
        <input type="email" bind:value={formData.email} required />
    </label>
    <label>
        Message:
        <textarea bind:value={formData.message} required></textarea>
    </label>
    <button type="submit">Send</button>
    {#if status}
        <p>{status}</p>
    {/if}
</form>
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
