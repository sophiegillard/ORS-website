<script>
  import { onMount } from "svelte"
  import ContactForm from "$lib/components/ContactForm.svelte"
  import ContactFormTest from "$lib/components/ContactFormTest.svelte"
  import InformationItem from "$lib/components/InformationItem.svelte"
  import SectionWithTitleMain from "$lib/components/layout/SectionWithTitleMain.svelte"

  import "ol/ol.css" // Import OpenLayers default styles
  import Map from "ol/Map"
  import View from "ol/View"
  import TileLayer from "ol/layer/Tile"
  import OSM from "ol/source/OSM"
  import { fromLonLat } from "ol/proj"
  import Overlay from "ol/Overlay"

  let map
  let marker

  // Coordinates for 27 Rue Léon Bernus, 6000 Charleroi
  const coordinates = fromLonLat([4.449926368761656, 50.414745108157106]) // [longitude, latitude]

  onMount(() => {
    // Initialize the map
    map = new Map({
      target: "map", // Target div ID
      layers: [
        new TileLayer({
          source: new OSM(), // OpenStreetMap tiles
        }),
      ],
      view: new View({
        center: coordinates,
        zoom: 17,
      }),
    })

    // Create a marker element
    const markerElement = document.createElement("div")
    markerElement.className = "marker"
    markerElement.innerHTML = "📍"

    // Create and add the overlay (marker)
    marker = new Overlay({
      position: coordinates,
      positioning: "center-center",
      element: markerElement,
      stopEvent: false,
    })
    map.addOverlay(marker)
  })

  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=50.406573,4.444029` // Redirect to Google Maps
</script>

<svelte:head>
  <title>ORS Espace Libre | Contact</title>
  <meta name="Contact" content="Contact, adresses, formulaire" />
</svelte:head>

<div class="text-column">
  <SectionWithTitleMain title="Contact">
    <section class="flex flex-col gap-6 lg:px-28">
      <div class="flex flex-col sm:flex-row bg-gray-100">
        <div class="flex flex-col sm:grow md:grow-0 lg:w-auto">
          <InformationItem title="Adresse">
            <p>Rue Léon Bernus 27</p>
            <p>6000 Charleroi</p>
          </InformationItem>
          <InformationItem title="Mail">
            <p>contact@espacelibre.be</p>
          </InformationItem>
        </div>
        <div class="grow md:block md:w-1/3 lg:w-auto sm:hidden">
          <InformationItem title="Horaire">
            <p>Du lundi au jeudi : 8h30 - 17h</p>
            <div class="flex flex-col justify-center">
              <p>Vendredi : 8h30 - 16h</p>
              <div class="remarque_adapt mb-2 md:mb-3 lg:ml-2">(possibilité d'adaptation)</div>
            </div>

            <p>Permanence téléphonique :</p>
            <p>Mardi et jeudi : 8h30 - 11h30</p>
            <p>Mercredi : 8h30 - 16h</p>
          </InformationItem>
        </div>
        <div class="lg:pr-5 sm:w-1/4 sm:grow md:grow-0 lg:w-auto">
          <InformationItem title="Téléphone" custom_class="{' sm:pb-8 '}">
            <a href="tel:+3271278800">
              <a class="phone_link" href="tel:071/27.88.00">071/27.88.00</a>
            </a>
          </InformationItem>
          <InformationItem title="Fax">
            <p>071/27.88.01</p>
          </InformationItem>
        </div>
      </div>
      <div class="grow hidden sm:block md:hidden">
        <InformationItem title="Horaire">
          <p>Du lundi au jeudi : 8h30 - 17h</p>
          <div class="flex flex-col justify-center">
            <p>Vendredi : 8h30 - 16h</p>
            <p class="remarque_adapt mb-2 md:mb-3 lg:ml-2">(possibilité d'adaptation)</p>
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
          href="{googleMapsUrl}"
          target="_blank"
          rel="noopener noreferrer"
          class="text-blue-500 underline hover:text-blue-700 text-sm"
        >
          Ouvrir dans Google Maps
        </a>
      </div>

      <ContactFormTest></ContactFormTest>
    </section>
  </SectionWithTitleMain>
</div>

<style>
  .map {
    height: 400px;
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
