<script>
  export let src;
  export let alt;
  export let background;

  $: overlay = false;

  function toggleOverlay() {
    overlay = !overlay;
  }
</script>

<style>
  img {
    object-fit: contain;
    display: block;
  }

  img.small {
    max-width: 100%;
    max-height: 40vh;
    position: relative;
    overflow: hidden;
    border-radius: 4px;
  }

  img.big {
    max-width: calc(96vw - 25px);
    max-height: calc(94vh - 25px);
    margin: auto;
    top: 0;
    bottom: 0;
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
  }

  button {
    background: transparent;
    color: #fff;
    position: relative;
    margin: 35px auto;
    display: block;
    border: 0;
    padding: 0;
  }
  @media (min-width: 600px) {
    button:hover::before {
      box-shadow: 4px 4px var(--background), 5px 5px var(--accent);
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
      box-shadow: 4px 4px var(--background), 5px 5px var(--borders);
    }
  }

  .overlayContainer {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #48484866;
    z-index: 20;
  }
  .background {
    background: white;
  }
</style>

<button>
  <img
    class="small"
    class:background={background === true}
    on:click={toggleOverlay}
    {src}
    {alt} />
</button>

{#if overlay === true}
  <div class="overlayContainer" on:click={toggleOverlay}>
    <img
      class="big"
      class:background={background === true}
      on:click={toggleOverlay}
      {src}
      {alt} />
  </div>
{/if}
