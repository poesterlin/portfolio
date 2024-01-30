<script lang="ts">
  import { pushState } from "$app/navigation";

  export let src: string;
  export let alt: string;
  export let background = false;

  function openOverlay() {
    pushState("", { zoomImageUri: src });
  }
</script>

<button on:click={openOverlay}>
  <img class:background {src} {alt} loading="lazy" />
</button>

<style>
  img {
    object-fit: contain;
    max-width: 100%;
    max-height: 40vh;
    position: relative;
    overflow: hidden;
    border-radius: 4px;
  }

  button {
    display: flex;
    background: transparent;
    position: relative;
    margin: 35px auto;
    border: 0;
    padding: 0;
  }

  @media (min-width: 600px) {
    button:hover::before {
      box-shadow:
        4px 4px var(--background),
        5px 5px var(--accent);
    }

    button::before {
      content: "";
      position: absolute;
      top: 3px;
      left: 3px;
      display: block;
      background: transparent;
      width: 100%;
      height: 100%;
      z-index: 0;
      transition: 400ms all;
      box-shadow:
        4px 4px var(--background),
        5px 5px var(--borders);
    }
  }

  .background {
    background: white;
  }
</style>
